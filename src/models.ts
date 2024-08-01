import {
  SubscriptionAddOn,
  SubscriptionPlan,
  SubscriptionPlanIcon,
} from "types";

export interface SubscriptionAddOnItem {
  description: string;
  priceMonthly: number;
  priceYearly: number;
  title: SubscriptionAddOn;
}

export interface SubscriptionPlanItem {
  icon: SubscriptionPlanIcon;
  priceMonthly: number;
  priceYearly: number;
  title: SubscriptionPlan;
}
