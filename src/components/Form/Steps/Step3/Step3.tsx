import { useCallback, useState } from "react";
import styled from "styled-components";

import { SubscriptionAddOnCard } from "components";
import { Colors } from "environment";
import { useSubscriptionItems } from "hooks";
import { useStore } from "store";
import { SubscriptionAddOn } from "types";

const Container = {
  SubscriptionAddOns: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.13vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 1.11vw;
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
  onSubscriptionAddOnsChange: (newAddOns: Set<SubscriptionAddOn>) => void;
}

export function Step3({ onSubscriptionAddOnsChange }: Props) {
  const { subscriptionAddOns } = useStore();
  const [selectedSubscriptionAddOns, setSelectedSubscriptionAddOns] =
    useState<Set<SubscriptionAddOn>>(subscriptionAddOns);
  const { subscriptionAddOns: allSubscriptionAddOns } = useSubscriptionItems();

  const handleSubscriptionAddOnsChange = useCallback(
    (newAddOn: SubscriptionAddOn) => {
      const isContained = selectedSubscriptionAddOns.has(newAddOn);

      if (isContained) {
        selectedSubscriptionAddOns.delete(newAddOn);
      }

      const newSet = new Set(
        isContained
          ? selectedSubscriptionAddOns
          : selectedSubscriptionAddOns.add(newAddOn)
      );

      setSelectedSubscriptionAddOns(newSet);
      onSubscriptionAddOnsChange(newSet);
    },
    [selectedSubscriptionAddOns, onSubscriptionAddOnsChange]
  );

  return (
    <>
      <Text.Title>Pick add-ons</Text.Title>
      <Text.Description>
        Add-ons help enhance your gaming experience.
      </Text.Description>
      <Container.SubscriptionAddOns>
        {allSubscriptionAddOns.map((addOn, index) => {
          const { title: addOnTitle } = addOn;

          function handleCardClick() {
            handleSubscriptionAddOnsChange(addOnTitle);
          }

          const isSelected = selectedSubscriptionAddOns.has(addOnTitle);

          return (
            <SubscriptionAddOnCard
              isSelected={isSelected}
              item={addOn}
              key={index}
              onClick={handleCardClick}
            />
          );
        })}
      </Container.SubscriptionAddOns>
    </>
  );
}
