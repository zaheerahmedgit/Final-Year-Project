import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

import './Welcome.css'

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
         
  <p className="text-3xl sm:text-5xl text-white text-gradient py-1">
  <h1>
         Transfer Ethers Fast, <br />Anytime, Anywhere
          </h1> </p>
        
          
        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base txt-animate">
        Dive into Etherra and unlock the potential of its standout features:
        <l>
        <li>Seamless Ethereum transfers between wallets</li>
        <li>Track live prices for the top 100 coins</li> 
        <li>Get real-time data on popular cryptos.</li>
        <li>Monitor crypto trends in real-time.</li>
        <li>Ethereum transfers with live crypto data</li>
    </l>
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 primary-clr p-3 rounded-full cursor-pointer"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            Ethereum Blockchain
            </div>
            <div className={companyCommonStyles}> Decentralized Web </div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
            Data Protection
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
            Decentralized Platform
            </div>
            <div className={companyCommonStyles}>Cost Efficiency</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
            Consistent Quality
            </div>
          </div>
        </div>

        
          
            
              
                
               
                
              
              
              
            
     
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Recipient Address" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword " name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#e5b80b] hover:bg-[#e5b80b95] rounded-full cursor-pointer"
                >
                  Transfer now
                </button>
              )}
          </div>
        </div>
      </div>
   
  );
};

export default Welcome;
