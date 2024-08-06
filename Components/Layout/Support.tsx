"use client";

import React, { useState } from "react";
import ConversationChat from "./ConversationChat";
import SupportPage from "./SupportPage";
import FAQ from "../Chat/FAQ";
import TicketDetails from "../Chat/TicketDetails";
import TicketPage from "../Chat/TicketPage";

// interface ChatProps {
//   clickHandler: (option: string) => void;
// }

const Support: React.FC = () => {
  const [chatPageValue, setChatPageValue] = useState("");

  const handleClickFromChatPage = (option: string) => {
    setChatPageValue(option);
  };

  const renderComponent = () => {
    switch (chatPageValue) {
      case "contactSupport":
        return <ConversationChat clickHandler={handleClickFromChatPage} />;
      case "ticketStatus":
        return <TicketPage clickHandler={handleClickFromChatPage} />;
      case "Ticket Details":
        return <TicketDetails clickHandler={handleClickFromChatPage} />;
      case "FAQ":
        return <FAQ clickHandler={handleClickFromChatPage} />;
      default:
        return <SupportPage clickHandler={handleClickFromChatPage} />;
    }
  };

  return <div className="w-full">{renderComponent()}</div>;
};

export default Support;
