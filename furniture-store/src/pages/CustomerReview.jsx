import React, { useRef, useState } from "react";

// Updated the existing reviews to include all the new fields
const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    comment: "Great quality furniture for our new office!",
    rating: "5",
    division: "Operations",
    buyAgain: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    comment: "The ergonomic chairs saved my back.",
    rating: "4",
    division: "Sales",
    buyAgain: true,
  },
];

function CustomerReview() {
  const maxMessageLength = 25;

  // 1. Replaced the formData state with individual refs
  const nameRef = useRef(null);
  const ratingRef = useRef(null);
  const buyAgainRef = useRef(null);
  const divisionRef = useRef(null);
  const messageRef = useRef(null);

  // We still need state for the review list and success message so React knows to re-render the UI
  const [submitted, setSubmitted] = useState(null);
  const [allReviews, setAllReviews] = useState(reviews);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Read values directly from the DOM nodes via refs
    const nameValue = nameRef.current.value.trim();
    const messageValue = messageRef.current.value.trim();

    // Fallback validation if HTML5 validation is bypassed
    if (!nameValue || !messageValue) return;
    if (messageValue.length >= maxMessageLength) {
      alert(`Message must be less than ${maxMessageLength} characters.`);
      return;
    }

    const payload = {
      id: Date.now(),
      name: nameValue,
      rating: ratingRef.current.value,
      buyAgain: buyAgainRef.current.checked,
      division: divisionRef.current.value,
      comment: messageValue,
    };

    setSubmitted(payload);
    setAllReviews((prev) => [...prev, payload]);

    // 3. Reset the form natively using the event target
    e.target.reset();
  };

  return (
    <div className="page">
      <div className="page__header">
        <h2 className="page__title">Customer Reviews</h2>
        <p className="page__subtitle">Tell us how your experience was.</p>
      </div>

      <div className="reviewLayout">
        <section className="cardPanel">
          <h3 className="cardPanel__title">Submit a review</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field__label">Customer name</span>
              {/* Used ref instead of value/onChange */}
              <input
                className="input"
                type="text"
                ref={nameRef}
                placeholder="e.g. Priya Shah"
                required
              />
            </label>

            <label className="field">
              <span className="field__label">
                Customer experience rating (out of 5)
              </span>
              <select
                className="input"
                ref={ratingRef}
                defaultValue="5"
                required
              >
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Okay</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Bad</option>
              </select>
            </label>

            <label className="checkboxField">
              <input type="checkbox" ref={buyAgainRef} defaultChecked={false} />
              <span>Interested in buying again in future</span>
            </label>

            <label className="field">
              <span className="field__label">Division</span>
              <select
                className="input"
                ref={divisionRef}
                defaultValue="Sales"
                required
              >
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Support">Support</option>
                <option value="Operations">Operations</option>
              </select>
            </label>

            <label className="field">
              <span className="field__label">
                Message (less than {maxMessageLength} characters)
              </span>
              <textarea
                className="input textarea"
                ref={messageRef}
                placeholder="Short message…"
                rows={3}
                required
                maxLength={maxMessageLength - 1} // Enforces the limit natively
              />
            </label>

            <button className="primaryButton" type="submit">
              Submit review
            </button>
          </form>

          {submitted ? (
            <div
              className="inlineResult"
              role="status"
              style={{ marginTop: "20px" }}
            >
              <div>
                <strong>Submitted:</strong> {submitted.name} — Rating{" "}
                {submitted.rating}
                /5 — Buy again: {submitted.buyAgain ? "Yes" : "No"} — Division:{" "}
                {submitted.division}
              </div>
              <div>
                <strong>Message:</strong> {submitted.comment}
              </div>
            </div>
          ) : null}
        </section>

        <section className="cardPanel">
          <h3 className="cardPanel__title">Existing reviews</h3>
          <div className="reviewList">
            {allReviews.map((review) => (
              <div
                key={review.id}
                className="reviewItem"
                style={{
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "10px",
                  marginBottom: "10px",
                }}
              >
                <h4 className="reviewItem__title">{review.name}</h4>
                <p className="reviewItem__comment">"{review.comment}"</p>
                {(review.rating ||
                  review.division ||
                  review.buyAgain !== undefined) && (
                  <div
                    className="reviewItem__meta"
                    style={{ fontSize: "0.9em", color: "#555" }}
                  >
                    {review.rating && (
                      <span
                        className="reviewItem__pill"
                        style={{ marginRight: "10px" }}
                      >
                        Rating: {review.rating}/5
                      </span>
                    )}
                    {review.division && (
                      <span
                        className="reviewItem__pill"
                        style={{ marginRight: "10px" }}
                      >
                        Division: {review.division}
                      </span>
                    )}
                    {review.buyAgain && (
                      <span className="reviewItem__pill">Would buy again</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CustomerReview;
