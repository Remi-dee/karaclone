import NGN from "@/public/Images/NGN.png";
import USD from "@/public/Images/USD.png";
import GBP from "@/public/Images/GBP.png";
import EUR from "@/public/Images/NGN.png";

const fetchWalletData = ({ amount }: any) => {
  const walletData = [
    {
      id: 1,
      img: NGN,
      name: "NGN",
      amount,
    },

    // {
    //   id: 2,
    //   img: USD,
    //   name: "USD",
    //   amount,
    // },

    {
      id: 3,
      img: GBP,
      name: "GBP",
      amount,
    },

    // {
    //   id: 4,
    //   img: EUR,
    //   name: "EUR",
    //   amount,
    // },
  ];
  return walletData;
};

export { fetchWalletData };
