import NextErrorComponent, { ErrorProps } from "next/error";
import * as Sentry from "@sentry/node";
import { NextPageContext } from "next";

interface Props extends ErrorProps {
  hasGetInitialPropsRun: boolean;
  err: Record<string, unknown>;
}

const Error = ({ statusCode, hasGetInitialPropsRun, err }: Props): JSX.Element => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

Error.getInitialProps = async ({ res, err, asPath }: NextPageContext) => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps({
    res,
    err,
  } as NextPageContext)) as Props;

  errorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return { statusCode: 404 };
  }
  if (err) {
    Sentry.captureException(err);
    await Sentry.flush(2000);
    return errorInitialProps;
  }

  Sentry.captureException(`_error.js getInitialProps missing data at path: ${asPath}`);
  await Sentry.flush(2000);

  return errorInitialProps;
};

export default Error;
