import React, { Suspense } from "react";

import SignUpOptions from "@/Components/Auth/SignUpOptions";

// export const metadata: Metadata = {
//   title: "Fx",
//   description:
//     "",
//   icons: {
//     icon: "",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" ">{children}</div>;
}
