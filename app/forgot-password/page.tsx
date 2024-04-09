import Link from "next/link";
import { FC, FormEvent, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { styles } from "../styles/style";
// import { useLoginMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { IforgotPasswordInput } from "../interfaces/auth";
import { useRouter } from "next/navigation";

type Props = {};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
});

const forgot_password: FC<Props> = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "" } as IforgotPasswordInput,
    onSubmit: async (values) => {
      // Handle form submission here
      console.log("Form submitted:", values);
    },
  });
  const { handleChange, handleSubmit } = formik;
  return (
    <div className="flex items-center  h-screen justify-center bg-white-300">
      <div className=" w-full md:w-2/3 lg:w-3/5 xl:w-2/5 2xl:w-1/4 my-auto text-center">
        <div className="px-4 mb-10">
          <img
            src="/fxkara-logo.svg"
            className="mx-auto"
            height="200px"
            alt=""
          />
        </div>

        {/* shadow container*/}
        <div className="border border-slate-100  py-10 shadow-md  bg-white-100 rounded-xl w-full text-center flex flex-col justify-center items-center text-[black]">
          <div className="p-4 rounded-xl border border-slate-200">
            <img src="/key-img.png" alt="" />
          </div>

          <h3 className="font-bold text-3xl mt-5">Reset Password</h3>
          <p className="text-gray-400 text-sm">
            Enter your email address to reset your password
          </p>

          <div className="w-full  px-4 text-center">
            {/* form input */}
            <form className="w-full my-5 px-10">
              <div className="flex flex-col w-full mx-auto  justify-center item-center text-left  gap-2">
                <label htmlFor="email" className={`${styles.label} `}>
                  {" "}
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className={`${styles.input} small mt-0`}
                />
                <button className="bg-purple-700 mt-2 text-sm rounded-md py-2 px-6  text-[white] w-full">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-5 text-center text-sm flex items-center justify-center">
          <p className="text-[#7C7C7C] mr-3">Remembered your password?</p>
          <Link href="/login" className="text-[black] font-bold small">
            Login to your account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default forgot_password;
