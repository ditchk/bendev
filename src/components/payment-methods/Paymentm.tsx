import { SiBitcoinsv,SiWise } from "react-icons/si";
import { FaPaypal,FaCcMastercard, FaCcVisa ,FaGooglePay  } from "react-icons/fa";
import { CiBank } from "react-icons/ci";


const Paymentm = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 p-1">
      <SiBitcoinsv className="text-yellow-500 text-2xl" />
      <FaPaypal className="text-blue-700 text-2xl" />
      <FaCcMastercard className="text-red-600 text-2xl" />
      <FaCcVisa className="text-blue-600 text-2xl" />
      <CiBank className="text-green-800 text-2xl" />
      <FaGooglePay className=" text-2xl" />
      <SiWise className="text-lime-800 text-2xl" />
    </div>
  )
}

export default Paymentm
