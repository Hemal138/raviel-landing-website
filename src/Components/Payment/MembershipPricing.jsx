import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchSubscriptionPlans } from "../Api/subscriptionApi";

/* ===========================
   DURATION CONFIG
=========================== */
const DURATIONS = [
  { label: "1 / month", value: "monthly" },
  { label: "3 / month", value: "quarterly" },
  { label: "6 / month", value: "half-yearly" },
  { label: "12 / month", value: "yearly" },
];

/* ===========================
   PRICING CARD
=========================== */
const PricingCard = ({ plan = {}, active, onClick }) => {
  const navigate = useNavigate();
  if (!plan?.id) return null;

  return (
    <Box
      onClick={onClick}
      sx={{
        width: { xs: "100%", md: 360 },
        borderRadius: "26px",
        p: 3,
        cursor: "pointer",
        background: active
          ? "linear-gradient(180deg,#FFF7DB,#FFFFFF)"
          : "#ffffff",
        border: active ? "2px solid #FFB703" : "1px solid #E0E0E0",
        boxShadow: active
          ? "0 20px 45px rgba(0,0,0,0.18)"
          : "0 8px 20px rgba(0,0,0,0.08)",
        transition: "all 0.35s ease",
        position: "relative",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
        },
      }}
    >
      {/* POPULAR BADGE */}
      {plan.isPopular && (
        <Chip
          label="Most Popular"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "#FFB703",
            fontWeight: 700,
          }}
        />
      )}

      {/* HEADER */}
      <Typography fontSize={22} fontWeight={800}>
        {plan.planName}
      </Typography>

      <Typography fontSize={14} color="text.secondary" mt={0.5}>
        {plan.planDescription}
      </Typography>

      {/* PRICE */}
      <Typography fontSize={38} fontWeight={900} mt={2}>
        ₹{plan.price}
        <Typography component="span" fontSize={16} color="text.secondary">
          /{plan.planType}
        </Typography>
      </Typography>

      <Divider sx={{ my: 2 }} />
      {/* CTA */}
      <Button
        fullWidth
        sx={{
          mb: 3,
          py: 1.3,
          borderRadius: "999px",
          fontWeight: 700,
          bgcolor: active ? "#FFB703" : "#052d24",
          color: active ? "#000" : "#fff",
          textTransform: "none",
          "&:hover": {
            bgcolor: "#FFD166",
            color: "#000",
          },
        }}
        onClick={(e) => {
          e.stopPropagation();
          navigate("/signin");
        }}
      >
        Get Started
      </Button>
      {/* FEATURES */}
      <Stack spacing={1.2} sx={{ minHeight: 140 }}>
        {Array.isArray(plan.subscriptionPlanKeyFeatures) &&
          plan.subscriptionPlanKeyFeatures.map((f) => (
            <Typography
              key={f.id}
              fontSize={14}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#2E7D32", marginRight: 8 }}>✔</span>
              {f.featureName}
            </Typography>
          ))}
      </Stack>


    </Box>
  );
};

/* ===========================
   MAIN PAGE
=========================== */
const MembershipPricing = () => {
  const [plans, setPlans] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [duration, setDuration] = useState(DURATIONS[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlans = async () => {
      setLoading(true);
      try {
        const data = await fetchSubscriptionPlans({
          userType: "seller",
          planType: duration.value,
        });

        setPlans(Array.isArray(data) ? data : []);
        setActiveCard(data?.[0]?.id || null);
      } catch {
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    loadPlans();
  }, [duration]);

  return (
    <Box
      sx={{
        bgcolor: "#d9d2ff",
        py: 8,
        px: { xs: 2, md: 6 },
        textAlign: "center",
        borderRadius: "50px 50px 0 0",
      }}
    >
      <Chip
        label="Seller Pricing"
        sx={{
          mb: 3,
          fontWeight: 700,
          borderRadius: "999px",
          border: "2px solid white",
          px: 2,
        }}
      />

      <Typography fontSize={{ xs: 34, md: 56 }} fontWeight={900}>
        Membership <i>Pricing</i>
      </Typography>

      {/* DURATION SWITCH */}
      <Stack direction="row" justifyContent="center" gap={3} mt={4}>
        {DURATIONS.map((d) => (
          <Button
            key={d.value}
            onClick={() => setDuration(d)}
            sx={{
              px: 3,
              py: 1,
              borderRadius: "20px",
              fontWeight: 600,
              bgcolor:
                duration.value === d.value ? "#FFD166" : "#FFF3C4",
            }}
          >
            {d.label}
          </Button>
        ))}
      </Stack>

      {/* CARDS */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        mt={6}
      >
        {loading ? (
          <Typography>Loading plans...</Typography>
        ) : plans.length === 0 ? (
          <Typography>No plans available</Typography>
        ) : (
          plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              active={activeCard === plan.id}
              onClick={() => setActiveCard(plan.id)}
            />
          ))
        )}
      </Stack>
    </Box>
  );
};

export default MembershipPricing;
