import { useState } from "react";

interface Props {
  createTransaction(recipientAddress: string, amountToSend: number): void;
  error: string;
}

const CreateTxForm = ({ createTransaction, error }: Props) => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amountToSend, setAmountToSend] = useState("");

  return (
    <div className="py-4 flex align-center justify-center">
      <div className="w-full" style={{ maxWidth: 800 }}>
        <div className="mt-5 md:mt-0 md:col-span-2 w-full">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Send bitcoin to...
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="focus:ring-tabconf-blue-500 focus:border-tabconf-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      placeholder="bc1qlhh35k7e6g9zqk6rnxp246a992pduq0jfg0fnl"
                      value={recipientAddress}
                      onChange={(e) => setRecipientAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount to send...
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="focus:ring-tabconf-blue-500 focus:border-tabconf-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="42069"
                      aria-describedby="price-currency"
                      value={amountToSend}
                      onChange={(e) => setAmountToSend(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        sats
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {error && (
              <div className="px-4 py-5 bg-white space-y-6 sm:px-6 sm:pb-2 sm:pt-0 text-red-500 text-xs">
                Error: {error}
              </div>
            )}
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-tabconf-blue-600 hover:bg-tabconf-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tabconf-blue-500"
                onClick={() =>
                  createTransaction(recipientAddress, Number(amountToSend))
                }
              >
                Create transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTxForm;
