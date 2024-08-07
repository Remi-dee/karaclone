import React from "react";
import InfoRow from "./InfoRow";

const Button = ({
  className,
  onClick,
  children,
}: {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

function ConfirmTransaction({ changeStep }: { changeStep: () => void }) {
  const handleClickEvent = () => {
    changeStep();
  };

  return (
    <div>
      <div className="bg-[white] shadow-sm border border-slate-200 mt-5 px-8 rounded-lg py-4 text-[dark] w-full mx-auto">
        <InfoRow label="Account Name" value="Ogunsola Omorinsola E" />
        <InfoRow label="Account Number" value="0123456789" />
        <InfoRow label="Bank Name" value="Access Bank" />
        <InfoRow label="Amount Tendered" value="$10" />
        <InfoRow label="Today's Rate" value="1USD = 1,500NGN" />
        <InfoRow label="Total Fees" value="$0.03" />
        <InfoRow label="Amount To Be Received" value="150,000 NGN" />

        <div className="mt-4">
          <Button
            className="bg-purple-600 text-white-100 text-sm w-full py-3 rounded-lg"
            onClick={handleClickEvent}
          >
            Validate Beneficiary
          </Button>
          <Button
            className="bg-white-100 text-purple-900 border border-purple-400 mt-2 text-sm w-full py-3 rounded-lg"
            onClick={handleClickEvent}
          >
            Validate Beneficiary
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTransaction;
