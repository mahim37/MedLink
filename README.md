
# Medical NFTs: MedMask

This project aims to create a platform for managing medical documents using NFTs (non-fungible tokens). NFTs are unique digital assets that can represent anything from art to music to medical data. By using NFTs, this project hopes to solve some of the problems that patients, doctors, and advertisers face when dealing with medical data.

## Problem Statement

- Managing medical documents is inconvenient for both patients and doctors. Patients have to keep track of their records and share them with different doctors. Doctors have to store and access large amounts of data from various sources.
- Data that doctors collect is insecure and patients lose control. Medical data is often stored on centralized servers that are vulnerable to hacking or data breaches. Patients have no way of knowing who has access to their data or how it is used.
- It is hard for advertisers and researchers to buy data without dummy data. Advertisers and researchers need accurate and relevant medical data for their purposes, but they often have to deal with dummy data that is unreliable or unethical.

## Solution and Benefits

This project proposes to use NFTs to store and manage medical data on the Ethereum blockchain. This would provide the following benefits:

### User Benefits

- Security: NFTs could help ensure the privacy and security of medical data. Blockchain technology, which is often used to create NFTs, is known for its security features such as immutability and encryption. This means that medical data stored on a blockchain could be more secure and less susceptible to hacking or data breaches.
- Verification of authenticity: NFTs can be used to verify the authenticity of medical documents, such as patient records and diagnostic reports. This could help prevent fraud and improve patient safety.
- Control of data: Patients can have more control over their own data by using NFTs. They can decide who can access their data and for what purpose. They can also opt to sell their data to advertisers or researchers who are interested in it. They will know who buys their data and how much they pay for it.
- Burnable copy of data: Patients can choose to burn their copy of the data after selling it or sharing it with someone else. This would ensure that they do not have duplicate copies of the same data that could cause confusion or conflict.

### Doctor Benefits

- One stop access to data: Doctors can use NFTs to access all the relevant medical data of their patients in one place. They do not have to deal with multiple sources or formats of data. They can also update the data as needed, such as adding new medications or procedures.
- Storage of medical records on ETH: Doctors can use ETH (Ethereum) as a storage medium for their medical records. ETH is a cryptocurrency that can be used to pay for transactions on the Ethereum blockchain. By storing their records on ETH, doctors can save money on storage costs and also earn rewards for validating transactions.

### Advertiser Benefits

- Easy access to precise data: Advertisers can use NFTs to buy precise medical data from patients who are willing to sell it. They can filter out large amounts of data based on various parameters, such as diagnosis, age range, location, etc. This would help them target their ads more effectively and efficiently.
- Relevancy of ads for the patient: Advertisers can use NFTs to deliver relevant ads to the patients who are interested in them. For example, if a patient has diabetes, they might receive ads for diabetes-related products or services. This would increase the chances of conversion and customer satisfaction.
- Lower costs: Advertisers can save money by using NFTs instead of dummy data. Dummy data is often unreliable or unethical, and it can also cost more than real data. By using NFTs, advertisers can get accurate and relevant data at a lower price.

## Implementation

This project uses smart contracts written in Solidity language to create and manage NFTs on the Ethereum blockchain. It also uses OpenZeppelin library, which provides reusable and secure code for common functionalities such as ERC721 standard, which defines how NFTs should work.

The project consists of three main components:

- A web interface that allows users to interact with the smart contracts and view their NFTs.
- A backend server that handles the communication between the web interface and the smart contracts.
- A database that stores the metadata of the NFTs, such as name, description, image URL, etc.

The project follows these steps:

1. A user registers on the web interface and creates an account with a wallet address.
2. A user uploads their medical document (such as a PDF file) on the web interface

## Installation

To use this application, you must have MetaMask wallet or any other wallet installed on your device. You can download MetaMask from the following link: https://metamask.io/

Once you have installed the wallet, you need to connect to our private blockchain using the following:

RPC link: http://34.131.237.20 <br>
ChainId: `1337`

To install and run this application on your local machine, follow the steps below:

1. Clone the repository to your local machine.
```bash
git clone https://github.com/mahim37/MEdMASk 
```
2. Open the terminal and navigate to the project directory.
```bash
cd MEdMASk/
```
3. Install the dependencies
```bash 
npm install
``` 
4. Start the development Server
```bash 
npm start
``` 
