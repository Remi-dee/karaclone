"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomModal from "@/Components/CustomModal/CustomModal";
import { openModal } from "@/redux/modal/modalSlice";
import Kyc from "@/Components/KYC/Kyc";
import SelectCountry from "@/Components/KYC/SelectCountry";
import VerifyId from "@/Components/KYC/VerifyId";
import UploadId from "@/Components/KYC/UploadId";
import UploadingId from "@/Components/KYC/UploadingId";
import BankStatement from "@/Components/KYC/BankStatement";
import BankVerification from "@/Components/KYC/BankVerification";
import KycSelfie from "@/Components/KYC/KycSelfie";
import Verification from "@/Components/KYC/Verification";
import VerificationQrcode from "@/Components/KYC/VerificationQrcode";
import VerificationEmail from "@/Components/KYC/VerificationEmail";
import VerificationSelfie from "@/Components/KYC/VerificationSelfie";
import VerificationSuccess from "@/Components/KYC/VerificationSuccess";
import Navbar from "@/Components/LandingPage/Navbar";
import Footer from "@/Components/LandingPage/Footer";
import MomoModal from "@/Components/CustomModal/MomoModal";
import HeroPage from "@/Components/LandingPage/HeroPage";

const Page = () => {
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
        return <Kyc />;
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
          <VerificationQrcode />
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
    <div className="text-slate-900">
      <Navbar />
      <HeroPage />
      <MomoModal />
      <Footer />
    </div>
  );
};

export default Page;

{
  /* <div>
<h5>Hello world!</h5>
<button onClick={openModalHandler}>open modal</button>
<CustomModal>{renderCurrentPage()}</CustomModal>
</div> */
}
