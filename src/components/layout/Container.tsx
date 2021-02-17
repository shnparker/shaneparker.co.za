import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props): JSX.Element {
  return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>;
}
