import { SVGAttributes } from "react";

export default function BrandIcon(props: SVGAttributes<SVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 82.26 92.47" {...props}>
      <defs>
        <style>{".prefix__cls-6{fill-rule:evenodd;fill:#350f2b}"}</style>
      </defs>
      <path fillRule="evenodd" fill="#4fd5d6" d="M41.13 6.73l34.3 20.08-34.3 19.71V6.73z" />
      <path fill="red" fillRule="evenodd" d="M75.43 26.81l-34.3 19.68v39.24l34.3-19.97V26.81z" />
      <path fill="#cdffff" fillRule="evenodd" d="M41.13 6.73l-34.3 20.4 34.3 19.39V6.73z" />
      <path fill="#872835" fillRule="evenodd" d="M6.83 27.13l34.3 19.39v39.21L6.83 65.76V27.13z" />
      <path
        fill="#ff5d5f"
        fillRule="evenodd"
        d="M64.37 33.19v26.54L41.11 72.87v-7.05l17.17-9.69V43.87l-17.15 9.66v-7.01l23.24-13.33z"
      />
      <path
        className="prefix__cls-6"
        d="M17.81 33.34l23.32 13.18v7.01L17.82 40.32l-.01-6.98zM30.52 59.84l10.61 6.01v7.02l-10.6-6.01-.01-7.02z"
      />
      <path fill="#00b6c9" fillRule="evenodd" d="M51.74 33.19l-10.61-5.98V20.2l10.61 5.97v7.02z" />
      <path
        fill="#00d8d8"
        fillRule="evenodd"
        d="M17.81 33.34l6.28 3.52 17.04-9.65V20.2L17.81 33.34z"
      />
    </svg>
  );
}
