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
    <div className=" h-[252px] flex  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]  ">
      <div className="  h-[44px]  min-h-[44px] border-b border-b-[#EFEFEF] flex justify-between items-center">
        <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
          Personal Information
        </h1>
        {!editMode && (
          <button
            className=" text-[#7F56D9] px-4 py-2 rounded"
            onClick={() => setEditMode(true)}
          >
            Edit Profile Details &gt;
          </button>
        )}
      </div>

      <section className=" h-full flex  justify-between  pr-[1rem] ">
        <div className=" flex flex-col content-between justify-between h-full">
          <div className=" flex flex-col gap-[4px]">
            <h2 className="   font-[500] tracking-[-2%] leading-[20px]  text-[14px] ">
              FIRST NAME
            </h2>
            {editMode ? (
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="text-[16px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 rounded"
              />
            ) : (
              <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
                {userData.firstName}
              </p>
            )}
          </div>

          <div className=" flex flex-col gap-[4px]">
            <h2 className="   text-[14px] font-[500] tracking-[-2%] leading-[20px]  ">
              EMAIL
            </h2>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="text-[16px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 rounded"
              />
            ) : (
              <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
                {userData.email}
              </p>
            )}
          </div>
        </div>
        <div className=" flex flex-col content-between justify-between h-full">
          <div className=" flex flex-col gap-[4px]">
            <h2 className="  text-[14px]   font-[500] tracking-[-2%] leading-[20px]  ">
              LAST NAME
            </h2>
            {editMode ? (
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="text-[16px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 rounded"
              />
            ) : (
              <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
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
                className="text-[16px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 rounded"
              />
            ) : (
              <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
                {userData.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <h2 className="   text-[14px] font-[500] tracking-[-2%] leading-[20px]  ">
            GENDER
          </h2>
          {editMode ? (
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="text-[16px] leading-[24px] tracking-[-2%] text-[#464646] border p-2 rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p className=" text-[16px] leading-[24px] tracking-[-2%] text-[#464646]   ">
              {userData.gender}
            </p>
          )}
        </div>
      </section>

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
