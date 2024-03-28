import React from 'react'
import { SiBitcoinsv,SiWise } from "react-icons/si";
import { FaPaypal,FaCcMastercard, FaCcVisa ,FaGooglePay  } from "react-icons/fa";
import { CiBank } from "react-icons/ci";


const Paymentm = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <SiBitcoinsv className="text-yellow-500 text-xl" />
      <FaPaypal className="text-blue-700 text-xl" />
      <FaCcMastercard className="text-red-600 text-xl" />
      <FaCcVisa className="text-blue-600 text-xl" />
      <CiBank className="text-green-800 text-xl" />
      <FaGooglePay className=" text-xl" />
      <SiWise className="text-lime-800 text-xl" />
    </div>
  )
}

export default Paymentm
