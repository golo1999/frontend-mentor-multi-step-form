import styled from "styled-components";

import { Colors } from "environment";

interface InnerSwitchContainerProps {
  $translateX: number;
}

interface OuterSwitchContainerProps {
  $widthPercentage: number;
}

export const Container = {
  Main: styled.div`
    align-items: center;
    background-color: ${Colors.Alabaster};
    border-radius: 2.13vw;
    display: flex;
    gap: 6.4vw;
    justify-content: center;
    padding: 2.13vw;

    @media screen {
      @media (min-width: 1200px) {
        border-radius: 0.55vw;
        gap: 1.875vw;
        padding: 1.11vw;
      }
    }
  `,
  Switch: {
    Inner: styled.div<InnerSwitchContainerProps>`
      aspect-ratio: 1 / 1;
      background-color: ${Colors.White};
      border-radius: 50%;
      height: 100%;
      transform: ${({ $translateX }) => `translateX(${$translateX}vw)`};
      transition: transform 0.3s ease;
    `,
    Outer: styled.div<OuterSwitchContainerProps>`
      align-items: center;
      aspect-ratio: 2 / 1;
      background-color: ${Colors.MarineBlue};
      border-radius: 6.4vw;
      cursor: pointer;
      display: flex;
      padding: 1.06vw;
      width: ${({ $widthPercentage }) => `${$widthPercentage}vw`};

      @media screen {
        @media (min-width: 1200px) {
          border-radius: 1.875vw;
          padding: 0.3125vw;
        }
      }
    `,
  },
};

interface TextProps {
  $isSelected: boolean;
}

export const Text = styled.span<TextProps>`
  color: ${({ $isSelected }) =>
    $isSelected ? Colors.MarineBlue : Colors.CoolGray};
  ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
  font-size: 3.73vw;
  font-weight: 500;
  user-select: none;

  @media screen {
    @media (min-width: 1200px) {
      font-size: 1.09375vw;
    }
  }
`;
