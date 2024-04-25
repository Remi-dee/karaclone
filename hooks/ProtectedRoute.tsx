import { useLoadUserQuery } from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";

// Check if user is logged in
export const checkAuthentication = (ProtectedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const { data, isLoading, error } = useLoadUserQuery({});

    // if (isLoading) return <p>Auth checker loading</p>;
    // else if (!data || (error as any)?.message.includes("401")) {
    //   router.push("/login");
    //   return null;
    // }

    // if (!isLoading && !data.isVerified) {
    //   router.replace(PAGES.VERIFY_EMAIL);
    //   return null;
    // }

    return <ProtectedComponent {...props} />;
  };
};
