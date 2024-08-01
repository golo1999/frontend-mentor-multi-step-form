import styled from "styled-components";

import { Colors } from "environment";

interface InnerMainContainerProps {
  $imageUri: string;
}

export const Container = {
  Content: styled.div`
    display: flex;
    gap: 4.26vw;

    @media screen {
      @media (min-width: 768px) {
        gap: 2.083vw;
      }

      @media (min-width: 1200px) {
        gap: 1.11vw;
      }
    }
  `,
  Main: {
    Inner: styled.div<InnerMainContainerProps>`
      align-items: flex-start;
      background-image: ${({ $imageUri }) => $imageUri};
      background-size: cover;
      display: flex;
      gap: 4.26vw;
      height: 45.86vw;
      justify-content: center;
      padding: 8.53vw;

      @media screen {
        @media (min-width: 1200px) {
          flex-direction: column;
          gap: 2.22vw;
          height: inherit;
          justify-content: unset;
          padding: 2.22vw;
          width: 100%;
        }
      }
    `,
    Outer: styled.nav`
      @media screen {
        @media (min-width: 1200px) {
          aspect-ratio: 137 / 284;
          height: 100%;
        }
      }
    `,
  },
  StepIcon: styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
  `,
  Texts: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.06vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.27vw;
      }
    }
  `,
};

export const Text = {
  Step: styled.span`
    color: ${Colors.PastelBlue};
    font-size: 3.46vw;
    text-transform: uppercase;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 0.9vw;
      }
    }
  `,
  StepDescription: styled.span`
    color: ${Colors.Magnolia};
    font-size: 3.73vw;
    font-weight: 500;
    letter-spacing: 0.26vw;
    text-transform: uppercase;
    width: fit-content;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 0.97vw;
        letter-spacing: 0.07vw;
      }
    }
  `,
};
