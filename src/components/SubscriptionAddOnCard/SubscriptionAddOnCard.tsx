import Checkmark from "assets/images/icon-checkmark.svg";
import { SubscriptionAddOnItem } from "models";
import { useStore } from "store";

import { CheckmarkIcon, Container, Text } from "./SubscriptionAddOnCard.style";

interface Props {
  isSelected: boolean;
  item: SubscriptionAddOnItem;
  onClick: () => void;
}

export function SubscriptionAddOnCard({ isSelected, item, onClick }: Props) {
  const { subscriptionType } = useStore();

  const { description, priceMonthly, priceYearly, title } = item;

  const displayedPrice =
    subscriptionType === "MONTHLY"
      ? `+$${priceMonthly}/mo`
      : `+$${priceYearly}/yr`;
  const formattedTitle = title
    .substring(0, 1)
    .concat(title.substring(1).replaceAll("_", " ").toLowerCase());

  return (
    <Container.Main $isSelected={isSelected} onClick={onClick}>
      <Container.Checkmark $isSelected={isSelected}>
        {isSelected && <CheckmarkIcon alt="Checkmark" src={Checkmark} />}
      </Container.Checkmark>
      <Container.TitleDescription>
        <Text.Title>{formattedTitle}</Text.Title>
        <Text.Description>{description}</Text.Description>
      </Container.TitleDescription>
      <Text.Price>{displayedPrice}</Text.Price>
    </Container.Main>
  );
}
