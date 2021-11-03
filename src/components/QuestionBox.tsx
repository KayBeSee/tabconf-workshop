import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

interface Props {
  question: string;
}

const QuestionBox = ({ question }: Props) => (
  <div className="rounded-md bg-blue-50 p-4 shadow border-gray-200 border">
    <div className="flex">
      <div className="flex-shrink-0">
        <QuestionMarkCircleIcon
          className="h-5 w-5 text-blue-400"
          aria-hidden="true"
        />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-blue-800">Study question</h3>
        <div className="mt-2 text-sm text-blue-700">
          <p>{question}</p>
        </div>
        {/* <div className="mt-4">
          <div className="-mx-2 -my-1.5 flex">
            <button
              type="button"
              className="bg-blue-50 px-2 py-1.5 rounded-md text-sm font-medium text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600"
            >
              View status
            </button>
            <button
              type="button"
              className="ml-3 bg-blue-50 px-2 py-1.5 rounded-md text-sm font-medium text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600"
            >
              Dismiss
            </button>
          </div>
        </div> */}
      </div>
    </div>
  </div>
);

export default QuestionBox;
