import subscriptionAxios from "./subscriptionAxios";

export const fetchSubscriptionPlans = async ({
  userType = "partner",
  planType = "monthly",
}) => {
  const res = await subscriptionAxios.get("/subscription-plans", {
    params: {
      userType,
      planType,
    },
  });

  // ✅ payload.partner OR payload.seller
  return res.data?.payload?.[userType] || [];
};
