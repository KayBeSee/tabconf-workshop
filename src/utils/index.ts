/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  BlockstreamAPITransactionResponse,
  Vin,
  Vout,
  Address,
  DecoratedVin,
  DecoratedVout,
  DecoratedTx,
} from "src/types";

const getTxType = (
  tx: BlockstreamAPITransactionResponse,
  vin: DecoratedVin[],
  vout: DecoratedVout[]
) => {
  const amountIn = sum(vin, true);
  const amountOut = sum(vout, true);

  if (amountIn === amountOut + (amountIn > 0 ? tx.fee : 0)) {
    return "moved";
  } else {
    const feeContribution = amountIn > 0 ? tx.fee : 0;
    const netAmount = amountIn - amountOut - feeContribution;
    return netAmount > 0 ? "sent" : "received";
  }
};

const isVout = (item: Vin | Vout): item is Vout => {
  return (item as Vout).value !== undefined;
};

const sum = (
  items: (DecoratedVin | DecoratedVout)[],
  isMine: boolean,
  isChange?: boolean
) => {
  let filtered = items;
  if (isMine) filtered = filtered.filter((item) => item.isMine === isMine);
  if (isChange)
    filtered = filtered.filter((item) => item.isChange === isChange);
  let total = filtered.reduce((accum: number, item: Vin | Vout) => {
    if (isVout(item)) {
      return accum + item.value;
    } else {
      return accum + item.prevout.value;
    }
  }, 0);
  return total;
};

export const createMap = <T extends { [key: string]: any }>(
  items: T[],
  key: string
) => {
  return items.reduce((map: { [key: string]: T }, object: T) => {
    map[object[key]] = object;
    return map;
  }, {});
};

export const serializeTxs = (
  transactions: BlockstreamAPITransactionResponse[],
  addresses: Address[],
  changeAddresses: Address[]
): DecoratedTx[] => {
  const filteredTxs = Object.values(createMap(transactions, "txid"));

  const serializedTxs: DecoratedTx[] = [];

  filteredTxs.forEach((transaction) => {
    const tx = decorateTx(transaction, addresses, changeAddresses);
    serializedTxs.push(tx);
  });

  serializedTxs.sort((a, b) => b.status.block_height - a.status.block_height);

  return serializedTxs;
};

export const decorateTx = (
  tx: BlockstreamAPITransactionResponse,
  externalAddresses: Address[],
  changeAddresses: Address[]
): DecoratedTx => {
  const externalMap = createMap(externalAddresses, "address");
  const changeMap = createMap(changeAddresses, "address");

  const vin: DecoratedVin[] = tx.vin.map((vin) => {
    const isChange = !!changeMap[vin.prevout.scriptpubkey_address];
    const isMine = isChange || !!externalMap[vin.prevout.scriptpubkey_address];
    return { ...vin, isChange: isChange, isMine: isMine };
  });
  const vout: DecoratedVout[] = tx.vout.map((vout) => {
    const isChange = !!changeMap[vout.scriptpubkey_address];
    const isMine = isChange || !!externalMap[vout.scriptpubkey_address];
    return { ...vout, isChange: isChange, isMine: isMine };
  });

  const type = getTxType(tx, vin, vout);

  const txCopy: DecoratedTx = {
    ...tx,
    vin,
    vout,
    type,
  };

  return txCopy;
};
