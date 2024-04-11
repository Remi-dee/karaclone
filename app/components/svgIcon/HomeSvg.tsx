import React from "react";

function HomeSvg({ iconColor }: { iconColor: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9154 9.08464V3.41797C17.9154 2.16797 17.382 1.66797 16.057 1.66797H12.6904C11.3654 1.66797 10.832 2.16797 10.832 3.41797V9.08464C10.832 10.3346 11.3654 10.8346 12.6904 10.8346H16.057C17.382 10.8346 17.9154 10.3346 17.9154 9.08464Z"
        fill={iconColor}
      />
      <path
        d="M9.16536 10.918V16.5846C9.16536 17.8346 8.63203 18.3346 7.30703 18.3346H3.94036C2.61536 18.3346 2.08203 17.8346 2.08203 16.5846V10.918C2.08203 9.66797 2.61536 9.16797 3.94036 9.16797H7.30703C8.63203 9.16797 9.16536 9.66797 9.16536 10.918Z"
        fill={iconColor}
      />
      <path
        d="M17.9154 16.5833V14.25C17.9154 13 17.382 12.5 16.057 12.5H12.6904C11.3654 12.5 10.832 13 10.832 14.25V16.5833C10.832 17.8333 11.3654 18.3333 12.6904 18.3333H16.057C17.382 18.3333 17.9154 17.8333 17.9154 16.5833Z"
        fill={iconColor}
      />
      <path
        d="M9.16536 5.7513V3.41797C9.16536 2.16797 8.63203 1.66797 7.30703 1.66797H3.94036C2.61536 1.66797 2.08203 2.16797 2.08203 3.41797V5.7513C2.08203 7.0013 2.61536 7.5013 3.94036 7.5013H7.30703C8.63203 7.5013 9.16536 7.0013 9.16536 5.7513Z"
        fill={iconColor}
      />
    </svg>
  );
}

export default HomeSvg;
