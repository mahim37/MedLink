import React from "react";
function Team() {
  return (
    <section className="flex p-10 flex-col">
      <h1 className="text-5xl text-slate-200 font-bold text-center">
        Our Team
      </h1>
      <br></br>
      <br></br>
      <div className="flex p-7 justify-center gap-x-10">
        <div className="flex flex-col text-center p-5 bg-slate-100 rounded-xl w-72 h-auto">
          <h2 className="text-4xl text-slate-950">Bhavesh Y</h2>
          <p className="text-xl text-slate-500">Backend Developer</p>
          <div className="flex gap-x-5 justify-center p-3">
            <a href=""><i className="fab fa-linkedin fa-2xl"></i></a>
            <a href=""><i className="fab fa-github fa-2xl"></i></a>
          </div>
        </div>
        <div className="flex flex-col text-center p-5 bg-slate-100 rounded-xl w-72 h-auto">
          <h2 className="text-4xl text-slate-950">Sarvagya Gupta</h2>
          <p className="text-xl text-slate-500">Backend Developer</p>
          <div className="flex gap-x-5 justify-center p-3">
            <a href=""><i className="fab fa-linkedin fa-2xl"></i></a>
            <a href=""><i className="fab fa-github fa-2xl"></i></a>
          </div>
        </div>
        <div className="flex flex-col text-center p-5 bg-slate-100 rounded-xl w-72 h-auto">
          <h2 className="text-4xl text-slate-950">Mahim Gupta</h2>
          <p className="text-xl text-slate-500">Backend Developer</p>
          <div className="flex gap-x-5 justify-center p-3">
            <a href="https://www.linkedin.com/in/mahim-gupta73/"><i className="fab fa-linkedin fa-2xl"></i></a>
            <a href="https://github.com/mahim37"><i className="fab fa-github fa-2xl"></i></a>
          </div>
        </div>
        <div className="flex flex-col text-center p-5 bg-slate-100 rounded-xl w-72 h-auto">
          <h2 className="text-4xl text-slate-950">Kabir Bhawar</h2>
          <p className="text-xl text-slate-500">Frontend Developer</p>
          <div className="flex gap-x-5 justify-center p-3">
            <a href=""><i className="fab fa-linkedin fa-2xl"></i></a>
            <a href=""><i className="fab fa-github fa-2xl"></i></a>
          </div>
        </div>
        <div className="flex flex-col text-center p-5 bg-slate-100 rounded-xl w-72 h-auto">
          <h2 className="text-4xl text-slate-950">Abhilash Bora</h2>
          <p className="text-xl text-slate-500">Frontend Developer</p>
          <div className="flex gap-x-5 justify-center p-3">
            <a href=""><i className="fab fa-linkedin fa-2xl"></i></a>
            <a href=""><i className="fab fa-github fa-2xl"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;