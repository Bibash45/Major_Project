import React from 'react';

const Contact = () => {
  return (
    <section className="contact py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">We're here to help! Reach out to us with any questions or inquiries.</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Enter the subject" required />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success btn-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
