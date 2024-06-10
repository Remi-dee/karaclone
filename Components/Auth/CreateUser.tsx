"use client";
import React, { FC, useState } from "react";
// import SignUpOptions from "./SignUpOptions";

import { useDispatch } from "react-redux";
import BasicUserDetails from "./BasicUserDetails";

// type Props = { params: { accountType: string } };

const CreateUser: FC<any> = ({ params }) => {
  const [active, setActive] = useState(1);
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
  });
  const [businessDetails, setBusinessDetails] = useState({
    business_name: "",
    business_address: "",
    business_email: "",
    business_line: "",
  });
  const [userPassword, setUserPassword] = useState({
    password: "",
    confirm_password: "",
  });

  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-center items-center  py-[1.3rem] min-h-screen">
      <div className="w-[100%]">
        <BasicUserDetails
          basicDetails={basicDetails}
          setBasicDetails={setBasicDetails}
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

export default CreateUser;
