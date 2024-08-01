import styled from "styled-components";

import { Colors } from "environment";
import { Step } from "types";

interface StepsContainerProps {
  $currentStep: Step;
}

export const Container = {
  Content: styled.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 6.4vw;
    justify-content: space-between;
    left: 0;
    position: absolute;
    right: 0;
    top: 25.6vw;
  `,
  Main: styled.div`
    background-color: ${Colors.Magnolia};
    flex: 1;
    overflow: auto;
    position: relative;
  `,
  Steps: styled.div<StepsContainerProps>`
    ${({ $currentStep }) =>
      $currentStep === "STEP_5" && "align-items: center;"};
    background-color: ${Colors.White};
    border-radius: 2.13vw;
    box-shadow: rgba(0, 0, 0, 0.1) 0 5.3vw 6.66vw -1.33vw,
      rgba(0, 0, 0, 0.04) 0 2.66vw 2.66vw -1.33vw;
    display: flex;
    flex-direction: column;
    gap: 4.26vw;
    margin: 0 4.26vw;
    padding: ${({ $currentStep }) =>
      $currentStep === "STEP_5" ? "19.2vw 6.4vw" : "8.53vw 6.4vw"};
  `,
};
