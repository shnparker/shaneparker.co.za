import { ReactEventHandler } from "react";

interface Props {
  onClick?: ReactEventHandler;
  disabled?: boolean;
  children: JSX.Element;
  type?: "submit" | "button";
}

export default function Button({ type = "button", ...props }: Props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={type}
      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition"
    >
      {props.children}
    </button>
  );
}
