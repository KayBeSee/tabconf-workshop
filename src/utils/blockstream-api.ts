import axios from "axios";

import {
  Address,
  BlockstreamAPITransactionResponse,
  BlockstreamAPIUtxoResponse,
} from "src/types";

const BASE_URL = "https://blockstream.info/api";

export const getTransactionsFromAddress = async (
  address: Address
): Promise<BlockstreamAPITransactionResponse[]> => {
  const { data } = await axios.get(
    `${BASE_URL}/address/${address.address}/txs`
  );
  return data;
};

export const getUtxosFromAddress = async (
  address: Address
): Promise<BlockstreamAPIUtxoResponse[]> => {
  const { data } = await axios.get(
    `${BASE_URL}/address/${address.address}/utxo`
  );

  return data;
};

export const getFeeRates = async () => {
  throw new Error("Function not implemented yet");
};

export const broadcastTx = async (txHex: string) => {
  throw new Error("Function not implemented yet");
};
