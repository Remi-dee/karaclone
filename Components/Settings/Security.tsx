import Image from "next/image";
import React from "react";
import rightarrow from "@/public/svg/arrow-right.svg";
function Security() {
  return (
    <div>
      <div className=" h-[252px] flex  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]">
        <div className=" h-[75px]  min-h-[44px] border-b border-b-[#EFEFEF]">
          <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
            Two-factor authentication
          </h1>

          <p className="  mt-[8px] text-[#656565] text-[14px] font-medium leading-[20px] tracking-[-2%]    ">
            Help protect your account from unauthorised access by requiring a
            second authentication method in addition to your password
          </p>
        </div>

        <section className="  justify-between   flex content-between  w-full">
          <div className=" inline-flex flex-col gap-[8px] max-w-[45%]  flex-1  ">
            <h2 className=" text-[#A3ADBF]     ">Email</h2>

            <p className="  text-[#656565]  text-[14px] leading-[20px] tracking-[-2%] ">
              Use your email to receive your authentication code to enter when
              you log in to your Karasell account
            </p>

            <span className=" flex   items-center content-center gap-[8px]  ">
              <p className="text-[#7F56D9] tracking-[-2%] font-medium text-[14px] leading-[20px]  ">
                Activate
                <span className="ml-[8px]">{">"}</span>
              </p>{" "}
            </span>
          </div>

          <div className=" w-[0.5px] h-full bg-[#DCDCDC] inline-flex"></div>

          <div className=" inline-flex flex-col gap-[8px] max-w-[45%]   flex-1 ">
            <h2 className=" text-[#A3ADBF]     ">AUTHENTICATOR APP</h2>

            <p className="  text-[#656565]  text-[14px] leading-[20px] tracking-[-2%] ">
              Use a mobile authentication app to get a verification code to
              enter every time you log in to your Karasell account
            </p>

            <span className=" flex   items-center content-center gap-[8px]  ">
              <p className="text-[#F04438] tracking-[-2%] font-medium text-[14px] leading-[20px]  ">
                Activate <span> {">"} </span>
              </p>{" "}
              {/* <Image
                src={rightarrow}
                alt=""
                className=" w-[10px]  max-w-[10px]  max-h-[10px]  h-[10px]   "
              />{" "} */}
            </span>
          </div>

          {/* <div></div> */}
        </section>
      </div>

      <div className=" h-[132px] flex mt-[24px]  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]">
        <div className="  h-full flex flex-col gap-[8px] ">
          <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
            Password Reset
          </h1>

          <p className="  mt-[8px] text-[#656565] text-[14px] font-medium leading-[20px] tracking-[-2%]    ">
            Help protect your account from unauthorised access by requiring a
            second authentication method in addition to your password
          </p>

          <span className=" flex   items-center content-center gap-[8px]  ">
            <p className="text-[#7F56D9]  tracking-[-2%] font-medium text-[14px] leading-[20px]  ">
              Change Password
              <span className="ml-[8px]">{">"}</span>
            </p>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Security;
