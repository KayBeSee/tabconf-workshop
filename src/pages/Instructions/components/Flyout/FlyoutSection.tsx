import FlyoutRow from "./FlyoutRow";

interface Props {
  title: string;
  sections: {
    title: string;
  }[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlyoutSection = ({ title, sections, setOpen }: Props) => (
  <div>
    <h3 className="font-medium text-gray-900">{title}</h3>
    <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
      {sections.map((section) => (
        <FlyoutRow
          {...section}
          id={`#${title} ${section.title}`.split(" ").join("_")}
          setOpen={setOpen}
        />
      ))}
    </dl>
  </div>
);

export default FlyoutSection;
