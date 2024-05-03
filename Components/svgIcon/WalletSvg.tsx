import React from "react";

type WalletSvgProps = {
  iconColor?: string;
};

const WalletSvg: React.FC<WalletSvgProps> = ({ iconColor }) => {
  // Your component logic here

  return (
    <svg
      width="20"
      height="20"
            className="  min-w-[20px] min-h-[20px]"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.95065 1.84185L7.94232 6.51685H5.93398C5.60065 6.51685 5.27565 6.54185 4.95898 6.60852L5.79232 4.60852L5.82565 4.53352L5.87565 4.40018C5.90065 4.34185 5.91732 4.29185 5.94232 4.25018C6.90898 2.00852 7.99232 1.30852 9.95065 1.84185Z"
        fill={iconColor}
      />
      <path
        d="M15.6079 6.74176L15.5913 6.73343C15.0913 6.59176 14.5829 6.51676 14.0663 6.51676H8.84961L10.7246 2.15843L10.7496 2.1001C10.8663 2.14176 10.9913 2.2001 11.1163 2.24176L12.9579 3.01676C13.9829 3.44176 14.6996 3.88343 15.1413 4.41676C15.2163 4.51676 15.2829 4.60843 15.3496 4.71676C15.4246 4.83343 15.4829 4.9501 15.5163 5.0751C15.5496 5.1501 15.5746 5.21676 15.5913 5.29176C15.7163 5.71676 15.7246 6.2001 15.6079 6.74176Z"
        fill={iconColor}
      />
      <path
        d="M10.4336 14.7167H10.6419C10.8919 14.7167 11.1003 14.4917 11.1003 14.2167C11.1003 13.8667 11.0003 13.8167 10.7836 13.7334L10.4336 13.6084V14.7167Z"
        fill={iconColor}
      />
      <path
        d="M15.2422 7.93327C14.8672 7.82494 14.4755 7.7666 14.0672 7.7666H5.93385C5.36719 7.7666 4.83385 7.87494 4.33385 8.0916C2.88385 8.7166 1.86719 10.1583 1.86719 11.8333V13.4583C1.86719 13.6583 1.88385 13.8499 1.90885 14.0499C2.09219 16.6999 3.50885 18.1166 6.15885 18.2916C6.35052 18.3166 6.54219 18.3333 6.75052 18.3333H13.2505C16.3339 18.3333 17.9589 16.8666 18.1172 13.9499C18.1255 13.7916 18.1339 13.6249 18.1339 13.4583V11.8333C18.1339 9.9916 16.9089 8.4416 15.2422 7.93327ZM11.0672 12.9166C11.4505 13.0499 11.9672 13.3333 11.9672 14.2166C11.9672 14.9749 11.3755 15.5833 10.6422 15.5833H10.4339V15.7666C10.4339 16.0083 10.2422 16.1999 10.0005 16.1999C9.75885 16.1999 9.56719 16.0083 9.56719 15.7666V15.5833H9.49219C8.69219 15.5833 8.03385 14.9083 8.03385 14.0749C8.03385 13.8333 8.22552 13.6416 8.46719 13.6416C8.70885 13.6416 8.90052 13.8333 8.90052 14.0749C8.90052 14.4249 9.16719 14.7166 9.49219 14.7166H9.56719V13.3083L8.93385 13.0833C8.55052 12.9499 8.03385 12.6666 8.03385 11.7833C8.03385 11.0249 8.62552 10.4166 9.35885 10.4166H9.56719V10.2333C9.56719 9.9916 9.75885 9.79994 10.0005 9.79994C10.2422 9.79994 10.4339 9.9916 10.4339 10.2333V10.4166H10.5089C11.3089 10.4166 11.9672 11.0916 11.9672 11.9249C11.9672 12.1666 11.7755 12.3583 11.5339 12.3583C11.2922 12.3583 11.1005 12.1666 11.1005 11.9249C11.1005 11.5749 10.8339 11.2833 10.5089 11.2833H10.4339V12.6916L11.0672 12.9166Z"
        fill={iconColor}
      />
      <path
        d="M8.90039 11.7832C8.90039 12.1332 9.00039 12.1832 9.21706 12.2665L9.56706 12.3915V11.2832H9.35872C9.10039 11.2832 8.90039 11.5082 8.90039 11.7832Z"
        fill="#7C7C7C"
      />
    </svg>
  );
};

export default WalletSvg;
