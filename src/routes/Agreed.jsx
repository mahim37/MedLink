import React from 'react';
import './css/Agreed.css';
import img1 from '../Images/mask.png';

const Agreed = () => {
  return (
    <div> 
      <div className="flex flex-col-reverse lg:flex-row p-10 lg:p-32 text-slate-200">
        <div className="flex-col flex gap-10 basis-3/5 slide-in-left">
          <h1 className="mt-16 text-3xl md:text-5xl lg:text-7xl font-bold font-sans text-left">Secure Your Health. Own Your Health.</h1>
          <p className="text-2xl font-sans font-light text-left">
            Tired of the headache-inducing task of managing your medical
            documents? We've created a platform that utilizes the latest in
            blockchain technology to protect your data from unauthorized access,
            while also giving you the freedom to share it on your terms.
          </p>
        </div>
        <div className="flex justify-center basis-2/5 slide-in-right">
          <img src={img1} alt="Mask"/>
        </div>
      </div>
    </div>
  );
};

export default Agreed;
