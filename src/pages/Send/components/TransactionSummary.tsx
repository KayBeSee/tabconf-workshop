import { useState } from "react";
import { Psbt } from "bitcoinjs-lib";
import {
  SortAscendingIcon,
  SortDescendingIcon,
} from "@heroicons/react/outline";

import { createMap } from "src/utils";
import { DecoratedUtxo } from "src/types";

import TransactionSuccessAlert from "./TransactionSuccessAlert";

interface Props {
  transaction: Psbt;
  utxos: DecoratedUtxo[];
  broadcastTx: (txHex: string) => Promise<string>;
}

const NOT_SIGNED_TEXT = "Not signed!";

const TransactionSummary = ({ transaction, utxos, broadcastTx }: Props) => {
  const [txId, setTxId] = useState("");
  const [error, setError] = useState("");

  const utxoMap = createMap(utxos, "txid");

  let fee: string | number = "";
  try {
    fee = transaction.getFee();
  } catch (e) {
    fee = NOT_SIGNED_TEXT;
  }

  const broadcastTxFromForm = async () => {
    if (!(fee === NOT_SIGNED_TEXT)) {
      try {
        const broadcastedTxId = await broadcastTx(
          transaction.extractTransaction().toHex()
        );
        setTxId(broadcastedTxId);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    }
  };

  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-lg font-medium text-gray-900">Transaction summary</h2>

      {txId && <TransactionSuccessAlert txid={txId} />}

      <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="sr-only">Items in your transaction</h3>
        <ul className="divide-y divide-gray-200">
          <li className="flex py-6 px-4 sm:px-6">
            <div className="flex-shrink-0">
              <SortDescendingIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 mt-1"
                aria-hidden="true"
              />
            </div>

            <div className="ml-6 flex-1 flex flex-col">
              <div className="flex">
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm">
                    <p className="font-medium text-gray-700 hover:text-gray-800">
                      Inputs
                    </p>
                  </h4>
                  {transaction.txInputs.map((input) => (
                    <p className="mt-1 text-sm text-gray-500">
                      <span className="font-semibold">
                        {
                          utxoMap[input.hash.slice().reverse().toString("hex")]
                            .value
                        }{" "}
                        sats
                      </span>{" "}
                      - {input.hash.slice().reverse().toString("hex")}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li className="flex py-6 px-4 sm:px-6">
            <div className="flex-shrink-0">
              <SortAscendingIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 mt-1"
                aria-hidden="true"
              />
            </div>

            <div className="ml-6 flex-1 flex flex-col">
              <div className="flex">
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm">
                    <p className="font-medium text-gray-700 hover:text-gray-800">
                      Outputs
                    </p>
                  </h4>
                  {transaction.txOutputs.map((output) => (
                    <p className="mt-1 text-sm text-gray-500">
                      <span className="font-semibold">{output.value} sats</span>{" "}
                      - {output.address}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </li>
        </ul>
        <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Network fee</dt>
            <dd className="text-sm font-medium text-gray-900">{fee}</dd>
          </div>
          {error ? (
            <div className="flex items-center justify-between text-red-500">
              <dt className="text-sm">Error</dt>
              <dd className="text-sm font-medium text-red-500">{error}</dd>
            </div>
          ) : null}
        </dl>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            onClick={() => broadcastTxFromForm()}
          >
            {fee === NOT_SIGNED_TEXT
              ? "Oops! Tx not signed."
              : "Broadcast transaction"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
