import { useCreatePaymentMutation } from "@/redux/features/truelayer/truelayerApi";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import { v4 as uuidv4 } from "uuid";

const handleCreateTruelayerPayment = async (
  createTradeDetails: { amount: string; currency: any },
  data: { user: { name: any; email: any } },
  createPayment: any,
  dispatch: (arg0: any) => void,
  setPaymentDetails: (arg0: { paymentId: any; resourceToken: any }) => any
) => {
  try {
    const paymentData = {
      amount_in_minor: parseInt(createTradeDetails?.amount), // Assuming amount is part of the trade details
      currency: createTradeDetails?.currency, // Assuming currency is part of the trade details
      payment_method: {
        provider_selection: {
          type: "user_selected",
        },
        type: "bank_transfer",
        beneficiary: {
          type: "merchant_account",
          merchant_account_id: process.env.NEXT_PUBLIC_MERCHANT_ACCOUNT_ID,
        },
      },
      user: {
        id: uuidv4(),
        name: data.user.name,
        email: data.user.email,
        phone: "+2349021819551",
        date_of_birth: "1992-11-28",
        address: {
          address_line1: "40 Finsbury Square",
          city: "London",
          state: "London",
          zip: "EC2A 1PX",
          country_code: "GB",
        },
      },
    };
    console.log("payment data is", paymentData);
    const result = await createPayment(paymentData).unwrap();
    console.log("this is ", result);
    dispatch(
      setPaymentDetails({
        paymentId: result.payment_id,
        resourceToken: result.resource_token,
      })
    );

    const returnUri = encodeURIComponent(
      "http://localhost:3000/dashboard/P2P-Trade"
    );
    const hppUrl = `https://payment.truelayer-sandbox.com/payments#payment_id=${result.data.id}&resource_token=${result.data.resource_token}&return_uri=${returnUri}`;

    window.location.href = hppUrl;
  } catch (error) {
    console.error("Error creating payment:", error);
  }
};

export { handleCreateTruelayerPayment };
