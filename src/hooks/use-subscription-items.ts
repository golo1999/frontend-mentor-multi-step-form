import { useMemo } from "react";

import { SubscriptionAddOnItem, SubscriptionPlanItem } from "models";

export function useSubscriptionItems() {
  const subscriptionAddOns = useMemo<SubscriptionAddOnItem[]>(
    () => [
      {
        description: "Access to multiplayer games",
        priceMonthly: 1,
        priceYearly: 10,
        title: "ONLINE_SERVICE",
      },
      {
        description: "Extra 1TB of cloud save",
        priceMonthly: 2,
        priceYearly: 20,
        title: "LARGER_STORAGE",
      },
      {
        description: "Custom theme on your profile",
        priceMonthly: 2,
        priceYearly: 20,
        title: "CUSTOMIZABLE_PROFILE",
      },
    ],
    []
  );
  const subscriptionPlans = useMemo<SubscriptionPlanItem[]>(
    () => [
      {
        icon: "icon-arcade",
        priceMonthly: 9,
        priceYearly: 90,
        title: "ARCADE",
      },
      {
        icon: "icon-advanced",
        priceMonthly: 12,
        priceYearly: 120,
        title: "ADVANCED",
      },
      { icon: "icon-pro", priceMonthly: 15, priceYearly: 150, title: "PRO" },
    ],
    []
  );

  return { subscriptionAddOns, subscriptionPlans };
}
