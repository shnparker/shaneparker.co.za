import { Field } from "formik";

interface Props {
  className?: string;
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  error: string | null;
  rows?: number;
  cols?: number;
  showMessage: boolean;
}

export default function TextField({ rows = 4, ...props }: Props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.name} className="sr-only">
        {props.label}
      </label>
      <Field
        as="textarea"
        id={props.id}
        rows={rows}
        cols={props.cols}
        name={props.name}
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
        placeholder={props.placeholder}
      />
      {<p className="text-red-500">{props.error}</p>}
    </div>
  );
}
