import styled from "styled-components";

import { Colors } from "environment";

interface MainContainerProps {
  $isSelected: boolean;
}

export const Container = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.06vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.3125vw;
      }
    }
  `,
  Main: styled.div<MainContainerProps>`
    ${({ $isSelected }) =>
      $isSelected && `background-color: ${Colors.Alabaster};`};
    border: 0.26vw solid
      ${({ $isSelected }) =>
        $isSelected ? Colors.PurplishBlue : Colors.LightGray};
    border-radius: 2.13vw;
    cursor: pointer;
    display: flex;
    flex: 1;
    gap: 4.26vw;
    padding: 3.46vw;

    &:hover {
      ${({ $isSelected }) =>
        !$isSelected && `border-color: ${Colors.PurplishBlue};`};
    }

    @media screen {
      @media (min-width: 1200px) {
        border-radius: 0.625vw;
        border-width: 0.078125vw;
        flex-direction: column;
        gap: 2.77vw;
        padding: 1.015625vw;
      }
    }
  `,
};

export const Photo = styled.img`
  aspect-ratio: 1 / 1;
  height: 10.66vw;

  @media screen {
    @media (min-width: 1200px) {
      height: 2.77vw;
      width: 2.77vw;
    }
  }
`;

export const Text = {
  FreeTrial: styled.span`
    color: ${Colors.MarineBlue};
    font-size: 3.2vw;
    font-weight: 500;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 0.9375vw;
      }
    }
  `,
  Price: styled.span`
    color: ${Colors.CoolGray};
    font-size: 3.46vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.015625vw;
      }
    }
  `,
  Title: styled.span`
    color: ${Colors.MarineBlue};
    font-size: 4vw;
    font-weight: 500;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.171875vw;
      }
    }
  `,
};
