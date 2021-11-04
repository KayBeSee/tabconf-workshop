import React from "react";
import { DecoratedUtxo } from "src/types";

interface Props {
  utxo: DecoratedUtxo;
}

const UtxoRow = ({ utxo }: Props) => {
  return (
    <li key={utxo.txid}>
      <button className="group block">
        <div className="flex items-center py-5 px-4 sm:py-6 sm:px-4">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="min-w-0 flex-1 px-6 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-tabconf-blue-600">
                  <span>
                    {utxo.txid}:{utxo.vout}
                  </span>
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <span>
                    Address: {utxo.address.address} (
                    {utxo.bip32Derivation[0].path})
                  </span>
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="truncate">
                    Block:{" "}
                    {utxo.status.block_height
                      ? utxo.status.block_height.toLocaleString()
                      : "Unconfirmed"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <span className="inline-flex items-center px-3 py-0.5 text-sm font-medium text-gray-800">
              {utxo.value.toLocaleString()} sats
            </span>
          </div>
        </div>
      </button>
    </li>
  );
};

export default UtxoRow;
