import { useState } from "react";
import { Psbt } from "bitcoinjs-lib";

import { broadcastTx } from "src/utils/blockstream-api";

import CreateTxForm from "./components/CreateTxForm";
import TransactionSummary from "./components/TransactionSummary";

import { Address, DecoratedUtxo } from "src/types";

interface Props {
  utxos: DecoratedUtxo[];
  changeAddresses: Address[];
  mnemonic: string;
}

export default function Send({ utxos, changeAddresses, mnemonic }: Props) {
  const [step, setStep] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [transaction, setTransaction] = useState<Psbt | undefined>(undefined); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");

  const createTransactionWithFormValues = async (
    recipientAddress: string,
    amountToSend: number
  ) => {
    try {
      throw new Error("Function not implemented yet");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div>
      <main className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {step === 0 && (
              <CreateTxForm
                error={error}
                createTransaction={createTransactionWithFormValues}
              />
            )}
            {step === 1 && (
              <TransactionSummary
                transaction={transaction!}
                utxos={utxos}
                broadcastTx={broadcastTx}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
