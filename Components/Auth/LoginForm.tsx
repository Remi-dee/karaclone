"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password!")
    .min(6, "Password must be at least 6 characters long"),
});

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit,
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full  md:w-[95%] flex flex-col gap-[20px]"
    >
      <div className="w-full">
        <label
          className="text-[16px] text-[#1E1E1E] leading-[24px] tracking-[-2%] font-semibold w-full  font-lato text-black _dark:text-white"
          htmlFor="email"
        >
          Email
        </label>
        <input
          required
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter your Email"
          className={`${
            errors.email && touched.email && "border-red-500"
          } w-full text-black _dark:text-white bg-transparent border border-slate-200 text-sm rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
      </div>
      <div className="w-full mt-5 relative mb-1">
        <label
          className="text-[16px] text-[#1E1E1E] leading-[24px] tracking-[-2%] font-semibold w-full  font-lato text-black _dark:text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type={!show ? "password" : "text"}
          name="password"
          required
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Type in password"
          className={`${
            errors.password && touched.password && "border-red-500"
          } w-full text-black _dark:text-white bg-transparent border border-slate-200 text-sm rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
        />
        {!show ? (
          <AiOutlineEyeInvisible
            className="absolute bottom-3 right-2 cursor-pointer"
            size={20}
            onClick={() => setShow(true)}
          />
        ) : (
          <AiOutlineEye
            className="absolute bottom-3 right-2 cursor-pointer"
            size={20}
            onClick={() => setShow(false)}
          />
        )}
        {errors.password && touched.password && (
          <span className="text-red-500 pt-2 block">{errors.password}</span>
        )}
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <div className="flex items-center">
          <input type="checkbox" id="rememberPassword" className="mr-2" />
          <label
            htmlFor="rememberPassword"
            className="text-[#7C7C7C] whitespace-nowrap text-sm"
          >
            Remember for 30 days
          </label>
        </div>
        <div className="w-max h-full">
          <Link
            className="text-sm text-[#FF2452] leading-[14.4px]"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 h-[40px] w-full flex justify-center items-center rounded bg-[#7F56D9] hover:bg-[#7F56D9]"
      >
        <span className="text-sm text-[white]">Sign in</span>
      </button>
      <p className="text-center pt-[0.5rem] font-Poppins text-[14px] text-black _dark:text-white">
        Don’t have an account?{" "}
        <Link
          className=" text-[#FFFFFF] leading-[19px] tracking-[-2%] font-[700] ml-0 rounded-[8px_12px] md:ml-1"
          href="/signup"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
