import React, { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState(""); // State for emoji feedback
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Feedback Submitted:", { name, email, message, emoji });
    setSubmitted(true);

    // Optionally, reset the form
    setName("");
    setEmail("");
    setMessage("");
    setEmoji(""); // Reset emoji selection
  };

  return (
    <div className="container py-5 row flex m-auto">
      <div className="col-md-8 mx-auto">
        <h1 className="text-center mb-4 text-muted">Share Your Feedback</h1>

        {submitted ? (
          <div className="alert alert-success text-center" role="alert">
            Thank you for your feedback!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-4 form-container"
          >
            <div className="mb-3 form-floating">
              <input
                type="text"
                placeholder=""
                className="form-control "
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>
            <div className="mb-3 form-floating">
              <input
                type="email"
                placeholder=""
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="mb-4 form-floating">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                placeholder=""
                className="form-control "
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ height: "150px" }}
              />
            </div>

            {/* Emoji Selection Section */}
            <div className="mb-4 text-center">
              <p className="mb-2 text-muted">How was your experience?</p>
              <div className="emoji-container">
                <span
                  role="button"
                  className={`emoji ${emoji === "😊" ? "active-emoji" : ""}`}
                  onClick={() => setEmoji("😊")}
                >
                  😊
                </span>
                <span
                  role="button"
                  className={`emoji ${emoji === "😐" ? "active-emoji" : ""}`}
                  onClick={() => setEmoji("😐")}
                >
                  😐
                </span>
                <span
                  role="button"
                  className={`emoji ${emoji === "😞" ? "active-emoji" : ""}`}
                  onClick={() => setEmoji("😞")}
                >
                  😞
                </span>
              </div>
              <p className="mt-2 text-muted">Selected: {emoji || "None"}</p>
            </div>

            <button type="submit" className="btn btn-animated w-100 btn-lg">
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default FeedbackForm;
