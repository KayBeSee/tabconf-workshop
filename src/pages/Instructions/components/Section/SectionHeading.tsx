interface SectionProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionProps) => {
  return (
    <h1 className="text-2xl font-semibold text-gray-900 py-4">{children}</h1>
  );
};
