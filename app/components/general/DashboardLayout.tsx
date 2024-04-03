// import { checkAuthentication } from "@/app/hooks/ProtectedRoute";
// import { DashboardLayoutType } from "@/app/interfaces/general";
// import Head from "next/head";
// import { FC, useState } from "react";
// import DashboardNavbar from "./DashboardNavbar";

// const DashboardLayout: FC<DashboardLayoutType> = ({ children, title }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const toggleOpen = () => setIsOpen(true);

//   return (
//     <>
//       <Head>
//         <link rel="shortcut-icon" href="/favicon.ico" type="image/x-icon" />
//         <link rel="icon" href="/favicon.ico" type="image/x-icon" />
//         <title>{`${title ?? "Afternoon Prep"}`}</title>
//       </Head>

//       <div className="w-full overflow-hidden">
//         <DashboardNavbar />
//         <DashboardSideBar isOpen={isOpen} toggleOpen={toggleOpen} />
//         <div
//           onClick={() => setIsOpen(false)}
//           className={`pt-10 ${
//             isOpen ? "lg:ml-[18.75rem]" : "lg:ml-[18.75rem]"
//           } `}
//         >
//           <div className="bg-white w-full min-h-screen">{children}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default checkAuthentication(DashboardLayout);
