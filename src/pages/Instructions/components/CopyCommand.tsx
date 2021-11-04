import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CommandArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ClipboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="group-hover:block"
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

interface Props {
  command: string;
  showCommandArrow: boolean;
}

export const CopyCommand = ({ command, showCommandArrow }: Props) => {
  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboard
      text={command}
      onCopy={() => {
        setCopied(true);
      }}
    >
      <div className="flex group items-center justify-between border border-dashed border-gray-400 bg-gray-100 py-2 pl-1 pr-4 text-sm mb-8 mt-2 hover:bg-green-100 cursor-pointer">
        <span className="flex items-center">
          {showCommandArrow && <CommandArrow />}
          <span>{command}</span>
        </span>
        {copied ? <CheckMark /> : <ClipboardIcon />}
      </div>
    </CopyToClipboard>
  );
};
