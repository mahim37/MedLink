import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "./pinata";
import Footer from './components/Footer'
import { useLocation } from "react-router";
import "./css/Listmynft.css";
import NewNavbar from "./components/NewNavbar";
import HealthNFT from "./HealthNFT.json";
import { ethers } from "ethers";
import { Fragment } from "react";
export default function Listmynft() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [formParams, updateFormParams] = useState({
    name: "",
    sex: "",
    age: "",
    phone: "",
    price: "",
  });
  const [fileURL, setFileURL] = useState(null);

  const [message, updateMessage] = useState("");
  const location = useLocation();
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  //This function uploads the NFT image to IPFS
  async function OnChangeFile(e) {
    var file = e.target.files[0];
    //check for file extension
    try {
      // upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response.pinataURL);
        setFileURL(response.pinataURL);
      }
    } catch (e) {
      console.log("Error during file upload", e);
    }
  }

  //This function uploads the metadata to IPFS
  async function uploadMetadataToIPFS() {
    const { name, sex, age, phone, price } = formParams;
    //Make sure that none of the fields are empty
    if (!name || !sex || !age || !fileURL || !phone) return;
    const nftJSON = {
      name,
      sex,
      age,
      phone,
      price,
      image: fileURL,
    };
    try {
      //upload the metadata JSON to IPFS
      const response = await uploadJSONToIPFS(nftJSON);
      console.log(response.message);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log("error uploading JSON metadata:", e);
    }
  }

  async function listNFT(e) {
    e.preventDefault();

    // //Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS();
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      updateMessage("Please wait.. uploading (upto 5 mins)");
      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        HealthNFT.address,
        HealthNFT.abi,
        signer
      );

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.price, "ether");
      let listingPrice = await contract.getListPrice();
      listingPrice = listingPrice.toString();
      //actually create the NFT
      let transaction = await contract.createToken(metadataURL, price, {
        value: listingPrice,
      });
      await transaction.wait();

      // alert("Successfully listed your NFT!");
      setDialogMessage(`Successfully  listed your NFT!`);
      setShowDialog(true);
      updateMessage("");
      updateFormParams({ name: "", description: "", price: "" });
      // window.location.replace("/profile");
    } catch (e) {
      alert("Upload error" + e);
    }
  }

  console.log("Working", process.env);
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
      <div className="listmynft">
        <div className="flex flex-col place-items-center mt-10" id="nftForm">
          <form className=" shadow-md rounded px-8 pt-4 pb-8 mb-4">
            <h3 className="text-center font-bold text-slate-300 mb-8">
              Upload your NFT to the marketplace
            </h3>
            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
                onChange={(e) =>
                  updateFormParams({ ...formParams, name: e.target.value })
                }
                value={formParams.name}
              ></input>
            </div>
            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="sex"
              >
                Select your Sex
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sex"
                onChange={(e) =>
                  updateFormParams({ ...formParams, sex: e.target.value })
                }
                value={formParams.sex}
              >
                <option value="">-- Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="age"
              >
                Enter your Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                placeholder=""
                min="0"
                max="150"
                step="1"
                onChange={(e) => {
                  const age = parseInt(e.target.value);
                  if (!isNaN(age)) {
                    updateFormParams({ ...formParams, age: age });
                  }
                }}
                value={formParams.age}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="contact"
              >
                Enter your Emergency Contact
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="tel"
                placeholder=""
                pattern="[0-9]{10}" // Accepts 10 digits only
                onChange={(e) => {
                  const phone = e.target.value;
                  updateFormParams({ ...formParams, phone: phone });
                }}
                value={formParams.phone}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Enter Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Min 0.01 ETH"
                step="0.01"
                value={formParams.price}
                onChange={(e) =>
                  updateFormParams({ ...formParams, price: e.target.value })
                }
              ></input>
            </div>
            <div>
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input type={"file"} onChange={OnChangeFile}></input>
            </div>
            <br></br>
            <div className="text-green text-center">{message}</div>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                style={checkboxStyle}
                checked={isCheckboxChecked}
                onChange={(e) => setIsCheckboxChecked(e.target.checked)}
              />
              I consent to the conversion of my medical data into an NFT.
            </label>
            <br></br>
            <button
              onClick={listNFT}
              className={`listbtn bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out w-full sm:w-auto ${
                !isCheckboxChecked ? "opacity-50 hover:bg-sky-500" : ""
              }`}
              disabled={!isCheckboxChecked}
            >
              List NFT
            </button>

            {showDialog && (
              <Dialog message={dialogMessage} onClose={handleCloseDialog} />
            )}
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
const checkboxStyle = {
  marginRight: "5px",
};
const checkboxLabelStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
};
