"use client";

import { useId, useState } from "react";

export function ContactInquiryForm() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <form
      className="newsletter-form"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (!name.trim()) {
          setError("Enter your name.");
          return;
        }

        if (!email.trim() || !email.includes("@")) {
          setError("Enter a valid email address.");
          return;
        }

        if (message.trim().length < 10) {
          setError("Enter a longer message so the team can help properly.");
          return;
        }

        setSuccess("Your message has been prepared for the Drape team.");
        setName("");
        setEmail("");
        setMessage("");
      }}
    >
      <label className="form-field" htmlFor={nameId}>
        <span>Full Name</span>
        <input id={nameId} value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
      </label>

      <label className="form-field" htmlFor={emailId}>
        <span>Email Address</span>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
        />
      </label>

      <label className="form-field" htmlFor={messageId}>
        <span>Message</span>
        <textarea
          id={messageId}
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what you need help with"
        />
      </label>

      {error ? <p className="form-message form-error">{error}</p> : null}
      {success ? <p className="form-message form-success">{success}</p> : null}

      <button type="submit" className="cta-button">
        Send Inquiry
      </button>
    </form>
  );
}
