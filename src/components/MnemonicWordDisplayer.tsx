import React from "react";

interface Props {
  mnemonicWords: string;
}

export const MnemonicWordsDisplayer = ({ mnemonicWords }: Props) => {
  const mnemonicWordsArray = mnemonicWords.split(" ");

  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        {mnemonicWordsArray.slice(0, 6).map((word, index) => (
          <div
            key={index}
            className="flex-col items-center px-4 py-2 border border-transparent shadow-sm text-xs sm:text-sm md:text-md lg:text-xl font-medium rounded-md text-white bg-yellow-500 my-2 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <span className="mr-3 text-xs">({index + 1})</span>
            {word}
          </div>
        ))}
      </div>
      <div>
        {mnemonicWordsArray.slice(6, 12).map((word, index) => (
          <div
            key={index + 6}
            className="flex-col items-center px-4 py-2 border border-transparent shadow-sm text-xs sm:text-sm md:text-md lg:text-xl font-medium rounded-md text-white bg-yellow-500 my-2 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <span className="mr-3 text-xs">({index + 7}) </span>
            {word}
          </div>
        ))}
      </div>
      <div>
        {mnemonicWordsArray.slice(12, 18).map((word, index) => (
          <div
            key={index + 12}
            className="flex-col items-center px-4 py-2 border border-transparent shadow-sm text-xs sm:text-sm md:text-md lg:text-xl font-medium rounded-md text-white bg-yellow-500 my-2 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <span className="mr-3 text-xs">({index + 13})</span>
            {word}
          </div>
        ))}
      </div>
      <div>
        {mnemonicWordsArray.slice(18, 24).map((word, index) => (
          <div
            key={index + 18}
            className="flex-col items-center px-4 py-2 border border-transparent shadow-sm text-xs sm:text-sm md:text-md lg:text-xl font-medium rounded-md text-white bg-yellow-500 my-2 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <span className="mr-3 text-xs">({index + 19})</span>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};
