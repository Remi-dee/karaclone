import { useCallback } from "react";

function useMonoPayment() {
  const payWithMono = useCallback(async () => {
    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const monoInstance = new MonoConnect({
      key: "PUBLIC_KEY",
      scope: "payments",
      data: {
        type: "one-time-debit", // recurring-debit or one-time-debit
        amount: 150000, // amount in kobo
        description: "Payment for light bill",
      },
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
    });

    monoInstance.setup();
    monoInstance.open();
  }, []);

  return payWithMono;
}
function useMonoWidget() {
  const openMonoWidget = useCallback(async () => {
    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const monoInstance = new MonoConnect({
      key: "test_pk_ldvcm2kc4zpbki9mq0xt",
      onClose: () => console.log("Widget closed"),

      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
    });

    monoInstance.setup();
    monoInstance.open();

    return openMonoWidget;
  }, []);
}
export { useMonoPayment, useMonoWidget };
