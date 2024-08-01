import styled from "styled-components";

import { Colors } from "environment";
import { useSubscriptionItems } from "hooks";
import { useStore } from "store";
import { SubscriptionAddOn } from "types";

const Container = {
  Main: styled.div`
    align-items: center;
    display: flex;
    font-size: 3.73vw;
    gap: 2.13vw;
    justify-content: space-between;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.09375vw;
        gap: 0.625vw;
      }
    }
  `,
};

const Text = {
  Name: styled.span`
    color: ${Colors.CoolGray};
  `,
  Price: styled.span`
    color: ${Colors.MarineBlue};
  `,
};

interface Props {
  item: SubscriptionAddOn;
}

export function AddOnDetails({ item }: Props) {
  const { subscriptionType } = useStore();
  const { subscriptionAddOns } = useSubscriptionItems();

  const matchedAddOn = subscriptionAddOns.find((addOn) => addOn.title === item);

  const price =
    (subscriptionType === "MONTHLY"
      ? matchedAddOn?.priceMonthly
      : matchedAddOn?.priceYearly) || 0;
  const formattedName = item
    .substring(0, 1)
    .concat(item.substring(1).replaceAll("_", " ").toLowerCase());
  const formattedPrice =
    subscriptionType === "MONTHLY" ? `+$${price}/mo` : `+$${price}/yr`;

  return (
    <Container.Main>
      <Text.Name>{formattedName}</Text.Name>
      <Text.Price>{formattedPrice}</Text.Price>
    </Container.Main>
  );
}
