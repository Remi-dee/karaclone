"use-client";
import React, { FC, useEffect, useState } from "react";
import SignUpOptions from "./SignUpOptions";
import BasicUserDetails from "./BasicUserDetails";
import BusinessDetails from "./BusinessDetails";
import CreatePassword from "./CreatePassword,";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import VerifyEmail from "./VerifyEmail";
import toast from "react-hot-toast";
import EmailSuccess from "./EmailSuccess";
import TwoFactorAuth from "./TwoFactorAuth";

type Props = { params: { accountType: string } };

const CreateUser: FC<Props> = ({ params }) => {
  const [registerUser, { isLoading, isSuccess, error, data }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registration successful");
      setActive(active + 1);

      localStorage.setItem("auth", data?.activation_token as any);
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isLoading, isSuccess, error]);

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
  const [userData, setUserData] = useState({});

  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleBasicDetailsSubmit = () => {
    if (params.accountType === "individual") {
      setActive(3);
    } else {
      setActive(2);
    }
  };

  const handleBusinessDetailsSubmit = () => {
    setActive(3);
  };

  const handleUserRegistration = async () => {
    const data = userData;

    if (!isLoading) {
      await registerUser(data);
    }
  };

  const handleSubmit = async () => {
    // Prepare our data object
    const data = {
      name: basicDetails.name,
      gender: basicDetails.gender,
      email: basicDetails.email,
      phone: basicDetails.phone,
      account_type: params.accountType,
      business_name: businessDetails.business_name,
      business_address: businessDetails.business_address,
      business_email: businessDetails.business_email,
      business_line: businessDetails.business_line,
      password: userPassword.password,
    };

    // Update userData state
    setUserData(data);

    // Call handleUserRegistration() after state update
    handleUserRegistration();
  };

  return (
    <div className="w-full flex justify-center items-center  min-h-screen">
      <div className="w-[450px] bg-white-100 h-[100vh] shadow-lg pl-10 ">
        <SignUpOptions
          account_type={params.accountType}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="w-[100%]">
        {active === 1 && (
          <BasicUserDetails
            basicDetails={basicDetails}
            setBasicDetails={setBasicDetails}
            active={active}
            setActive={setActive}
            handleBasicDetailsSubmit={handleBasicDetailsSubmit}
          />
        )}

        {active === 2 && (
          <BusinessDetails
            businessDetails={businessDetails}
            setBusinessDetails={setBusinessDetails}
            active={active}
            setActive={setActive}
            handleBusinessDetailsSubmit={handleBusinessDetailsSubmit}
          />
        )}

        {active === 3 && (
          <CreatePassword
            active={active}
            setActive={setActive}
            userPassword={userPassword}
            setUserPassword={setUserPassword}
            handleSubmit={handleSubmit}
          />
        )}

        {active === 4 && verificationSuccess && (
          <EmailSuccess active={active} setActive={setActive} />
        )}

        {active === 4 && !verificationSuccess && (
          <VerifyEmail setVerificationSuccess={setVerificationSuccess} />
        )}

        {active === 5 && <TwoFactorAuth />}
      </div>
    </div>
  );
};

export default CreateUser;
