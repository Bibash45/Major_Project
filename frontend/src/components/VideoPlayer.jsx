import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  return (
    <div className="video-player-container my-5">
      <div className="container text-center">
        <h2>Watch How Your Donations Make a Difference</h2>
        <p>
          See the impact your food donations have on our community. Watch this
          short video to learn more about how we operate and the lives we're
          changing.
        </p>

        <div className="video-frame-container my-4">
          <iframe
            src="https://www.youtube.com/embed/ONu7PYemVyI?si=lA3zV1E2PUYTHhrN?autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            title="Food Donate"
          ></iframe>
        </div>

        <p>
          If you're inspired, please consider{" "}
          <Link to="/donate" className="text-dark">
            donating food
          </Link>{" "}
          or{" "}
          <Link to="/volunteer" className="text-dark">
            volunteering
          </Link>{" "}
          to help us continue our mission.
        </p>
        <a href="/donate" className="btn btn-success mx-2">
          Donate Food
        </a>
        <a href="/volunteer" className="btn btn-secondary mx-2">
          Become a Volunteer
        </a>
      </div>
    </div>
  );
};

export default VideoPlayer;
