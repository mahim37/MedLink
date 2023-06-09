function Blog() {
  return (
    <div>
      <h1 className="text-4xl text-slate-200 font-bold p-12">
        How<span className="text-sky-400"> NFTs </span>Are Changing the
        Healthcare Industry: <br></br>A Look at Our Innovative Solution
      </h1>
      <br></br>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 p-8 w-4/5 place-content-center animate-slideInLeft">
          <div className="border border-sky-500 rounded p-4">
              <h2 className="text-sky-300 text-3xl">
                Verification of authenticity:
              </h2>
              <p className="text-slate-300 text-2xl text-justify p-10">
                NFTs can be used to verify the authenticity of medical documents,
                such as patient records and diagnostic reports. This could help
                prevent fraud and improve patient safety.
              </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 animate-slideInLeft">
        <div className="border border-sky-500 rounded p-4">
          <h2 className="text-sky-300 text-3xl">Ownership of medical data:</h2>
          <p className="text-slate-300 text-2xl text-justify p-4">
            Patients own their medical data, and NFTs could be used to represent
            ownership of that data. This would give patients more control over
            their health information and potentially lead to better health
            outcomes.
          </p>
        </div>
        <div className="border border-sky-500 rounded p-4 animate-slideInRight">
          <h2 className="text-sky-300 text-3xl">
            Fundraising for medical research:
          </h2>
          <p className="text-slate-300 text-2xl text-justify p-4">
            NFTs can also be used to fundraise for medical research, allowing
            individuals to buy and own unique digital assets while supporting a
            good cause.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Blog;
