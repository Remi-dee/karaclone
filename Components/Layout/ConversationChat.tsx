"use client";

import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import bgChat from "@/public/Images/bgchat.png";
import robot from "@/public/Images/robot.png";
import rightarrow from "@/public/svg/rightarrow.svg";
import backarrow from "@/public/svg/backarrow.svg";
import { useDispatch } from "react-redux";
import { closeChatModal } from "@/redux/modal/modalSlice";
import {
  useCreateChatMessageMutation,
  useGetAllConversationsQuery,
  useGetChatMessagesQuery,
  useGetMessagesByConversationIdQuery,
} from "@/redux/features/chat/chatApi";
import { useLoadUserQuery } from "@/redux/features/user/userApi";

<<<<<<< HEAD
function ChatPage({ clickHandler }: { clickHandler: any }) {
=======
function ConversationChat({ clickHandler }: { clickHandler: any }) {
  const [value, setValue] = useState("");
>>>>>>> 3f313087d96ba7c2106596f67063d7b0f98db503
  const dispatch = useDispatch();
  const { data: user } = useLoadUserQuery({});
  const [value, setValue] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [selectedConversationName, setSelectedConversationName] =
    useState(null);

  const [isAdmin, setIsAdmin] = useState(user?.user.role === "admin");

  const { data: conversations } = useGetAllConversationsQuery(undefined, {
    skip: !isAdmin,
  });
  const { data: chatMessages, refetch } = !isAdmin
    ? useGetChatMessagesQuery(selectedConversation, {
        skip: isAdmin && !selectedConversation,
      })
    : useGetMessagesByConversationIdQuery(selectedConversation, {
        skip: isAdmin && !selectedConversation,
      });

  const [createChatMessage] = useCreateChatMessageMutation();

  useEffect(() => {
    if (selectedConversation) {
      refetch();
    }
  }, [selectedConversation, refetch]);

  const handleSendMessage = async () => {
    if (value.trim()) {
      await createChatMessage({
        message: value,
        conversationId: selectedConversation,
      });
      setValue("");
      refetch();
    }
  };

  const handleConversationClick = (convId) => {
    setSelectedConversation(convId?.conversationId);
    setSelectedConversationName(convId?.user.name);
  };

  return (
<<<<<<< HEAD
    <div className="w-full h-full flex flex-col rounded-[12px]">
      <section className="flex chatPageBg py-4 flex-col min-h-[116px] max-h-[116px] w-full relative">
        <section className="flex justify-between pr-4">
=======
    <div className="w-full h-screen flex flex-col rounded-[12px]">
      {/* Header */}
      <section className="flex overflow-y-hidden chatPageBg py-[1rem] flex-col min-h-[116px] max-h-[116px] w-full relative">
        <section className="flex justify-between pr-[1rem]">
          <Image
            src={bgChat}
            alt=""
            className="absolute top-0 left-0 right-0 bottom-0"
          />
>>>>>>> 3f313087d96ba7c2106596f67063d7b0f98db503
          <Image
            width={15}
            height={15}
            src={backarrow}
            onClick={() => clickHandler("")}
            className="bg-blend-darken ml-2 cursor-pointer z-20"
            alt=""
          />
          <MdCancel
            onClick={() => dispatch(closeChatModal())}
            className="text-gray-200 text-lg z-30 cursor-pointer"
          />
        </section>
        <div className="flex p-2">
          <div>
            <Image src={robot} className="w-[60px] h-[54.38px]" alt="" />
          </div>
          <div className="text-white h-full flex justify-center flex-col">
            <h1 className="text-[14px] font-semibold leading-[20px]">
              {!selectedConversation
                ? "Kara Customer Support"
                : user.user.role === "admin"
                ? selectedConversationName
                : "Kara Customer Support"}
            </h1>
            <p className="text-[10px]">
              <span className="text-[#66ff66] text-[14px] min-w-[15px] min-h-[15px] tracking-[-2%]">
                •
              </span>
              Active
            </p>
          </div>
        </div>
      </section>
      {isAdmin && !selectedConversation ? (
        <section className="flex flex-col px-4 flex-grow overflow-auto gap-y-4 invisible-scrollbar">
          {conversations?.conversationsWithUsers.map((conv: any, index) => (
            <button
              key={index}
              className="cursor-pointer"
              onClick={() => handleConversationClick(conv)}
            >
              <div className="max-w-[221px] rounded-md bg-[#EFEFEF] p-4">
                <p className="font-medium text-[12px] text-[#292929] leading-[18px] tracking-[-2%]">
                  Conversation with {conv?.user?.name}
                </p>
              </div>
            </button>
          ))}
          {!conversations?.length && <p>No conversations available.</p>}
        </section>
      ) : (
        <>
          <section className="mt-2 flex flex-col px-4 flex-grow overflow-auto gap-y-4 invisible-scrollbar">
            {chatMessages?.map((msg: any) =>
              msg.support ? (
                <AdminChat key={msg._id} message={msg.message} />
              ) : (
                <UserChat key={msg._id} message={msg.message} />
              )
            )}
          </section>
          <section className="flex w-full justify-center items-center p-4 bg-white">
            <div className="w-full max-w-[90%] flex items-center bg-[#EFEFEF] p-4 rounded-lg text-black-200">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-transparent outline-none"
                placeholder="Please enter your question..."
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 flex-shrink-0"
              >
                <SendSvg />
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default ConversationChat;

function SendSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5225 3.94135L9.48251 7.94135C1.38917 10.648 1.38917 15.0614 9.48251 17.7547L13.0558 18.9414L14.2425 22.5147C16.9358 30.608 21.3625 30.608 24.0558 22.5147L28.0692 10.488C29.8558 5.08802 26.9225 2.14135 21.5225 3.94135ZM21.9492 11.1147L16.8825 16.208C16.6825 16.408 16.4292 16.5014 16.1758 16.5014C15.9225 16.5014 15.6692 16.408 15.4692 16.208C15.0825 15.8214 15.0825 15.1814 15.4692 14.7947L20.5358 9.70135C20.9225 9.31469 21.5625 9.31469 21.9492 9.70135C22.3358 10.088 22.3358 10.728 21.9492 11.1147Z"
        fill="#292929"
      />
    </svg>
  );
}

function AdminChat({ message }: { message: string }) {
  return (
    <section className="self-start flex">
      <div>
        <Image className="w-[60px] h-[54.38px]" src={robot} alt="" />
      </div>
      <div className="max-w-[221px] rounded-md bg-[#EFEFEF] p-4">
        <p className="font-medium text-[12px] text-[#292929] leading-[18px] tracking-[-2%]">
          {message}
        </p>
      </div>
    </section>
  );
}

function UserChat({ message }: { message: string }) {
  return (
    <section className="self-end flex">
      <div className="max-w-[221px] rounded-md bg-[#7F56D9] p-4">
        <p className="text-[12px] font-medium text-white leading-[18px] tracking-[-2%]">
          {message}
        </p>
      </div>
    </section>
  );
}
