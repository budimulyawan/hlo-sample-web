import React from "react";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  return (
    <ContactSection
      color="white"
      size="medium"
      title="Quote"
      subtitle=""
      showNameField={false}
      buttonText="Send quote"
    />
  );
}

export default ContactPage;
