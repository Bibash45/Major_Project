import React from "react";
const DonationMethod = () => {
  return (
    <>
      <div className="video-container p-4 p-md-5 mb-4 rounded text-center my-3">
        <video className="video-background" autoPlay muted loop>
          <source src="/images/food.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="content col-lg-6 px-0 w-100 m-auto">
          <h2 className="display-4">Be a Donor and Feed the Hungry</h2>
          <p className="lead my-3 w-75 m-auto">
            Donating food has never been easier! Our platform connects donors
            with those in need, ensuring no food goes to waste. Follow these
            simple steps to make a difference today.
          </p>
          <button className="btn btn-success btn-lg mt-3">Get Started</button>
        </div>
      </div>

      {/* steps */}
      <div className="how-it-works container pb-5">
        <section className="intro text-center mb-5">
          <h1 className="display-5 mb-3 mt-5">
            <span className="border-bottom border-2 border-secondary">
              How To Donate
            </span>
          </h1>
        </section>

        <section className="steps row text-center">
  <div className="step col-lg-3 col-md-6 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i className="bi bi-person-circle mb-3 text-success" style={{ fontSize: '2rem' }}></i>
        <h2 className="h5">Step 1: Sign Up or Log In</h2>
        <p className="text-muted">Create an account or log in to start donating.</p>
      </div>
    </div>
  </div>

  <div className="step col-lg-3 col-md-6 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i className="bi bi-list-check mb-3 text-success" style={{ fontSize: '2rem' }}></i>
        <h2 className="h5">Step 2: List Your Food Items</h2>
        <p className="text-muted">Enter the details of the food items you want to donate.</p>
      </div>
    </div>
  </div>

  <div className="step col-lg-3 col-md-6 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i className="bi bi-truck mb-3 text-success" style={{ fontSize: '2rem' }}></i>
        <h2 className="h5">Step 3: Choose a Donation Method</h2>
        <p className="text-muted">Select how you want to donate—drop-off or pick-up.</p>
      </div>
    </div>
  </div>

  <div className="step col-lg-3 col-md-6 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <i className="bi bi-check-circle mb-3 text-success" style={{ fontSize: '2rem' }}></i>
        <h2 className="h5">Step 4: Confirm and Donate</h2>
        <p className="text-muted">Review your donation details and confirm your donation.</p>
      </div>
    </div>
  </div>
</section>

{/* 
        <section className="cta text-center mt-5">
          <h2 className="h4 mb-3">Ready to Make a Difference?</h2>
          <button className="btn btn-success btn-lg"></button>
        </section> */}
      </div>
    </>
  );
};

export default DonationMethod;
