import React from "react";
import _ from "lodash";
import Recaptcha from "react-recaptcha";

interface ContactFormState {
  values: {
    [key: string]: string;
  };
  errors: {
    [key: string]: string;
  };
}

interface ContactFormAction {
  type: string;
  payload: {
    name: string;
    value: string;
  };
}

const initialFormState = {
  values: {
    name: "",
    email: "",
    phone: "",
    message: ""
  },
  errors: {}
};

const formStateReducer = (
  state: ContactFormState,
  action: ContactFormAction
) => {
  switch (action.type) {
    case "SET_VALUE":
      return Object.assign({}, state, {
        values: {
          [action.payload.name]: action.payload.value
        }
      });
    default:
      throw new Error();
  }
};

const ContactForm: React.FC = () => {
  const recaptchaInstance = React.useRef<Recaptcha | null>(null);

  const [formState, dispatch] = React.useReducer(
    formStateReducer,
    initialFormState
  );
  const [verified, setVerified] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleCaptchaLoad = () => {};

  const handleVerification = () => {
    setVerified(true);
  };

  const validate = () => {};

  const handleChange = (event: React.ChangeEvent) => {
    const formElement = event.target as HTMLTextAreaElement | HTMLInputElement;
    const { name, value } = formElement;

    if (name) {
      dispatch({
        type: "SET_VALUE",
        payload: {
          name,
          value
        }
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Abort form submission if user has not passed verification.
    if (verified === false) return;

    // Abort form submission if form has errors.
    validate();
    if (!_.isEmpty(formState.errors)) return;

    const values = formState.values;
    const data = {
      site: "qgourmetchef.com.au",
      accessKey:
        "29ka66q948bupk797pn6gpm9z78eksu8ugvq3nfnfk5s9apv4cbex2fns8wpuvj8",
      values: {
        name: {
          label: "Name",
          value: values.name
        },
        phone: {
          label: "Phone",
          value: values.phone
        },
        email: {
          label: "Email",
          value: values.email
        },
        message: {
          label: "Message",
          value: values.message
        }
      }
    };

    fetch(`https://mailservice.trdi.com.au/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed.");
        dispatch({
          type: "SET_ERROR",
          payload: {
            name: "form",
            value: "Form submission failed."
          }
        });
      }
    });
  };

  if (submitted) {
    return (
      <div className="alert alert-success shadow">
        <h2>Message sent</h2>
        <p>
          Thank you for your enquiry. We will get back to you as soon as
          possible.
        </p>
      </div>
    );
  } else if (formState.errors.form) {
    return (
      <div className="">
        <h2>Error</h2>
        <p>{formState.errors.form}</p>
      </div>
    );
  } else {
    const values = formState.values;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
            value={values.name || ""}
            required={true}
            maxLength={255}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            required={true}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            onChange={handleChange}
            value={values.phone || ""}
            required={true}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            name="message"
            onChange={handleChange}
            value={values.message || ""}
            required={true}
            rows={5}
          />
        </div>
        <Recaptcha
          ref={recaptchaInstance}
          render="explicit"
          sitekey="6Lc7qsIZAAAAAIQPEz5F4OsGSZeGLd58lBFSBOk7"
          verifyCallback={handleVerification}
          onloadCallback={handleCaptchaLoad}
        />
        <button
          className="btn btn-primary mt-3"
          type="submit"
          disabled={!verified}
        >
          Send
        </button>
      </form>
    );
  }
};

export default ContactForm;
