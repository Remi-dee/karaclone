import React, { Suspense } from "react";

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
  return (
    <Suspense fallback={<div>loading....</div>}>
      <div className=" ">{children}</div>;
    </Suspense>
  );
}
