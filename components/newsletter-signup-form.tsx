"use client";

import { useId, useState } from "react";

export function NewsletterSignupForm() {
  const emailId = useId();
  const occasionId = useId();
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("");
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

        if (!email.trim() || !email.includes("@")) {
          setError("Enter a valid email address.");
          return;
        }

        if (!occasion.trim()) {
          setError("Tell us your shopping occasion.");
          return;
        }

        setSuccess("You are on the Drape private list.");
        setEmail("");
        setOccasion("");
      }}
    >
      <label className="form-field" htmlFor={emailId}>
        <span>Email Address</span>
        <input
          id={emailId}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={error.toLowerCase().includes("email")}
          autoComplete="email"
        />
      </label>

      <label className="form-field" htmlFor={occasionId}>
        <span>Occasion</span>
        <input
          id={occasionId}
          type="text"
          placeholder="Wedding, festive, evening..."
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          aria-invalid={error.toLowerCase().includes("occasion")}
        />
      </label>

      {error ? <p className="form-message form-error">{error}</p> : null}
      {success ? <p className="form-message form-success">{success}</p> : null}

      <button type="submit" className="cta-button">
        Request Access
      </button>
    </form>
  );
}
