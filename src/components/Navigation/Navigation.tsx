import { Colors } from "environment";
import { useStore } from "store";

import { Back, Button, Container } from "./Navigation.style";

interface Props {
  buttonText: string;
  isGoBackVisible: boolean;
  onBackClick: () => void;
  onButtonClick: () => void;
}

export function Navigation({
  buttonText,
  isGoBackVisible,
  onBackClick,
  onButtonClick,
}: Props) {
  const { currentStep } = useStore();

  const buttonBackgroundColor: keyof typeof Colors =
    currentStep !== "STEP_4" ? "MarineBlue" : "PurplishBlue";
  const buttonBackgroundColorHover: keyof typeof Colors =
    currentStep !== "STEP_4" ? "MarineBlueLighter" : "PurplishBlueLighter";

  return (
    <Container $isGoBackVisible={isGoBackVisible}>
      {isGoBackVisible && <Back onClick={onBackClick}>Go back</Back>}
      <Button
        $backgroundColor={buttonBackgroundColor}
        $backgroundColorHover={buttonBackgroundColorHover}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </Container>
  );
}
