"use client";
import { useEffect } from "react";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import { ILoginInput } from "../../interfaces/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoginForm from "@/Components/Auth/LoginForm";

const Login = () => {
  const router = useRouter();
  const [login, { isSuccess, error, data }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Login Successfully";
      toast.success(message);
      localStorage.setItem("user", JSON.stringify(data?.data?.user));

      if (data?.data?.isTwoFactorEnabled) {
        router.push("/login-auth");
      } else {
        localStorage.setItem("auth_token", data?.data?.accessToken);
        router.push("/dashboard/home");
      }
    }

    if (error && "data" in error) {
      const errorData = error as any;
      toast.error(errorData.data.message);
    }
  }, [isSuccess, error, data, router]);

  const handleLoginSubmit = async (values: ILoginInput) => {
    await login(values);
  };

  return (
    <div className="block flex-1 w-full md:flex p-[1rem] lg:p-0 h-full justify-center">
      <div className="w-full lg:w-full _lg:w-[471px]">
        <div className="flex flex-col">
          <div className="mt-[24px] lg:mt-[60px]">
            <Image src="/fxkara-logo.svg" height={40} width={150} alt="Logo" />
          </div>
          <div className="mt-[40px] h-full w-full flex flex-col justify-center gap-y-[40px] text-black">
            <div className="flex flex-col">
              <h2 className="text-[#101828] tracking-[-2%] text-[48px] font-lato font-[400]">
                Log in
              </h2>
              <p className="leading-[28px] tracking-[-2%] text-[1rem] text-[#7C7C7C]">
                Welcome back! Please enter your details.
              </p>
            </div>
            <LoginForm onSubmit={handleLoginSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
