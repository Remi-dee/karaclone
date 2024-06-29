"use client";

import React, { useState } from "react";
import ChatPage from "./ChatPage";
import ConversationChat from "./ConversationChat";
import TicketPage from "./TicketPage";
import TicketDetails from "./TicketDetails";

function Chat() {
  const [chatPageValue, setchatPageValue] = useState(" ");
  function handleClickFromChatPage(option: string) {
    setchatPageValue(option);
    console.log(option);
  }
  return (
    <div className="  w-full">
      {chatPageValue === "contactSupport" ? (
        <ConversationChat clickHandler={handleClickFromChatPage} />
      ) : chatPageValue === "ticketStatus" ? (
        <TicketPage clickHandler={handleClickFromChatPage} />
      ) : chatPageValue === "Ticket Details" ? (
        <TicketDetails clickHandler={handleClickFromChatPage} />
      ) : (
        <ChatPage clickHandler={handleClickFromChatPage} />
      )}
    </div>
  );
}

export default Chat;
