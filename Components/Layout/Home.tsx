import React from "react";
import { useSelector } from "react-redux";
import { checkAuthentication } from "@/hooks/ProtectedRoute";
import Reversal from "../withdrawal/Reversal";
import DashHomeBeforeKyc from "../features/DashHomeBeforeKyc";
import DashHomeAfterKyc from "../features/DashHomeAfterKyc";
import CreateKYC from "./CreateKYC";

interface ComponentMap {
  createKyc: React.ReactElement;
  reversal: React.ReactElement;
  dashHomeBeforeKyc: React.ReactElement;
  dashHomeAfterKyc: React.ReactElement;
}

const components: ComponentMap = {
  createKyc: <CreateKYC />,
  reversal: <Reversal />,
  dashHomeBeforeKyc: <DashHomeBeforeKyc />,
  dashHomeAfterKyc: <DashHomeAfterKyc />,
};

function Home() {
  const kyc = useSelector((state: any) => state?.kyc);
  const user = useSelector((state: any) => state?.user);
  const auth = useSelector((state: any) => state?.auth);

  const renderComponent = () => {
    if (kyc?.kycBegin || kyc?.kybBegin) return components.createKyc;
    if (user?.reversalInitiated) return components.reversal;
    if (auth?.is_completed_kyc) return components.dashHomeBeforeKyc;
    return components.dashHomeAfterKyc;
  };

  return <div className="w-full h-full">{renderComponent()}</div>;
}

export default checkAuthentication(Home);
