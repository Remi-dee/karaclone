"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { styles } from "../styles/style";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { ILoginInput } from "../interfaces/auth";
import { useRouter } from "next/navigation";

type Props = {};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Login: FC<Props> = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [login, { isSuccess, error, data }] = useLoginMutation();

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
    <main className="flex w-full min-h-screen m-0 p-0 box-border overflow-hidden">
      <div className="hidden w-1/2 lg:flex flex-col justify-center items-center bg-[#292929] py-8 px-4">
        <div className="px-4">
          <img src="/login-img.svg" alt="" height="200px" />
        </div>
        <div className="my-3 text-center">
          <div className="text-[#FBFBFB] text-2xl">
            Manage Multiple Currencies
          </div>
          <div className="text-[#BDBDBD]  text-base">
            Store, send, and receive funds in multiple currencies
            <br />
            hassle-free. From USD to EUR, manage it all in one place.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-between w-[140px] items-center mt-5">
            <MdOutlineNavigateBefore
              className="tex-lg"
              style={{
                color: "#ffffff",
              }}
            />
            <div className="flex justify-between  items-center w-[50px]">
              <div className="h-2 w-2 rounded-full bg-[#FFFFFF]"></div>
              <div className="h-2 w-2 rounded-full bg-[#7C7C7C]"></div>
              <div className="h-2 w-2 rounded-full bg-[#7C7C7C]"></div>
            </div>
            <MdOutlineNavigateNext
              style={{
                color: "#ffffff",
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2  flex flex-col pb-4 justify-between  bg-[#FBFBFB]">
        <div className="flex flex-col items-center">
          <div className="mt-16 ">
            <div>
              <img src="/fxkara-logo.svg" height="200px" alt="" />
            </div>
            <div className="h-[500px] w-full flex flex-col justify-center">
              <h2 className="text-4xl font-bold">Log in</h2>
              <div className="mt-3 text-lg text-[#7C7C7C]">
                Welcome back! Please enter your details
              </div>
              <form onSubmit={handleSubmit}>
                <label className={`${styles.label}`} htmlFor="email">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name=""
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="loginemail@gmail.com"
                  className={`${
                    errors.email && touched.email && "border-red-500"
                  } ${styles.input}`}
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 pt-2 block">
                    {errors.email}
                  </span>
                )}
                <div className="w-full mt-5 relative mb-1">
                  <label className={`${styles.label}`} htmlFor="password">
                    Password
                  </label>
                  <input
                    type={!show ? "password" : "text"}
                    name="password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="password!@%"
                    className={`${
                      errors.password && touched.password && "border-red-500"
                    } ${styles.input}`}
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
                <div className="w-full mt-5">
                  <input
                    type="submit"
                    value="Login"
                    className="w-full bg-[#1E1E1E] text-[#FFFFFF] rounded-lg h-12 mt-6 flex justify-center items-center cursor-pointer"
                  />
                </div>
                <br />

                <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
                  Not have any account?{" "}
                  <Link className="text-primaryBtn" href={"/signUp"}>
                    Sign Up
                  </Link>
                </h5>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-16 h-12">
          <div>© FXkarasell 2024</div>
          <div className="flex items-center">
            {" "}
            <div className="h-1 w-1 m-2  rounded-full bg-[#7C7C7C]"></div>
            <div>Help center</div>
          </div>
          <div className="flex items-center">
            {" "}
            <div className="h-1 w-1 m-2   rounded-full bg-[#7C7C7C]"></div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
