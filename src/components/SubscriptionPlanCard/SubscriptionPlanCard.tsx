import { useEffect, useState } from "react";

import { SubscriptionPlanItem } from "models";
import { SubscriptionPlan, SubscriptionType } from "types";

import { Container, Photo, Text } from "./SubscriptionPlanCard.style";

interface Props {
  item: SubscriptionPlanItem;
  selectedSubscriptionPlan: SubscriptionPlan;
  selectedSubscriptionType: SubscriptionType;
  onClick: () => void;
}

export function SubscriptionPlanCard({
  item: { icon, priceMonthly, priceYearly, title },
  selectedSubscriptionPlan,
  selectedSubscriptionType,
  onClick,
}: Props) {
  const [photoSrc, setPhotoSrc] = useState("");

  useEffect(() => {
    async function fetchPhotoSrc() {
      const svg = await import(`assets/images/${icon}.svg`);
      setPhotoSrc(svg.default);
    }

    fetchPhotoSrc();
  }, [icon]);

  const formattedPrice =
    selectedSubscriptionType === "MONTHLY"
      ? `$${priceMonthly}/mo`
      : `$${priceYearly}/yr`;
  const formattedTitle = title
    .substring(0, 1)
    .concat(title.substring(1).toLowerCase());
  const isSelected = selectedSubscriptionPlan === title;

  return (
    <Container.Main $isSelected={isSelected} onClick={onClick}>
      <Photo alt={formattedTitle} src={photoSrc} />
      <Container.Content>
        <Text.Title>{formattedTitle}</Text.Title>
        <Text.Price>{formattedPrice}</Text.Price>
        {selectedSubscriptionType === "YEARLY" && (
          <Text.FreeTrial>2 months free</Text.FreeTrial>
        )}
      </Container.Content>
    </Container.Main>
  );
}
