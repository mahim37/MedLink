import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import log from "../Images/logo1.png";
export default function Footer() {
  return (
    <footer className="bg-slate-900 flex flex-col">
      <div className="flex-col flex lg:flex-row p-12 gap-y-4 lg:gap-y-0 md:p-20 justify-center lg:justify-between">
        <div className="flex flex-col lg:w-2/5">
            <div className="flex">
              <img className="w-20 h-20" src={log} alt="Logo"/>
              <h1 className="text-6xl p-3 text-slate-100"><a href="/">MedLink</a></h1>
            </div>
        </div>
        <div className="flex flex-col lg:w-1/3 m-1">
          <div className="flex m-1">
            <h3 className="text-3xl text-slate-100">Explore</h3>
          </div>
          <div className="flex flex-col text-left m-1 gap-y-1">
              <h3 className="text-2xl text-slate-200 hover:text-[#0665fb] w-1/3"><a href="/">Home</a></h3>
              <h3 className="text-2xl text-slate-200 hover:text-[#0665fb] w-1/3"><a href="/marketplaces">Features</a></h3>
              <h3 className="text-2xl text-slate-200 hover:text-[#0665fb] w-1/3"><a href="/resources">Insights</a></h3>
              <h3 className="text-2xl text-slate-200 hover:text-[#0665fb] w-1/3"><a href="/company">Our Team</a></h3>
              <h3 className="text-2xl text-slate-200 hover:text-[#0665fb] w-1/3"><a href="/signup">Sign Up</a></h3>
            </div>
        </div>
        <div className="flex flex-col lg:w-1/3 text-left gap-y-3">
          <h3 className="text-3xl text-slate-200">Contact Us</h3>
          <p className="text-2xl text-slate-300">
            <MDBIcon icon="envelope" className="me-3" />
            support@medlink.com
          </p>
          <p className="text-2xl text-slate-300">
            <MDBIcon icon="phone" className="me-3" /> +91 8770062687
          </p>
        </div>
      </div>
      <hr className="flex w-4/5 mx-auto h-1"></hr>
      <div className="flex text-xl text-slate-400 justify-center p-4">
        <p>
          © 2023 Copyright <a className='text-reset fw-bold' href='/'>MedLink.Systems</a>
        </p>  
      </div>
    </footer>
  );
}