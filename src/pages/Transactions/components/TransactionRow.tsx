import moment from "moment";
import { CalendarIcon } from "@heroicons/react/outline";

import { DecoratedTx } from "src/types";

interface Props {
  transaction: DecoratedTx;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TransactionRow = ({ transaction }: Props) => {
  return (
    <li key={transaction.txid}>
      <div className="group block">
        <div className="flex items-center py-5 px-4 sm:py-6 sm:px-4">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0" style={{ flexBasis: "5em" }}>
              <span
                className={classNames(
                  transaction.type === "sent" ? "bg-red-100" : "bg-green-100",
                  "inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium text-gray-800"
                )}
              >
                {transaction.type}
              </span>
            </div>
            <div className="min-w-0 flex-1 px-6 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-yellow-600">
                  {transaction.txid}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    {moment
                      .unix(transaction.status.block_time)
                      .format("MMMM Do YYYY, h:mma")}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <span className="inline-flex items-center px-3 py-0.5 text-sm font-medium text-gray-800">
              {transaction.vout[0].value.toLocaleString()} sats
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TransactionRow;
