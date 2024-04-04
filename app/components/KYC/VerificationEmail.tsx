import React from 'react'
import {IoIosInformationCircleOutline} from "react-icons/io"

interface VerificationEmailProp{
  onNext:()=>void
}
const VerificationEmail:React.FC<VerificationEmailProp> = ({onNext}) => {
  return (
    <div className='mt-4'>
      <h4 className='font-semibold text-xl pb-8'>Email yourself a verification link</h4>
      <p className="text-xs font-bold p-1">Email</p>
      <div className="p-2 border rounded-lg border-gray-200">
        <input type="email" className="w-full h-full outline-none" placeholder="Enter your email" />
      </div>
      <div className="flex justify-start items-center text-gray-200 my-4 gap-2">
      <IoIosInformationCircleOutline/>
      <p className="text-xs ">Enter an email associated to this account</p>
      </div>
      <button
        onClick={onNext}
        className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg"
      >
        Send Mail
      </button>
    </div>
  )
}

export default VerificationEmail