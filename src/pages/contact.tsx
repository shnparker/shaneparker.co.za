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

export default function Contact() {
  return (
    <section className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight dark:text-white text-gray-900 sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
            Ask me any question about anything you want.
          </p>
        </div>
        <div className="my-14">
          <ContactForm />
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <p className="mt-8 text-xl  text-gray-500 dark:text-gray-400 leading-8">
            Want to grab a coffee instead? Give me a call at +(27)-23... I'm not putting my phone
            number on the internet lol. Hit me up on this form or on my LinkedIn and we can arrange
            to meet up.
          </p>
          <div className="flex pt-4 space-x-6">
            <SocialLinks />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-3xl mb-4">
            Learn more about contact preferences
          </h2>
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            <p className="mb-4">
              I'm a rather private person concerned about the state of personal information on the
              internet. I prefer not to share personal details with bots and scrapers, and have
              provided appropriate methods of contact above. It might not prevent data harvesting,
              but it's something.
            </p>
            <p>
              I believe social media to be a plague on society. I have no social media of any kind,
              unless you count LinkedIn for professional use only. Twitter is a tool to keep up with
              updates in the tech space and I will not reply on there, but you can follow me for any
              news I might post. Please email me instead to make contact.
            </p>
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

  function handleSubmit(values: FormikValues, callback: Function) {
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
