import React, { useState } from "react";
import ContactForm from "./ContactForm";
import contact from "./../util/contact.js";

function Contact(props) {
  const [status, setStatus] = useState();

  const onSubmit = ({ name, email, message }) => {
    setStatus({ type: "pending" });

    contact.submit({ name, email, message }).then(() => {
       /*global spHelper*/
      spHelper.sendTerminalCommand("NP." + name);
      setStatus({
        type: "success",
        message: "Your profile is moved"
      });
    });
  };
  return (
    <ContactForm
      parentColor={props.parentColor}
      showNameField={props.showNameField}
      buttonText={props.buttonText}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default Contact;
