import * as Sentry from "@sentry/node";
import { useState } from "react";
import { Formik, Form as FormikForm, FormikValues } from "formik";
import { string, object, InferType } from "yup";
import Alert from "components/shared/Alert";
import SpinnerIcon from "svg/SpinnerIcon";
import TextField from "./TextField";
import TextArea from "./TextArea";
import Button from "components/shared/Button";

const formSchema = object().shape({
  name: string().max(64, "Who's name is this long?").required("This is required"),
  email: string().email("Please enter a valid email").trim().required("This is required"),
  phone: string().max(17, "Please enter a valid phone number"),
  message: string().required("This is required"),
});

type FormStatus = {
  submitting: boolean;
  submitted: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
};

export default function Form() {
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
        <FormikForm className="grid grid-cols-1 gap-y-6">
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
        </FormikForm>
      )}
    </Formik>
  );
}
