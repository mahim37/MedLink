import axios from "axios";
const JWT = process.env.REACT_APP_PINATA_JWT;

export async function uploadJSONToIPFS(nftJSON){
  try {
    // const data = new FormData();
    // data.append("file", nftJSON);
    console.log(nftJSON);
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${JWT}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nftJSON)
    };
    
    const upload = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', options);
    const uploadRes = await upload.json();
    console.log(uploadRes);
    return uploadRes;
  
  } catch (error) {
  
    console.log("Error Uploading JSON", error);
  }

}
export async function uploadFileToIPFS(file){
  if (file) {
    try {

        const data = new FormData();
        data.append("file", file);
        const upload = await fetch(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${JWT}`,
            },
            body: data,
          }
        );
        const uploadRes = await upload.json();
        return uploadRes;

        // const ImgHash = `ipfs://${uploadRes.data.IpfsHash}`;
        // console.log(ImgHash); 
       } catch (error) {
           console.log("Error sending File to IPFS: ")
           console.log(error)
       }
   }
}