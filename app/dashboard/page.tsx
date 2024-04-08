// import { useGetUSerQuery } from "@/redux/features/user/userApi";

// function Dashboard() {
//   const { data, isLoading, error } = useGetUSerQuery({});

//   return (
//     <DashboardLayout title="Twinklly | Dashboard">
//       <div className="bg-gray-100 min-h-screen px-10 py-20">
//         <div className="items-center">
//           <h1 className="font-graphik font-extrabold text-black text-2xl sm:text-3xl leading-6">
//             Dashboard
//           </h1>
//           <h3 className="mt-5 font-poppins font-normal text-base sm:text-lg leading-6 text-black">
//             Hi {data?.username}, Welcome back
//           </h3>
//         </div>

//         <div
//           className="flex flex-col sm:flex-row sm:justify-between space-y-5 sm:space-y-0 sm:space-x-[1.875rem]
//         rounded-[0.625rem] mt-5 sm:mt-[3.75rem]"
//         >
//           <AccountDetail />
//           <AccountHistoryAlt />
//         </div>
//         <TransactionHistory />
//       </div>
//     </DashboardLayout>
//   );
// }

// export default Dashboard;
