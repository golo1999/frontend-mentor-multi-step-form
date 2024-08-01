import { useCallback, useMemo } from "react";

import { useSubscriptionItems } from "hooks";
import { useStore } from "store";

import { AddOnDetails } from "./AddOnDetails";
import { Container, Divider, Text } from "./Step4.style";

export function Step4() {
  const {
    subscriptionAddOns: selectedSubscriptionAddOns,
    subscriptionPlan: selectedSubscriptionPlan,
    subscriptionType: selectedSubscriptionType,
    changeCurrentStep,
  } = useStore();
  const {
    subscriptionAddOns: allSubscriptionAddOns,
    subscriptionPlans: allSubscriptionPlans,
  } = useSubscriptionItems();

  const handleChangeClick = useCallback(
    () => changeCurrentStep("STEP_2"),
    [changeCurrentStep]
  );

  const selectedSubscriptionAddOnsArray = Array.from(
    selectedSubscriptionAddOns
  );
  const formattedSubscriptionPlan = selectedSubscriptionPlan
    .substring(0, 1)
    .concat(selectedSubscriptionPlan.substring(1).toLowerCase());
  const formattedSubscriptionType = selectedSubscriptionType
    .substring(0, 1)
    .concat(selectedSubscriptionType.substring(1).toLowerCase());

  const subscriptionPlanPrice = useMemo(() => {
    let price = 0;
    const matchedPlan = allSubscriptionPlans.find(
      (plan) => plan.title === selectedSubscriptionPlan
    );

    if (matchedPlan) {
      price +=
        selectedSubscriptionType === "MONTHLY"
          ? matchedPlan.priceMonthly
          : matchedPlan.priceYearly;
    }

    return price;
  }, [
    allSubscriptionPlans,
    selectedSubscriptionPlan,
    selectedSubscriptionType,
  ]);
  const totalPrice = useMemo(() => {
    let price = 0;
    const matchedPlan = allSubscriptionPlans.find(
      (plan) => plan.title === selectedSubscriptionPlan
    );

    if (matchedPlan) {
      price +=
        selectedSubscriptionType === "MONTHLY"
          ? matchedPlan.priceMonthly
          : matchedPlan.priceYearly;
    }

    selectedSubscriptionAddOns.forEach((selectedAddOn) => {
      const matchedAddOn = allSubscriptionAddOns.find(
        (addOn) => addOn.title === selectedAddOn
      );

      if (matchedAddOn) {
        price +=
          selectedSubscriptionType === "MONTHLY"
            ? matchedAddOn.priceMonthly
            : matchedAddOn.priceYearly;
      }
    });

    return price;
  }, [
    allSubscriptionAddOns,
    allSubscriptionPlans,
    selectedSubscriptionAddOns,
    selectedSubscriptionPlan,
    selectedSubscriptionType,
  ]);

  const formattedSubscriptionPlanPrice =
    selectedSubscriptionType === "MONTHLY"
      ? `$${subscriptionPlanPrice}/mo`
      : `$${subscriptionPlanPrice}/yr`;
  const formattedTotal =
    selectedSubscriptionType === "MONTHLY"
      ? `Total (per month)`
      : `Total (per year)`;
  const formattedTotalPrice =
    selectedSubscriptionType === "MONTHLY"
      ? `+$${totalPrice}/mo`
      : `+$${totalPrice}/yr`;

  return (
    <>
      <Text.Title>Finishing up</Text.Title>
      <Text.Description>
        Double-check everything looks OK before confirming.
      </Text.Description>
      <Container.Summary>
        <Container.SubscriptionPlan>
          <Container.SubscriptionPlanType>
            <Text.SubscriptionPlanType>
              {formattedSubscriptionPlan}&nbsp;&#40;
              {formattedSubscriptionType}
              &#41;
            </Text.SubscriptionPlanType>
            <Text.Change onClick={handleChangeClick}>Change</Text.Change>
          </Container.SubscriptionPlanType>
          <Text.SubscriptionPlanPrice>
            {formattedSubscriptionPlanPrice}
          </Text.SubscriptionPlanPrice>
        </Container.SubscriptionPlan>
        {selectedSubscriptionAddOnsArray.length > 0 && (
          <>
            <Divider />
            {selectedSubscriptionAddOnsArray.map((addOn, index) => (
              <AddOnDetails item={addOn} key={index} />
            ))}
          </>
        )}
      </Container.Summary>
      <Container.Total>
        <Text.Total>{formattedTotal}</Text.Total>
        <Text.TotalPrice>{formattedTotalPrice}</Text.TotalPrice>
      </Container.Total>
    </>
  );
}
