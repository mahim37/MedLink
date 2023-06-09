import "./css/Spin.css";
import NewNavbar from "./components/NewNavbar";
import { ethers } from "ethers";
import React from "react";
import HealthNFTJSON from "./HealthNFT.json";
import { useState} from "react";
import { Fragment } from "react";

export default function Transfernft() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const walletAddr = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    setSenderAddress(addr);
  };
  walletAddr();

  const transfer = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // console.log(addr);

    const to = receiverAddress;
    const tokenId = 0;
    let contract = new ethers.Contract(
      HealthNFTJSON.address,
      HealthNFTJSON.abi,
      signer
    );
    console.log(contract);
    let transaction = await contract.transferNFT(to, tokenId);
    // console.log(transaction);
    await transaction.wait();
    setDialogMessage(`Successfully Transferred your NFT to address ${to}!`);
    setReceiverAddress("");
    setShowDialog(true);

    // alert(`Successfully Transferred your NFT to address ${to}!`);

    window.location.replace("/profile");
  };
  function Dialog({ message, onClose }) {
    return (
      <Fragment>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {message}
                  </h3>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={onClose}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <NewNavbar />
      <div className="flex justify-center">
        <div className="transferform mx-auto">
          <div className="transferform mx-auto">
            <form className="w-full max-w-7xl">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-[436px] px-3 mb-6 md:mb-0">
                  <div className="formkalook">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-s font mb-2"
                      htmlFor="grid-sender-address"
                    >
                      Sender Wallet Address
                    </label>
                    <input
                      className="form-input w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-sender-address"
                      type="text"
                      value={senderAddress}
                      readOnly // Bind the value to the senderAddress state variable
                    />
                  </div>
                </div>
                <br></br>
                <div className="w-full md:w-auto px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-s font mb-2"
                    htmlFor="grid-receiver-address"
                  >
                    Receiver Wallet Address
                  </label>
                  <div className="relative">
                    <input
                      className="form-input w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-receiver-address"
                      type="text"
                      value={receiverAddress}
                    />
                    {/* <select
                className="form-select block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-receiver-address"
              >
                <option>
                  0xb3Ed329EC47337016ABD6ac9871A394103968F11
                </option>
                <option>
                  0x9B1BC0e9041646ad3782642a07de82f7de7a613f
                </option>
                <option>
                  0x7Ad92345e2959C7E46aE934D895Db51Ab0b37cbC
                </option>
              </select> */}
                  </div>
                </div>
              </div>
              <br />
              <button
                className="btn bg-blue-500 text-white hover:bg-blue-700 h-11"
                onClick={transfer}
              >
                Transfer NFT
              </button>

              {showDialog && (
                <Dialog message={dialogMessage} onClose={handleCloseDialog} />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
