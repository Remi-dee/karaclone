"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import { ILoginInput } from "../../interfaces/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import man from "@/public/loginMan.png";
import stars from "@/public/Stars.png";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Login = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [login, { isSuccess, error, data }] = useLoginMutation();
  // const [loginUser, { isLoading: loginLoading, error: loginError }] =
  //   useLoginUserMutation();
  // const handleLogin = async ({ email, password }) => {
  //   try {
  //     const result = await loginUser({ email, password }).unwrap();
  //     // Handle successful login
  //   } catch (error) {
  //     // Handle login error
  //   }
  // };
  const formik = useFormik({
    initialValues: { email: "", password: "" } as ILoginInput,
    validationSchema: schema,

    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Login Successfully";
      toast.success(message);
      if (typeof window !== "undefined") {
        router.push("/login-auth");
      }

      localStorage.setItem("auth_token", data?.data?.accessToken);
      localStorage.setItem("user", JSON.stringify(data?.data?.user));
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="flex-1 w-full flex pt-0 h-full  justify-center ">
      <div className=" w-[471px] ">
        <div className="flex  flex-col  ">
          <div className="">
            <div className="  mt-[60px]">
              <Image src="/fxkara-logo.svg" height={40} width={150} alt="" />
            </div>
            <div className=" mt-[40px] h-full w-full flex flex-col justify-center gap-y-[40px]  text-black ">
              <div className=" flex  flex-col">
                <h2 className="text-[#101828] tracking-[-2%] text-[48px] font-lato  font-[400] ">
                  Log in
                </h2>
                <p className=" leading-[28px] tracking-[-2%]  text-[1rem] text-[#7C7C7C]">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className=" w-full  flex flex-col gap-[20px]"
              >
                <div>
                  <label className=" w-full" htmlFor="email">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name=""
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter your Email"
                    className={`${
                      errors.email && touched.email && "border-red-500"
                    } ${" w-full text-[black] dark:text-white bg-transparent border border-slate-200 text-sm rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins"} w-full`}
                  />
                  {errors.email && touched.email && (
                    <span className="text-red-500 pt-2 block">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="w-full mt-5 relative mb-1">
                  <label
                    className={`${"text-[16px] font-Poppins text-[black] dark:text-white"}`}
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
                    } ${"w-full text-[black] dark:text-white bg-transparent border border-slate-200 text-sm rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins"}`}
                  />
                  {!show ? (
                    <AiOutlineEyeInvisible
                      className="absolute bottom-3 right-2 z-1 cursor-pointer"
                      size={20}
                      onClick={() => setShow(true)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="absolute bottom-3 right-2 z-1 cursor-pointer"
                      size={20}
                      onClick={() => setShow(false)}
                    />
                  )}
                  {errors.password && touched.password && (
                    <span className="text-red-500 pt-2 block">
                      {errors.password}
                    </span>
                  )}
                </div>

                {/* Forgot password  */}
                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      id="rememberPassword"
                      className="mr-2 "
                      // Add any additional props or event handlers as needed
                    />
                    <label
                      htmlFor="rememberPassword"
                      className="text-[#7C7C7C] whitespace-nowrap text-sm"
                    >
                      Remember password for 30 days
                    </label>
                  </div>
                  <div className="w-max h-full ">
                    <Link
                      className="text-sm text-[#FF2452] leading-[14.4px] font-[500] text-[12px] my-auto"
                      href="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <div className="w-full mt-5">
                  <input
                    type="submit"
                    value="Login"
                    className="w-full bg-[#7F56D9] text-[#FFFFFF] rounded-lg h-12 mt-6 flex justify-center items-center cursor-pointer"
                  />
                </div>
                <br />

                <h5 className="text-center pt-[0.5rem] font-Poppins text-[14px] text-[black] dark:text-white">
                  Not have any account?
                  <Link
                    className="text-[#7F56D9] leading-[19px] tracking-[-2%] font-[700] ml-1 "
                    href={"/signUp"}
                  >
                    Sign Up
                  </Link>
                </h5>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
