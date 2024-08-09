import PAGES from "@/app/helpers/pageNames";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";

// Check if user is logged in
const checkAuthentication = async (ProtectedComponent: any) => {
  return async (props: any) => {
    // const router = useRouter();
    // const { data, isLoading, error } = useLoadUserQuery({});
    // console.log(data);
    // if (isLoading) return <p>Auth checker loading</p>;
    // else if (!data || (error as any)?.message.includes("401")) {
    //   router.push("/login");
    //   return null;
    // }

    // if (!isLoading && !data.isVerified) {
    //   router.replace(PAGES.VERIFY_EMAIL);
    //   // return null;
    // }

    return <ProtectedComponent {...props} />;
  };
};

export default checkAuthentication;
