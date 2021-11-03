interface SectionProps {
  children: React.ReactNode;
}

export const SectionGroup = ({ children }: SectionProps) => {
  return <div className="py-6">{children}</div>;
};
