import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  CircularProgress,
} from "@mui/material";
import subscriptionAxios from "../Api/subscriptionAxios";

const PartnerPricing = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const PARTNER_APP_URL = import.meta.env.VITE_PARTNER_APP_URL;


  /* ================= FETCH SUBSCRIPTION PLANS ================= */
  const fetchPlans = async () => {
    try {
      setLoading(true);

      const res = await subscriptionAxios.get(
        "/subscriptions/fetch-plans",
        {
          params: {
            userType: "partner",
            planType: "monthly",
          },
        }
      );

      const partnerPlans = res?.data?.payload?.partner || [];
      // console.log("Fetched partner plans:", partnerPlans);

      setPlans(partnerPlans);
      setSelectedPlan(partnerPlans[0] || null);
    } catch (error) {
      console.error("Failed to fetch subscription plans", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <Box py={10} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#d9d2ff", py: 6 }}>
      <Typography fontSize={48} fontWeight={900} textAlign="center" mb={5}>
        Partner&apos;s <i style={{ fontFamily: "beardeys" }}>PRICING</i>
      </Typography>

      <Paper
        elevation={0}
        sx={{
          maxWidth: 1500,
          mx: "auto",
          p: 4,
          borderRadius: 6,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.3fr" },
          gap: 4,
          bgcolor: "#fff",
        }}
      >
        {/* ================= LEFT : PLAN LIST ================= */}
        <Stack spacing={2}>
          {plans.map((plan) => (
            <Box
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              sx={{
                p: 2.5,
                borderRadius: 3,
                border:
                  selectedPlan?.id === plan.id
                    ? "2px solid #FF7A68"
                    : "1px solid #ddd",
                bgcolor:
                  selectedPlan?.id === plan.id
                    ? "#FFB4A8"
                    : "#fff",
                cursor: "pointer",
                transition: "0.25s",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography fontSize={20} fontWeight={700}>
                    {plan.planName}
                  </Typography>



                  <Typography fontSize={14} color="text.secondary">
                    {plan.planDescription}
                  </Typography>
                </Box>

                <Box textAlign="right">
                  <Typography fontSize={18} fontWeight={800}>
                    ₹{plan.price}
                  </Typography>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                    fontWeight={600}
                  >
                    {plan.planType}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>

        {/* ================= RIGHT : PLAN DETAILS ================= */}
        <Box sx={{ bgcolor: "#FFB4A8", borderRadius: 5, p: 4 }}>
          {selectedPlan && (
            <Box sx={{ bgcolor: "#fff", borderRadius: 4, p: 4 }}>
              <Typography fontSize={32} fontWeight={900}>
                ₹{selectedPlan.price}
                <Typography component="span" fontSize={16}>
                  | {selectedPlan.planType}
                </Typography>
              </Typography>
              <Typography fontSize={14} color="text.secondary">
                {selectedPlan.planDescription}
              </Typography>
              <Stack spacing={1.2} mt={3}>
                <Stack spacing={1.2} mt={3}>
                  {Array.isArray(selectedPlan.subscriptionPlanKeyFeatures) &&
                    selectedPlan.subscriptionPlanKeyFeatures
                      .sort((a, b) => a.displayOrder - b.displayOrder)
                      .map((feature) => (
                        <Typography key={feature.id} fontSize={15}>
                          ✔ {feature.featureName}
                        </Typography>
                      ))}
                </Stack>

              </Stack>

              <Button
                fullWidth
                 onClick={() => window.open(PARTNER_APP_URL, "_blank")}
                sx={{
                  mt: 4,
                  py: 1.4,
                  borderRadius: 999,
                  bgcolor: "#053C2E",
                  color: "#fff",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#032B21" },
                }}
              >
                Apply Now
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default PartnerPricing;
