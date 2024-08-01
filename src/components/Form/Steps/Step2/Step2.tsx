import { useCallback, useState } from "react";
import styled from "styled-components";

import { SubscriptionPlanCard, SubscriptionTypeSwitch } from "components";
import { Colors } from "environment";
import { useSubscriptionItems } from "hooks";
import { SubscriptionPlan, SubscriptionType } from "types";
import { useStore } from "store";

const Container = {
  SubscriptionPlans: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.13vw;

    @media screen {
      @media (min-width: 1200px) {
        flex-direction: unset;
        gap: 0.625vw;
        margin-bottom: 2vw;
      }
    }
  `,
};

const Text = {
  Description: styled.span`
    color: ${Colors.CoolGray};
    font-size: 4.26vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.25vw;
        margin-bottom: 1.39vw;
      }
    }
  `,
  Title: styled.h2`
    color: ${Colors.MarineBlue};
    font-size: 5.33vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 2.22vw;
      }
    }
  `,
};

interface Props {
  onSubscriptionPlanChange: (newPlan: SubscriptionPlan) => void;
  onSubscriptionTypeChange: (newType: SubscriptionType) => void;
}

export function Step2({
  onSubscriptionPlanChange,
  onSubscriptionTypeChange,
}: Props) {
  const { subscriptionPlan, subscriptionType } = useStore();
  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] =
    useState<SubscriptionPlan>(subscriptionPlan);
  const [selectedSubscriptionType, setSelectedSubscriptionType] =
    useState<SubscriptionType>(subscriptionType);
  const { subscriptionPlans } = useSubscriptionItems();

  const handleSubscriptionPlanChange = useCallback(
    (newPlan: SubscriptionPlan) => {
      if (newPlan !== selectedSubscriptionPlan) {
        setSelectedSubscriptionPlan(newPlan);
        onSubscriptionPlanChange(newPlan);
      }
    },
    [selectedSubscriptionPlan, onSubscriptionPlanChange]
  );

  const handleSubscriptionTypeChange = useCallback(
    (newType: SubscriptionType) => {
      if (newType !== selectedSubscriptionType) {
        setSelectedSubscriptionType(newType);
        onSubscriptionTypeChange(newType);
      }
    },
    [selectedSubscriptionType, onSubscriptionTypeChange]
  );

  return (
    <>
      <Text.Title>Select your plan</Text.Title>
      <Text.Description>
        You have the option of monthly or yearly billing.
      </Text.Description>
      <Container.SubscriptionPlans>
        {subscriptionPlans.map((plan, index) => (
          <SubscriptionPlanCard
            item={plan}
            key={index}
            selectedSubscriptionPlan={selectedSubscriptionPlan}
            selectedSubscriptionType={selectedSubscriptionType}
            onClick={() => handleSubscriptionPlanChange(plan.title)}
          />
        ))}
      </Container.SubscriptionPlans>
      <SubscriptionTypeSwitch
        selectedSubscriptionType={selectedSubscriptionType}
        onMonthlyClick={() => handleSubscriptionTypeChange("MONTHLY")}
        onYearlyClick={() => handleSubscriptionTypeChange("YEARLY")}
      />
    </>
  );
}
