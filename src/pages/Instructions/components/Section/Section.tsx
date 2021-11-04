interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <div className="p-3 sm:p-4 md:px-8 md:py-8 bg-white rounded-md shadow my-8">
      {children}
    </div>
  );
};
