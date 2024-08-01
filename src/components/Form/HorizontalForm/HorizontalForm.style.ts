import styled from "styled-components";

import { Colors } from "environment";
import { Step } from "types";

interface StepsProps {
  $currentStep: Step;
}

export const Container = {
  Content: styled.div`
    background-color: ${Colors.White};
    border-radius: 4.26vw;
    box-shadow: rgba(0, 0, 0, 0.1) 0 5.33vw 6.66vw -1.33vw,
      rgba(0, 0, 0, 0.04) 0 2.66vw 2.66vw -1.33vw;
    display: flex;
    gap: 4.26vw;
    padding: 4.26vw;
    width: 85vw;

    @media screen {
      @media (min-width: 1200px) {
        border-radius: 1.11vw;
        box-shadow: rgba(0, 0, 0, 0.1) 0 1.38vw 1.73vw -0.34vw,
          rgba(0, 0, 0, 0.04) 0 0.69vw 0.69vw -0.34vw;
        gap: 1.11vw;
        height: 50vw;
        padding: 1.11vw;
        width: 70vw;
      }
    }
  `,
  Main: styled.div`
    align-items: center;
    background-color: ${Colors.Magnolia};
    display: flex;
    flex: 1;
    justify-content: center;
    overflow: auto;

    @media screen {
      @media (min-width: 1200px) {
        height: fit-content;
        min-height: 100vh;
        padding: 7.5vw 0;
      }
    }
  `,
  Steps: styled.div<StepsProps>`
    ${({ $currentStep }) =>
      $currentStep === "STEP_5" && "align-items: center;"};
    display: flex;
    flex-direction: column;
    gap: 3.2vw;
    ${({ $currentStep }) => $currentStep === "STEP_5" && "padding: 34.13vw 0;"};

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.83vw;
        ${({ $currentStep }) =>
          $currentStep === "STEP_5" && "padding: 8.88vw 0;"};
      }
    }
  `,
  StepsNavigation: styled.div<StepsProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 6.4vw;
    justify-content: ${({ $currentStep }) =>
      $currentStep === "STEP_5" ? "center" : "space-between"};
    margin: 8.53vw 0 6.4vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 2vw;
        margin: 2.77vw 4.44vw 1.11vw;
      }
    }
  `,
};
