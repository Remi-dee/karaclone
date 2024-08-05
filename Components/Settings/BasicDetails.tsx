import {
  useLoadUserQuery,
  useUpdateUserProfileMutation,
} from "@/redux/features/user/userApi";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function BasicDetails() {
  const { data: user } = useLoadUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [initialUserData, setInitialUserData] = useState({});
  const [updateUserProfile] = useUpdateUserProfileMutation();

  useEffect(() => {
    if (user?.user) {
      const initialData = {
        firstName: user.user.name?.split(" ")[0] || "",
        lastName: user.user.name?.split(" ")[1] || "",
        email: user.user.email || "",
        phone: user.user.phone || "",
        gender: user.user.gender || "",
      };
      setUserData(initialData);
      setInitialUserData(initialData);
    }
  }, [user]);

  const handleCancel = () => {
    setEditMode(false);
    setUserData(initialUserData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async () => {
    const updatedData = {};
    for (const key in userData) {
      if (userData[key] !== initialUserData[key]) {
        updatedData[key] = userData[key];
      }
    }

    try {
      if (Object.keys(updatedData).length > 0) {
        const updatedUserData = {
          ...updatedData,
          name: `${updatedData.firstName || initialUserData.firstName} ${
            updatedData.lastName || initialUserData.lastName
          }`,
        };
        await updateUserProfile(updatedUserData);
      }
      setEditMode(false);
    } catch (error) {
      console.error("Failed to update user profile", error);
    }
  };

  return (
    <div className="  flex  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]  ">
      <div className="  h-[44px]  min-h-[44px] w-full border-b border-b-[#EFEFEF] flex justify-between items-center">
        <h1 className="  font-bold leading-[28px] w-full tracking-[-2%] text-nowrap  text-[16px] md:text-[18px]   ">
          Personal Information
        </h1>
        {!editMode && (
          <button
            className=" text-[#7F56D9] w-full px-0 md:px-4 text-[14px] md:text-[18px] py-0 md:py-2 "
            onClick={() => setEditMode(true)}
          >
            Edit Profile &gt;
          </button>
        )}
      </div>

      <section className="  flex  gap-[24px] ">
        <div className="w-full flex flex-col content-between justify-between h-full gap-[24px]">
          <div className=" flex flex-col gap-[4px] w-full">
            <h2 className="   font-[500] tracking-[-2%] leading-[20px]  text-[14px] ">
              FIRST
            </h2>
            {editMode ? (
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="text-[16px] w-[7.5rem] md:w-full leading-[24px] tracking-[-2%] text-[#464646] border border-[#464646] p-2 rounded-[8px]"
              />
            ) : (
              <p className=" text-[16px] leading-[19px] md:leading-[24px] font-bold tracking-[-2%] text-[#464646] ">
                {userData.firstName}
              </p>
            )}
          </div>

          <div className=" hidden md:flex  flex-col gap-[4px]">
            <h2 className="   text-[14px] font-[500] tracking-[-2%] leading-[20px]  ">
              EMAIL
            </h2>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="text-[16px] w-full border-[#464646] rounded-[8px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 "
              />
            ) : (
              <p className=" text-[16px] leading-[19px] md:leading-[24px] font-bold tracking-[-2%] text-[#464646]   ">
                {userData.email}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[4px]">
            <h2 className="   text-[14px] font-[500] tracking-[-2%] leading-[20px]  ">
              GENDER
            </h2>
            {editMode ? (
              <select
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                className="text-[16px] rounded-[8px] border-[#464646] leading-[24px] tracking-[-2%] text-[#464646] border p-2 "
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="text-[16px] leading-[19px] md:leading-[24px] font-bold tracking-[-2%] text-[#464646]  ">
                {userData.gender}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col content-between justify-between h-full gap-[24px]">
          <div className=" flex flex-col gap-[4px]">
            <h2 className="  text-[14px]    font-[500] tracking-[-2%] leading-[20px]  ">
              LAST NAME
            </h2>
            {editMode ? (
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="text-[16px]  w-[7.5rem] md:w-full border-[#464646] rounded-[8px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 "
              />
            ) : (
              <p className=" text-[16px] leading-[19px] md:leading-[24px] font-bold tracking-[-2%] text-[#464646]   ">
                {userData.lastName}
              </p>
            )}
          </div>

          <div className=" flex flex-col gap-[4px]">
            <h2 className="  text-[14px]  font-[500] tracking-[-2%] leading-[20px]  ">
              PHONE NUMBER
            </h2>
            {editMode ? (
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="text-[16px]  md:w-full w-[8rem]  border-[#464646] rounded-[8px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 "
              />
            ) : (
              <p className=" text-[16px] leading-[19px] md:leading-[24px] font-bold tracking-[-2%] text-[#464646]   ">
                {userData.phone}
              </p>
            )}
          </div>
        </div>
      </section>
      <div className=" flex md:hidden flex-col gap-[4px]">
        <h2 className="   text-[14px] font-[500] tracking-[-2%] leading-[20px]  ">
          EMAIL
        </h2>
        {editMode ? (
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="text-[16px] w-full border-[#464646] rounded-[8px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 "
          />
        ) : (
          <p className=" text-[16px] leading-[19px] md:leading-[24px] font-bold tracking-[-2%] text-[#464646]   ">
            {userData.email}
          </p>
        )}
      </div>

      {editMode && (
        <div className="mt-4 flex justify-end gap-4">
          <button
            className="border border-[#FF104B] text-[#FF104B] px-4 py-2 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-[#7F56D9] text-white-100 px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default BasicDetails;
