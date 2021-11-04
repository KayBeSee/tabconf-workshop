interface Props {
  title: string;
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlyoutRow = ({ title, id, setOpen }: Props) => (
  <div className="py-3 flex justify-between text-sm font-medium">
    <dt className="text-gray-500">{title}</dt>
    <a
      href={id}
      onClick={() => setOpen(false)}
      type="button"
      className="ml-6 bg-white rounded-md text-sm font-medium text-tabconf-blue-600 hover:text-tabconf-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tabconf-blue-500"
    >
      Jump to section
      <span className="sr-only">{title}</span>
    </a>
  </div>
);

export default FlyoutRow;
