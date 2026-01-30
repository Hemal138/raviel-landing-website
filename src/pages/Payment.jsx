import React from "react";
import { useMediaQuery } from "@mui/material";

import SellerGrowthIntelligence from "../Components/Payment/SellerGrowthIntelligence";
import WeOffer from "../Components/Payment/WeOffer";
import MembershipPricing from "../Components/Payment/MembershipPricing";
import IconPayment from "../Components/Payment/IconPayment";
import PartnerPayment from "../Components/Payment/PartnerPayment";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  const showIconPayment = useMediaQuery("(min-width:1100px)");

  return (
    <>
    <Helmet>
  <title>Payments – Raviel</title>
  <meta
    name="description"
    content="Secure and fast payment solutions by Raviel."
  />
</Helmet>

      <SellerGrowthIntelligence />
      <WeOffer />
      <MembershipPricing />
      {showIconPayment && <IconPayment />}
      <PartnerPayment/>
    </>
  );
};

export default Payment;
