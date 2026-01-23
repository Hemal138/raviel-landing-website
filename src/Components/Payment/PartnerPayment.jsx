import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { fetchSubscriptionPlans } from "../Api/subscriptionApi";

const DURATIONS = [
  { label: "1 Month", value: "monthly" },
  { label: "3 Months", value: "quarterly" },
  { label: "6 Months", value: "half-yearly" },
  { label: "1 Year", value: "yearly" },
];

const PartnerPricing = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [duration, setDuration] = useState("monthly");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlans = async () => {
      setLoading(true);
      const data = await fetchSubscriptionPlans({
        userType: "partner",
        planType: duration,
      });
      setPlans(data || []);
      setSelectedPlan(data?.[0] || null);
      setLoading(false);
    };

    loadPlans();
  }, [duration]);

  return (
    <Box sx={{ bgcolor: "#F2ECE4", py: 6 }}>
      <Typography
        fontSize={48}
        fontWeight={900}
        textAlign="center"
        mb={5}
      >
        Partner&apos;s <i style={{fontFamily:"beardeys"}}>PRICING</i>
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
                {/* LEFT : NAME & DESC */}
                <Box>
                  <Typography fontSize={20} fontWeight={700}>
                    {plan.planName}
                  </Typography>
                  <Typography fontSize={14} color="text.secondary">
                    {plan.planDescription}
                  </Typography>
                </Box>

                {/* RIGHT : PRICE + DURATION */}
                <Box textAlign="right">
                  <Typography fontSize={18} fontWeight={800}>
                    ₹{plan.price}
                  </Typography>
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                    fontWeight={600}
                  >
                    {plan.planType} {/* or plan.duration */}
                  </Typography>
                </Box>
              </Stack>

            </Box>
          ))}
        </Stack>

        {/* ================= RIGHT : DETAILS ================= */}
        <Box
          sx={{
            bgcolor: "#FFB4A8",
            borderRadius: 5,
            p: 4,
          }}
        >

          {/* Selected Plan Detail */}
          {selectedPlan && (
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: 4,
                p: 4,
              }}
            >
              <Typography fontSize={32} fontWeight={900}>
                ₹{selectedPlan.price}
                <Typography component="span" fontSize={16}>
                  {" "}
                  | {selectedPlan.planType}
                </Typography>
              </Typography>

              <Stack spacing={1.2} mt={3}>
                {selectedPlan.subscriptionPlanKeyFeatures?.map(
                  (f) => (
                    <Typography key={f.id} fontSize={15}>
                      ✔ {f.featureName}
                    </Typography>
                  )
                )}
              </Stack>

              <Button
                fullWidth
                sx={{
                  mt: 4,
                  py: 1.4,
                  borderRadius: 999,
                  bgcolor: "#053C2E",
                  color: "#fff",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#032B21",
                  },
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
