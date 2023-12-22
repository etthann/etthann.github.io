import React, { useEffect, useRef } from "react";
import "../ContactMe/ContactMe.css";
import emailjs from "@emailjs/browser";
import observer from "../Obeserver";

const ContactMe: React.FC = () => {
  
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".ContactMeTextInputLabelHide");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".ContactMeTextInputHide");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".ContactMeTextHide");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".ContactMeHide");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY!,
        process.env.REACT_APP_TEMPLATE_KEY!,
        formRef.current!,
        process.env.REACT_APP_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section style={{overflow:"hidden"}}>
      <div className="ContactContainer ContactMeHide">
        <div className="ContactMe">Contact Me</div>
        <div className="Quote ContactMeTextHide">
          We don’t meet people by accident. They are meant to cross our path for
          a reason.” – Unknown
        </div>
        <div className="FormContainer ContactMeTextInputHide">
        <form ref={formRef} onSubmit={sendEmail}>
            <label className="NameLabel ContactMeTextInputLabelHide">Name</label>
            <input type="text" name="user_name" className="Name ContactMeTextInputHide" />
            <label className="EmailLabel ContactMeTextInputLabelHide">Email</label>
            <input type="email" name="user_email" className="Email ContactMeTextInputHide" />
            <label className="MessageLabel ContactMeTextInputLabelHide">Message</label>
            <textarea name="message" className="Message ContactMeTextInputHide" />
            <input type="text" name="honeypot" style={{display: 'none'}} />
            <input type="submit" value="Send" className="Send ContactMeTextInputHide" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
