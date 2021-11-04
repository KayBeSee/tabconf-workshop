import TransactionRow from "./components/TransactionRow";
import EmptyState from "./components/EmptyState";

import { DecoratedTx } from "src/types";

interface Props {
  transactions: DecoratedTx[];
}

export default function Transactions({ transactions }: Props) {
  return (
    <>
      <div className="min-h-full">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Transactions
              </h1>
              <div className="py-4">
                {transactions.length ? (
                  <ul className="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0 bg-white rounded-b-md shadow">
                    {transactions.map((transaction) => (
                      <TransactionRow
                        key={transaction.txid}
                        transaction={transaction}
                      />
                    ))}
                  </ul>
                ) : (
                  <EmptyState />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
