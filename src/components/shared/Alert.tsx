import { ReactEventHandler } from "react";
import CloseIcon from "~/svg/CloseIcon";

interface Props {
  message: string;
  variant: "success" | "info" | "error" | "warning";
  onHide: ReactEventHandler;
}

export default function Alert(props: Props) {
  let alertStyles;

  switch (props.variant) {
    case "error":
      alertStyles = {
        icon: "text-red-400",
        message: "text-red-700",
        background: "bg-red-50",
        button:
          "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600",
      };
      break;
    case "success":
    default:
      alertStyles = {
        icon: "text-green-400",
        message: "text-green-800",
        background: "bg-green-50",
        button:
          "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600",
      };
      break;
  }

  return (
    <div className={`rounded-md p-4 ${alertStyles.background}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className={`h-5 w-5 ${alertStyles.icon}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${alertStyles.message}`}>{props.message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={props.onHide}
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${alertStyles.button}`}
            >
              <span className="sr-only">Dismiss</span>
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
