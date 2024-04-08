import Image from "next/image";
import kyc from "../../../public/Images/kyc.png";
import { IoIosCheckmark } from "react-icons/io";
import { kycData } from "./kycData";


interface kycProp {
    onNext:()=>void
}
const Kyc:React.FC<kycProp> = ({onNext}) => {

  return (
    <div>
      <Image src={kyc} width={40} height={40} alt="" />

      <h2 className="py-6 font-bold text-xl">
        Complete your KYC verification{" "}
      </h2>
      <p className="text-gray-400">This will enable you to</p>
      {kycData?.map((item)=>(
         <div key={item.id} className="mt-4 flex justify-start  items-center gap-2">
        
         <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full bg-purple-100">
           <IoIosCheckmark className="text-white-100 text-xl" />
         </div>
         <p className="text-gray-100 text-sm">{item.name}</p>
       </div>
      ))}
        <button onClick={onNext} className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg">Begin Verification</button>
    </div>
  );
};

export default Kyc;
