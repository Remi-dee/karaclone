import React, { FC } from "react";
import Image from "next/image";
import Logo from "@/public/fxkara-logo.svg";
import { GiCheckMark } from "react-icons/gi";

type Props = {
  accountType: string;
  active: number;
  setActive: (active: number) => void;
};
const SignUpOptions: FC<Props> = ({ accountType, active }) => {
  const individualOptions = [
    "Choose Account Type",
    "Input Basic Details",
    "Create Password",
    "Verify Email Address",
    "Activate Two Factor Authentication",
  ];
  const businessOptions = [
    "Select the type of account you want",
    "Fill in your basic details to get started",
    "Fill in your business details",
    "Create Password",
    "Verify your registered email address",
    "Protect your account with 2FA",
  ];
  const optionsToRender =
    accountType === "individual" ? individualOptions : businessOptions;
  return (
    <div className=" relative left-0 _justify-center items-center flex top-0 h-screen w-fit flex-col   p-6  text-white max-sm:hidden lg:w-[246px]  ">
      <div className="my-2 mx-5">
        <Image src={Logo} alt="" className="w-48" />
      </div>
      <div className=" pt-[15%] w-[90%]">
        {optionsToRender.map((option: any, index: number) => (
          <div
            key={index}
            className="  w-max flex justify-start items-start gap-2 mb-2"
          >
            <div className="flex flex-col items-center justify-center mt-2 gap-1">
              <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
                <GiCheckMark className="text-white-100" />
              </div>
              {index !== 5 ? (
                <div className="w-[4px] h-[30px] bg-[#EAECF0]"></div>
              ) : (
                <span />
              )}
            </div>
            <div className="font-montserrat mb-2">
              <h2 className=" text-base font-semibold min-w-max">{option}</h2>
              <p className="text-gray-300 text-sm pb-2 w-full">
                {businessOptions[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SignUpOptions;

// import React from "react";
// import Image from "next/image";
// import { GiCheckMark } from "react-icons/gi";
// import Logo from "@/public/Images/Logo.png";

// export default function SignUpOptions() {
//   return (
//     <div>
//       <div className="relative left-0 flex top-0 h-screen w-fit flex-col   p-6  text-white max-sm:hidden lg:w-[246px] ">
//         <div className="my-10 mx-5">
//           <Image src={Logo} alt="" className="w-[150px] h-[40px]" />
//         </div>
//         <div className="mx-5">
//           <div className="w-full flex justify-start items-start gap-2 mb-2">
//             <div className="flex flex-col items-center justify-center mt-2 gap-1">
//               <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
//                 <GiCheckMark className="text-white-100" />
//               </div>
//               <div className="w-[1px] h-[30px] bg-gray-300"></div>
//             </div>
//             <div className="font-montserrat mb-2">
//               <h2 className=" text-base font-semibold">Input Basic Details</h2>
//               <p className="text-gray-300 text-sm pb-2">
//                 Fill in your basic details to get started
//               </p>
//             </div>
//           </div>

//           <div className="w-full flex justify-start items-start gap-2 mb-2">
//             <div className="flex flex-col items-center justify-center mt-2 gap-1">
//               <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
//                 <GiCheckMark className="text-white-100" />
//               </div>
//               <div className="w-[1px] h-[30px] bg-gray-300"></div>
//             </div>
//             <div className="font-montserrat mb-2">
//               <h2 className=" text-base font-semibold">
//                 Input Business Details
//               </h2>
//               <p className="text-gray-300 text-sm pb-2">
//                 Fill in your business details
//               </p>
//             </div>
//           </div>

//           <div className="w-full flex justify-start items-start gap-2 mb-2">
//             <div className="flex flex-col items-center justify-center mt-2 gap-1">
//               <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
//                 <GiCheckMark className="text-white-100" />
//               </div>
//               <div className="w-[1px] h-[30px] bg-gray-300"></div>
//             </div>
//             <div className="font-montserrat mb-2">
//               <h2 className=" text-base font-semibold">Create Your Password</h2>
//               <p className="text-gray-300 text-sm pb-2">Create Your Password</p>
//             </div>
//           </div>
//           <div className="w-full flex justify-start items-start gap-2 mb-2">
//             <div className="flex flex-col items-center justify-center mt-2 gap-1">
//               <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
//                 <GiCheckMark className="text-white-100" />
//               </div>
//               <div className="w-[1px] h-[30px] bg-gray-300"></div>
//             </div>
//             <div className="font-montserrat mb-2">
//               <h2 className=" text-base font-semibold">
//                 Verify your Email Address
//               </h2>
//               <p className="text-gray-300 text-sm pb-2">
//                 Verify your registered Email Address
//               </p>
//             </div>
//           </div>
//           <div className="w-full flex justify-start items-start gap-2 mb-2">
//             <div className="flex flex-col items-center justify-center mt-2 gap-1">
//               <div className="w-[25px] h-[25px] flex justify-center border-2 bg-primaryBtn border-purple-200 items-center rounded-full">
//                 <div className="w-[10px] h-[10px] rounded-full bg-white-100"></div>
//               </div>
//             </div>
//             <div className="font-montserrat mb-2">
//               <h2 className=" text-base text-gray-200 font-semibold">
//                 Activate Two Factor Authentication
//               </h2>
//               <p className="text-gray-200 text-sm pb-2">
//                 Protect your account wIth 2FA
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// <div key={index} className={"w-full flex py-5"}>
//   <div
//     className={` w-max h-[19px] rounded-full flex   justify-items-center place-items-center items-center justify-center ${
//       active + 1 > index ? "bg-purple-100" : "bg-[384766_1]"
//     } relative`}
//   >
//     <GiCheckMark className="text-[15px]" />
//     {index !== optionsToRender.length - 1 && (
//       <div
//         className={`absolute w-full h-[30px]  ${
//           active + 1 > index ? "bg-purple-100" : "bg-[384766_1]"
//         } bottom-[-100%]`}
//       />
//     )}
//   </div>
//   <h5
//     className={`pl-3  min-w-max ${
//       active === index
//         ? "dark:text-white text-black"
//         : "dark:text-white text-black"
//     } text-[0.99rem] flex justify-self-center place-self-center `}
//   >
//     {option}
//   </h5>
// </div>
