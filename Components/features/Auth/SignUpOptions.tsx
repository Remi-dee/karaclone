"use client";

import React, { FC } from "react";
import DesktopSignUpOptions from "../../Auth/DesktopSignupOptions";
import {
  individualDescriptions,
  individualOptions,
} from "@/app/helpers/registration";

const SignUpOptions: FC = () => {
  return (
    <DesktopSignUpOptions
      options={individualOptions}
      descriptions={individualDescriptions}
    />
  );
};

export default SignUpOptions;
