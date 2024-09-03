import React from "react";
import { Helmet } from "react-helmet";

const HelpPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Help - DonateFood</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mt-5">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="display-4">Need Help?</h1>
          <p className="lead">
            We’re here to assist you in making a difference!
          </p>
        </div>

        {/* Search Bar */}
        <div className="row mb-5">
          <div className="col-md-8 offset-md-2">
            <input
              type="text"
              className="form-control p-3"
              placeholder="How can we help you today?"
            />
          </div>
        </div>

        {/* Help Topics */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">How to Donate</h5>
                <p className="card-text">
                  Learn the simple steps to donate food through our platform.
                </p>
                <a href="#!" className="btn btn-success">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Becoming a Volunteer</h5>
                <p className="card-text">
                  Join our community of volunteers and help us reach more people
                  in need.
                </p>
                <a href="#!" className="btn btn-success">
                  Get Involved
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tracking Your Donations</h5>
                <p className="card-text">
                  Keep track of where your donations go and the impact they
                  make.
                </p>
                <a href="#!" className="btn btn-success">
                  Track Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="accordion" id="faqAccordion">
          <div className="card">
            <div className="card-header" id="faqHeadingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#faqCollapseOne"
                  aria-expanded="true"
                  aria-controls="faqCollapseOne"
                >
                  What types of food can I donate?
                </button>
              </h2>
            </div>
            <div
              id="faqCollapseOne"
              className="collapse show"
              aria-labelledby="faqHeadingOne"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                You can donate non-perishable items, fresh produce, canned
                goods, and more.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="faqHeadingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#faqCollapseTwo"
                  aria-expanded="false"
                  aria-controls="faqCollapseTwo"
                >
                  How do I track my donations?
                </button>
              </h2>
            </div>
            <div
              id="faqCollapseTwo"
              className="collapse"
              aria-labelledby="faqHeadingTwo"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                You can track your donations through the 'Track Now' section on
                this page.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="text-center mt-5">
          <h2>Still Need Help?</h2>
          <p>Our team is ready to assist you.</p>
          <a
            href="mailto:support@fooddonate.com"
            className="btn btn-outline-success mr-3"
          >
            Email Us
          </a>
          <a href="tel:+1234567890" className="btn btn-outline-success mx-3">
            Call Us
          </a>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
