import { useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { ReactComponent as BackgroundDesktop } from "assets/images/bg-sidebar-desktop.svg";
import { ReactComponent as BackgroundMobile } from "assets/images/bg-sidebar-mobile.svg";
import { StepIcon } from "components";
import { useDeviceType } from "hooks";
import { useStore } from "store";

import { Container, Text } from "./Sidebar.style";

const BACKGROUND_DESKTOP_STRING = encodeURIComponent(
  renderToStaticMarkup(<BackgroundDesktop />)
);
const BACKGROUND_MOBILE_STRING = encodeURIComponent(
  renderToStaticMarkup(<BackgroundMobile />)
);

export function Sidebar() {
  const deviceType = useDeviceType();
  const { currentStep } = useStore();

  const backgroundImageUri = useMemo(() => {
    let backgroundString;

    if (deviceType === "DESKTOP" || deviceType === "LAPTOP") {
      backgroundString = BACKGROUND_DESKTOP_STRING;
    } else {
      backgroundString = BACKGROUND_MOBILE_STRING;
    }

    return `url("data:image/svg+xml, ${backgroundString}")`;
  }, [deviceType]);

  return (
    <Container.Main.Outer>
      <Container.Main.Inner $imageUri={backgroundImageUri}>
        {deviceType !== "DESKTOP" && deviceType !== "LAPTOP" ? (
          <StepIcon isActive={currentStep === "STEP_1"} step="1" />
        ) : (
          <Container.Content>
            <Container.StepIcon>
              <StepIcon isActive={currentStep === "STEP_1"} step="1" />
            </Container.StepIcon>
            <Container.Texts>
              <Text.Step>Step 1</Text.Step>
              <Text.StepDescription>Your info</Text.StepDescription>
            </Container.Texts>
          </Container.Content>
        )}
        {deviceType !== "DESKTOP" && deviceType !== "LAPTOP" ? (
          <StepIcon isActive={currentStep === "STEP_2"} step="2" />
        ) : (
          <Container.Content>
            <Container.StepIcon>
              <StepIcon isActive={currentStep === "STEP_2"} step="2" />
            </Container.StepIcon>
            <Container.Texts>
              <Text.Step>Step 2</Text.Step>
              <Text.StepDescription>Select plan</Text.StepDescription>
            </Container.Texts>
          </Container.Content>
        )}
        {deviceType !== "DESKTOP" && deviceType !== "LAPTOP" ? (
          <StepIcon isActive={currentStep === "STEP_3"} step="3" />
        ) : (
          <Container.Content>
            <Container.StepIcon>
              <StepIcon isActive={currentStep === "STEP_3"} step="3" />
            </Container.StepIcon>
            <Container.Texts>
              <Text.Step>Step 3</Text.Step>
              <Text.StepDescription>Add-ons</Text.StepDescription>
            </Container.Texts>
          </Container.Content>
        )}
        {deviceType !== "DESKTOP" && deviceType !== "LAPTOP" ? (
          <StepIcon
            isActive={currentStep === "STEP_4" || currentStep === "STEP_5"}
            step="4"
          />
        ) : (
          <Container.Content>
            <Container.StepIcon>
              <StepIcon
                isActive={currentStep === "STEP_4" || currentStep === "STEP_5"}
                step="4"
              />
            </Container.StepIcon>
            <Container.Texts>
              <Text.Step>Step 4</Text.Step>
              <Text.StepDescription>Summary</Text.StepDescription>
            </Container.Texts>
          </Container.Content>
        )}
      </Container.Main.Inner>
    </Container.Main.Outer>
  );
}
