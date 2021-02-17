import * as Sentry from "@sentry/node";
import { useState } from "react";
import { Formik, Form, FormikValues } from "formik";
import { string, object } from "yup";
import Alert from "~/components/shared/Alert";
import SpinnerIcon from "~/svg/SpinnerIcon";
import TextField from "~/components/shared/TextField";
import TextArea from "~/components/shared/TextArea";
import Button from "~/components/shared/Button";
import SocialLinks from "~/components/shared/SocialLinks";

export default function Contact(): JSX.Element {
  return (
    <section className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight dark:text-white text-gray-900 sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
            Ask me any question about anything you want.
          </p>
        </div>
        <div className="my-14">
          <ContactForm />
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <p className="mt-8 text-xl pb-8 text-gray-500 dark:text-gray-300 leading-8">
            Want to grab a coffee instead? Hit me up on this form or on my LinkedIn and we can
            arrange to meet up.
          </p>
          <div className="flex pt-4 space-x-6">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto pt-16 px-4 divide-y-2 divide-gray-200 sm:pt-28 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div className="mt-6 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Why can&apos;t I find your email or number?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  I&apos;m a rather private person concerned about the state of personal information
                  on the internet. I prefer not to share personal details with people until I am
                  comfortable to do so, and have provided appropriate methods of contact above.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Where are your social media links?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  I do not have any social media accounts. If you need to get in touch with me,
                  please send me an email with the form above, or use LinkedIn.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Why can&apos;t I toggle dark mode if you support it?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  I can add this feature if requested, but I thought it be easiest if the site
                  follows system preferences.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Can I inspect the code for this website?
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  I&apos;ve made this project repository public. Feel free to scratch through it by
                  following{" "}
                  <a
                    href="https://www.github.com/shnparker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-cyan-700 hover:text-cyan-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    this link
                  </a>
                  .
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  interface FormStatus {
    submitting: boolean;
    submitted: boolean;
    info: {
      error: boolean;
      msg: string | null;
    };
  }

  const formSchema = object().shape({
    name: string().max(64, "Who's name is this long?").required("This is required"),
    email: string().email("Please enter a valid email").trim().required("This is required"),
    phone: string().max(17, "Please enter a valid phone number"),
    message: string().required("This is required"),
  });

  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  function handleSubmit(values: FormikValues, callback: () => void) {
    if (values.phone) {
      Sentry.captureMessage("Honeypot entry detected. Aborting contact form submission");
      return;
    }

    if (process.env.NEXT_PUBLIC_APP_STAGE !== "development") {
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      fetch("https://formspree.io/f/mayldoyd", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.status === 200) {
            handleServerResponse(true, "Thank you, your message has been submitted.");
            callback();
          } else {
            Sentry.captureException("Contact form submissions error");
            handleServerResponse(false, "Something went wrong. I've been notified of this issue.");
          }
        })
        .catch((error) => {
          handleServerResponse(false, error.response.data.error);
        });
    } else {
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      setTimeout(() => {
        setStatus((prevStatus) => ({ ...prevStatus, submitting: false }));
        handleServerResponse(true, "Thank you, your message has been submitted.");
        alert(JSON.stringify(values));
        callback();
      }, 1000);
      clearTimeout();
    }
  }

  function handleServerResponse(ok: boolean, msg: string | null) {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
    setShowAlert(true);
  }

  return (
    <Formik
      initialValues={initialState}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      {({ errors, touched }) => (
        <Form className="grid grid-cols-1 gap-y-6">
          <TextField
            label="name"
            id="name"
            name="name"
            placeholder="Name"
            error={errors.name}
            showMessage={errors.name && touched.name}
          />
          <TextField
            label="email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            error={errors.email}
            showMessage={errors.email && touched.email}
          />
          <TextField
            className="hidden"
            label="name"
            id="name"
            name="name"
            placeholder="Name"
            error={errors.name}
            showMessage={errors.name && touched.name}
          />
          <TextArea
            label="message"
            id="message"
            name="message"
            placeholder="Message"
            error={errors.message}
            showMessage={errors.message && touched.message}
          />
          <div>
            <Button type="submit">
              <>
                {status.submitting && <SpinnerIcon />}
                Submit
              </>
            </Button>
          </div>
          {showAlert && (
            <div className="mb-2">
              <Alert
                variant={status.info.error ? "error" : "success"}
                message={status.info.msg}
                onHide={() => setShowAlert(false)}
              />
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
