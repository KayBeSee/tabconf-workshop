import { ChevronRightIcon } from "@heroicons/react/solid";
import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";

import { Address } from "src/types";

interface Props {
  address: Address;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AddressRow({ address }: Props) {
  return (
    <li key={address.address}>
      <div className="group block">
        <div className="flex items-center py-5 px-4 sm:py-6 sm:px-2">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-yellow-600 truncate">
                  {address.address}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <DotsCircleHorizontalIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    m/84'/0'/0'{address.derivationPath}
                  </span>
                </p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <span
                  className={classNames(
                    address.type === "used"
                      ? "bg-yellow-100"
                      : address.type === "unused"
                      ? "bg-green-100"
                      : "bg-gray-100",
                    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium  text-gray-800"
                  )}
                >
                  {address.type || "Unknown"}
                </span>
              </div>
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400 group-hover:text-gray-700"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </li>
  );
}
