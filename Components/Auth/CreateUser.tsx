"use client";

import React, { FC, useState } from "react";
import BasicUserDetails from "./BasicUserDetails";
import { useDispatch } from "react-redux";

const CreateUser: FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-[1.3rem] min-h-screen">
      <div className="w-[100%]">
        <BasicUserDetails />
      </div>
    </div>
  );
};

export default CreateUser;
