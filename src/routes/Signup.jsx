import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Company() {

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-col h-96 pb-2 p-20 pt-2 overflow-auto border-slate-950 border w-4/5">
          <div className="flex justify-center p-5">
            <h1 className="text-slate-200 text-5xl">Terms & Conditions</h1>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="text-slate-300 text-justify p-3 list-disc">
                <li className="mb-2">
                  MedMask will collect and store your medical history information in a secure manner. We will only share your information with your doctor or healthcare provider when you provide us with their contact information.
                </li>
                <li className=" mb-2">
                  Your medical history information will be converted into a non-fungible token (NFT) and stored on a blockchain for security purposes.
                </li>
                <li className=" mb-2">
                  The NFT containing your medical history information will be accessible only to your doctor or healthcare provider. We will send a copy of the master NFT to your doctor or healthcare provider's designated wallet address.
                </li>
                <li className=" mb-2">
                  You have the right to access and review your medical history information at any time. You can also request that we delete your medical history information from our database.
                </li>
                <li className=" mb-2">
                  MedMask does not provide medical advice, diagnosis, or treatment. We are not liable for any medical decisions made by your doctor or healthcare provider based on your medical history information.
                </li>
                <li className=" mb-2">
                  You are responsible for ensuring the accuracy of your medical history information. We are not liable for any errors or omissions in your medical history information.
                </li>
                <li className=" mb-2">
                  MedMask reserves the right to modify or terminate our services at any time. We will notify you of any changes or updates to our terms and conditions or privacy policy.
                </li>
                <li className=" mb-2">
                  You agree to indemnify and hold our company harmless from any claims or damages arising from your use of our services.
                </li>
              </ul>
              
          </div>
        </div>
      </div>
      
      <div className="flex justify-center p-10">
        <div className="flex flex-col">
          <br></br>
          <div className="flex gap-x-10">
            <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
              <Link className=" text-slate-300" to="/dashboard">Sign up as Patient</Link>
            </button>
            <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
              <Link className=" text-slate-300" to="/signupdoctor">Sign up as Doctor</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Company;
