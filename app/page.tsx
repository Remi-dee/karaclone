"use client";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import CustomModal from "./components/CustomModal/CustomModal";
import { openModal } from "@/redux/modal/modalSlice";
import Kyc from "./components/KYC/Kyc";
import SelectCountry from "./components/KYC/SelectCountry";
import VerifyId from "./components/KYC/VerifyId";
import UploadId from "./components/KYC/UploadId";
import UploadingId from "./components/KYC/UploadingId";
import BankStatement from "./components/KYC/BankStatement";
import BankVerification from "./components/KYC/BankVerification";
import KycSelfie from "./components/KYC/KycSelfie";
import Verification from "./components/KYC/Verification";
import VerificationQrcode from "./components/KYC/VerificationQrcode";
import VerificationEmail from "./components/KYC/VerificationEmail";
import VerificationSelfie from "./components/KYC/VerificationSelfie";
import VerificationSuccess from "./components/KYC/VerificationSuccess";


interface Props {}

const Page: FC<Props> = (props) => {
  const [active, setActive] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dispatch = useDispatch();
  const openModalHandler = () => {
    dispatch(openModal());
  };

  const handleNextPage = () => {
    setActive((prev) => prev + 1);
  };

  const handleComponentRendered = (option: string) => {
    setSelectedOption(option);
    handleNextPage();
  };

  const renderCurrentPage = () => {
    switch (active) {
      case 1:
        return <Kyc onNext={handleNextPage} />;
      case 2:
        return <SelectCountry onNext={handleNextPage} />;
      case 3:
        return <VerifyId onNext={handleNextPage} />;
      case 4:
        return <UploadId onNext={handleNextPage} />;
      case 5:
        return <UploadingId onNext={handleNextPage} />;
      case 6:
        return <BankStatement onNext={handleNextPage} />;
      case 7:
        return <BankVerification onNext={handleNextPage} />;
      case 8:
        return <KycSelfie onNext={handleNextPage} />;
      case 9:
        return <Verification optionsSelected={handleComponentRendered} />;
      case 10:
        return selectedOption == "qrCode" ? (
          <VerificationQrcode onNext={handleNextPage} />
        ) : (
          <VerificationEmail onNext={handleNextPage} />
        );
      case 11:
        return <VerificationSelfie onNext={handleNextPage} />;
        case 12:
        return <VerificationSuccess />;
      

      default:
        return null;
    }
  };
  return (
    <div>
      <h5>Hello world!</h5>
      <button onClick={openModalHandler}>open modal</button>
      <CustomModal>{renderCurrentPage()}</CustomModal>
    </div>
  );
};

export default Page;
