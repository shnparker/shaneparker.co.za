import { Field } from "formik";

interface Props {
  className?: string;
  label: string;
  name: string;
  id: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error: string | null;
  showMessage: boolean;
}

export default function TextField({ type = "text", ...props }: Props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.name} className="sr-only">
        {props.label}
      </label>
      <Field
        type={type}
        id={props.id}
        name={props.name}
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
        placeholder={props.placeholder}
      />
      {<p className="text-red-500">{props.error}</p>}
    </div>
  );
}
