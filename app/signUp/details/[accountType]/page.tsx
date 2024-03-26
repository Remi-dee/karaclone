"use client";
import React, { FC } from "react";
import CreateUser from "@/app/components/Auth/CreateUser";

type Props = { params: { accountType: string } };

const Details: FC<Props> = ({ params }) => {
  
  return (
    <div>
      <CreateUser params={params} />
    </div>
  );
};

export default Details;
