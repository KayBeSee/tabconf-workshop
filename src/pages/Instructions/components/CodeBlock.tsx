import React from "react";

interface Props {
  children: React.ReactNode;
}

export const CodeBlock = ({ children }: Props) => (
  <pre className="block overflow-x-scroll rounded-md bg-gray-100 font-medium py-2 px-4 font-medium">
    {children}
  </pre>
);
