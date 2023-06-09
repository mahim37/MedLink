import React, { useState } from 'react';
import { ethers } from 'ethers';
import HealthNFT from "../HealthNFT.json";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import { Fragment } from 'react';
const HospitalInterface = () => {
  const [patientAddress, setPatientAddress] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [isSensitive, setIsSensitive] = useState(false);
  const [date, setDate] = useState('');
  const [prescribedMedication, setPrescribedMedication] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [fileURL, setFileURL] = useState(null);
  const [message, updateMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const OnChangeFile = async (e) => {
	var file = e.target.files[0];
	try {
  	const response = await uploadFileToIPFS(file);
  	if (response.success === true) {
    	console.log("Uploaded image to Pinata: ", response.pinataURL);
    	setFileURL(response.pinataURL);
  	}
	} catch (e) {
  	console.log("Error during file upload", e);
	}
  };

  const uploadMetadataToIPFS = async () => {
	if (
  	!patientAddress ||
  	!diagnosis ||
  	!date ||
  	!fileURL ||
  	!prescribedMedication ||
  	!doctorName
	)
  	return;
	const nftJSON = {
  	patientAddress,
  	diagnosis,
  	date,
  	prescribedMedication,
  	doctorName,
  	image: fileURL,
	};
	try {
  	const response = await uploadJSONToIPFS(nftJSON);
  	console.log(response.message);
  	if (response.success === true) {
    	console.log("Uploaded JSON to Pinata: ", response);
    	return response.pinataURL;
  	}
	} catch (e) {
  	console.log("error uploading JSON metadata:", e);
	}
  };

  const listNFT = async (e) => {
	e.preventDefault();
	try {
  	const metadataURL = await uploadMetadataToIPFS();
  	const provider = new ethers.providers.Web3Provider(window.ethereum);
  	const signer = provider.getSigner();
  	updateMessage("Please wait.. uploading (upto 5 mins)");
  	let contract = new ethers.Contract(
    	HealthNFT.address,
    	HealthNFT.abi,
    	signer
  	);
  	const price = ethers.utils.parseUnits("1", "ether");
  	let listingPrice = await contract.getListPrice();
  	listingPrice = listingPrice.toString();
  	let transaction = await contract.createToken(metadataURL, price, {
    	value: listingPrice,
  	});
  	await transaction.wait();
  	const tokenId = 0;
  	let transfer = await contract.transferNFT(patientAddress, tokenId);
  	setDialogMessage(`Successfully Appended Records`);
  	setShowDialog(true);
  	updateMessage("");
  	setDate("");
  	setDiagnosis("");
  	setDoctorName("");
  	setPatientAddress("");
  	setPrescribedMedication("");
	} catch (e) {
  	alert("Upload error" + e);
	}
  };

 

  const handleCloseDialog = () => {
	setShowDialog(false);
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


  return (
    <div className="flex flex-col items-center justify-center p-24  rounded shadow text-slate-300">
      <h1 className="text-3xl font-bold mb-8">Hospital Portal</h1>
      <div className="grid grid-cols-2 gap-8 max-w-md">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-lg font-medium ">Patient's Wallet Address:</label>
            <input
              type="text"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full bg-[#141619]"
              placeholder="Enter Patient's Wallet Address"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Diagnosis:</label>
            <input
              type="text"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full bg-[#141619]"
              placeholder="Enter Diagnosis"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full bg-[#141619]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-lg font-medium">Prescribed Medication:</label>
            <input
              type="text"
              value={prescribedMedication}
              onChange={(e) => setPrescribedMedication(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full bg-[#141619]"
              placeholder="Enter Prescribed Medication"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Doctor Name:</label>
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full bg-[#141619]"
              placeholder="Enter Doctor Name"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isSensitive}
              onChange={(e) => setIsSensitive(e.target.checked)}
              className="mr-2"
            />
            <span className="text-lg">Sensitive</span>
          </div>
        </div>
        <div className="col-span-2" style={{display:'flex'}}>
          <label className="text-lg font-medium">Upload Image:</label>
          <input type="file" onChange={OnChangeFile} />
        </div>
      </div>
      <button
        className="mt-8 py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-[#141619]"
        onClick={listNFT}
      >
        Append Diagnosis
      </button>


      {showDialog && (
              <Dialog message={dialogMessage} onClose={handleCloseDialog} />
            )}
    </div>
  );
};

export default HospitalInterface;
