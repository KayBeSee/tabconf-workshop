import { CollectionIcon } from "@heroicons/react/outline";

const EmptyState = () => (
  <button
    type="button"
    className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <CollectionIcon
      className="mx-auto h-12 w-12 text-gray-400"
      aria-hidden="true"
    />
    <span className="mt-2 block text-sm font-medium text-gray-900">
      No UTXOs found
    </span>
  </button>
);

export default EmptyState;
