import React from "react";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 text-gray-300">
      <p>{label}</p>
      <p className="ml-auto text-black-200">{value}</p>
    </div>
  );
}

export default InfoRow;
