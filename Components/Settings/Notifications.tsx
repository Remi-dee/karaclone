import React from "react";
import PurpleCheckBox from "../PurpleCheckBox";

function Notifications() {
  return (
    <div className=" h-[320px] flex mt-[24px]  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]">
      <div className="  h-[85px] flex flex-col border-b border-b-[#EFEFEF] gap-[8px] ">
        <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
          Email Notification
        </h1>

        <p className="  mt-[8px] text-[#656565] text-[14px] font-medium leading-[20px] tracking-[-2%]    ">
          Send me email notifications for
        </p>
      </div>

      <div>
        <div className=" flex flex-col gap-[20px]">
          <div className="  flex gap-[8px]">
            <div>
              <PurpleCheckBox />
            </div>

            <div className=" flex flex-col gap-[8px]  items-start justify-start h-full  ">
              <h2 className=" text-[14px] tracking-[-2%]  leading-[20px]  text-[#1E1E1E] font-semibold ">
                Login Alert
              </h2>

              <p className="  text-[#75788B] text-[12px] leading-[14.4px] tracking-[-2%]  ">
                Every time you log in to your account, you'll receive a
                notification.
              </p>
            </div>
          </div>

          {/* //check box 2 */}

          <div className="  flex gap-[8px]">
            <div>
              <PurpleCheckBox />
            </div>

            <div className=" flex flex-col gap-[8px]  items-start justify-start h-full  ">
              <h2 className=" text-[14px] tracking-[-2%]  leading-[20px]  text-[#1E1E1E] font-semibold ">
                Transaction Alert
              </h2>

              <p className="  text-[#75788B] text-[12px] leading-[14.4px] tracking-[-2%]  ">
                You'll receive a notification each time you complete a
                transaction.
              </p>
            </div>
          </div>
          {/* //check box  3*/}

          <div className="  flex gap-[8px]">
            <div>
              <PurpleCheckBox />
            </div>

            <div className=" flex flex-col gap-[8px]  items-start justify-start h-full  ">
              <h2 className=" text-[14px] tracking-[-2%]  leading-[20px]  text-[#1E1E1E] font-semibold ">
                Newsletter
              </h2>

              <p className="  text-[#75788B] text-[12px] leading-[14.4px] tracking-[-2%]  ">
                Stay up-to-date on all our newsletters to receive notifications
                regarding news updates and exchange rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
