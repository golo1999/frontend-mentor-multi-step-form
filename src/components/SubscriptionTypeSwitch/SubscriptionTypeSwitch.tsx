import { useMemo } from "react";

import { useDeviceType } from "hooks";
import { SubscriptionType } from "types";

import { Container, Text } from "./SubscriptionTypeSwitch.style";

interface Props {
  selectedSubscriptionType: SubscriptionType;
  onMonthlyClick: () => void;
  onYearlyClick: () => void;
}

export function SubscriptionTypeSwitch({
  selectedSubscriptionType,
  onMonthlyClick,
  onYearlyClick,
}: Props) {
  const deviceType = useDeviceType();

  function handleOuterContainerClick() {
    if (selectedSubscriptionType === "MONTHLY") {
      onYearlyClick();
    } else {
      onMonthlyClick();
    }
  }

  const outerContainerWidth = useMemo<number>(() => {
    switch (deviceType) {
      case "MOBILE/PORTRAIT":
      case "MOBILE/LANDSCAPE":
      case "TABLET/PORTRAIT":
      case "TABLET/LANDSCAPE":
        return 10.66;
      case "LAPTOP":
        return 3.125;
      case "DESKTOP":
        return 2.77;
    }
  }, [deviceType]);

  const isYearlySubscriptionSelected = selectedSubscriptionType === "YEARLY";
  const innerContainerTranslateX = isYearlySubscriptionSelected
    ? outerContainerWidth / 2
    : 0;

  return (
    <Container.Main>
      <Text
        $isSelected={selectedSubscriptionType === "MONTHLY"}
        onClick={onMonthlyClick}
      >
        Monthly
      </Text>
      <Container.Switch.Outer
        $widthPercentage={outerContainerWidth}
        onClick={handleOuterContainerClick}
      >
        <Container.Switch.Inner $translateX={innerContainerTranslateX} />
      </Container.Switch.Outer>
      <Text $isSelected={isYearlySubscriptionSelected} onClick={onYearlyClick}>
        Yearly
      </Text>
    </Container.Main>
  );
}
