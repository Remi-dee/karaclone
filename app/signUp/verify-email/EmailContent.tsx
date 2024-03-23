import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";
import { GiCheckMark } from "react-icons/gi";

import VerifyEmail from "@/app/components/SignUp/VerifyEmail";
const EmailContent = () => {
  return (
    <div className="p-0 m-0 box-border">
      <div className="flex justify-start items-center">
        <div className="w-[450px] bg-white-100 h-[100vh] shadow-lg">
          <div className="my-10 mx-5">
            <Image src={Logo} alt="" className="w-[90px]" />
          </div>
          <div className="mx-5">
            <div className="w-full flex justify-start items-start gap-2 mb-2">
              <div className="flex flex-col items-center justify-center mt-2 gap-1">
                <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
                  <GiCheckMark className="text-white-100" />
                </div>
                <div className="w-[1px] h-[30px] bg-gray-300"></div>
              </div>
              <div className="font-montserrat mb-2">
                <h2 className=" text-base font-semibold">
                  Choose Account Type
                </h2>
                <p className="text-gray-300 text-sm pb-2">
                  Select the type of account you want
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start items-start gap-2 mb-2">
              <div className="flex flex-col items-center justify-center mt-2 gap-1">
                <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
                  <GiCheckMark className="text-white-100" />
                </div>
                <div className="w-[1px] h-[30px] bg-gray-300"></div>
              </div>
              <div className="font-montserrat mb-2">
                <h2 className=" text-base font-semibold">
                  Input Basic Details
                </h2>
                <p className="text-gray-300 text-sm pb-2">
                  Fill in your basic details to get started
                </p>
              </div>
            </div>

            <div className="w-full flex justify-start items-start gap-2 mb-2">
              <div className="flex flex-col items-center justify-center mt-2 gap-1">
                <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
                  <GiCheckMark className="text-white-100" />
                </div>
                <div className="w-[1px] h-[30px] bg-gray-300"></div>
              </div>
              <div className="font-montserrat mb-2">
                <h2 className=" text-base font-semibold">
                  Input Business Details
                </h2>
                <p className="text-gray-300 text-sm pb-2">
                  Fill in your business Details
                </p>
              </div>
            </div>

            <div className="w-full flex justify-start items-start gap-2 mb-2">
              <div className="flex flex-col items-center justify-center mt-2 gap-1">
                <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full text-center bg-primaryBtn text-white font-montserrat">
                  <GiCheckMark className="text-white-100" />
                </div>
                <div className="w-[1px] h-[30px] bg-gray-300"></div>
              </div>
              <div className="font-montserrat mb-2">
                <h2 className=" text-base font-semibold">
                  Create Your Password
                </h2>
                <p className="text-gray-300 text-sm pb-2">
                  Create your password
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start items-start gap-2 mb-2">
              <div className="flex flex-col items-center justify-center mt-2 gap-1">
                <div className="w-[25px] h-[25px] flex justify-center border-2 bg-primaryBtn border-purple-200 items-center rounded-full text-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-white-100"></div>
                </div>
                <div className="w-[1px] h-[30px] bg-gray-200"></div>
              </div>
              <div className="font-montserrat mb-2">
                <h2 className=" text-base text-gray-200 font-semibold">
                  Verify Your Email Address
                </h2>
                <p className="text-gray-200 text-sm pb-2">
                  Verify your registered email address
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start items-start gap-2 mb-2">
              <div className="flex flex-col items-center justify-center mt-2 gap-1">
                <div className="w-[25px] h-[25px] flex justify-center border border-gray-200 items-center rounded-full text-center  text-white font-montserrat">
                  <div className="w-[10px] h-[10px] rounded-full bg-gray-200"></div>
                </div>
              </div>
              <div className="font-montserrat mb-2">
                <h2 className=" text-base text-gray-200 font-semibold">
                  Activate Two Factor Authentication
                </h2>
                <p className="text-gray-200 text-sm pb-2">
                  Protect your account wIth 2FA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <VerifyEmail />
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
