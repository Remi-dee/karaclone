import React from "react";

const ChatButtons = ({
  handleChange,
}: {
  handleChange: (option: string) => void;
}) => (
  <section className="px-[0.8rem] md:p-[1rem] flex justify-between">
    <button
      onClick={() => handleChange("ticketStatus")}
      className="z-40 w-[160px] h-[38px] bg-[#7F56D9] text-[white] rounded-[8px] outline-none"
    >
      Ticket Status
    </button>
    <button
      onClick={() => handleChange("contactSupport")}
      className="z-40 w-[160px] h-[38px] border-[1.1px] outline-none border-[#7F56D9] text-[#7F56D9] rounded-[8px]"
    >
      Contact support
    </button>
  </section>
);

export default ChatButtons;
