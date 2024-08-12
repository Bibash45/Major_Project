import React from 'react';
import { Partner } from './data';

const Sponsors = () => {
  return (
    <div className='container-fluid px-0 my-4'>
      <hr />
      <div className="sponsors-container">
        <div className="sponsors">
          <div className="sponsors-inner">
            {Partner.map((item) => {
              const { id, logo } = item;
              return <img key={id} className='img-fluid sponsor-logo mx-xl-5 mx-xl-4 mx-lg-4 mx-md-3 mx-sm-3' src={logo} alt="" />;
            })}
            {Partner.map((item) => {
              const { id, logo } = item;
              return <img key={`duplicate-${id}`} className='img-fluid sponsor-logo mx-xl-5 mx-xl-4 mx-lg-4 mx-md-3 mx-sm-3' src={logo} alt="" />;
            })}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sponsors;
