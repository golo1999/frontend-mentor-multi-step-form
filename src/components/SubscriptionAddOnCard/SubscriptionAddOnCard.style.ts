import styled from "styled-components";

import { Colors } from "environment";

export const CheckmarkIcon = styled.img`
  aspect-ratio: 1 / 1;
  width: 3.2vw;

  @media screen {
    @media (min-width: 1200px) {
      width: 0.9375vw;
    }
  }
`;

interface ContainerProps {
  $isSelected: boolean;
}

export const Container = {
  Checkmark: styled.div<ContainerProps>`
    align-items: center;
    aspect-ratio: 1 / 1;
    ${({ $isSelected }) =>
      $isSelected && `background-color: ${Colors.PurplishBlue}`};
    border: 0.26vw solid
      ${({ $isSelected }) =>
        $isSelected ? Colors.PurplishBlue : Colors.LightGray};
    border-radius: 1.06vw;
    display: flex;
    justify-content: center;
    width: 4.26vw;

    @media screen {
      @media (min-width: 1200px) {
        border-radius: 0.3125vw;
        border-width: 0.078125vw;
        width: 1.25vw;
      }
    }
  `,
  Main: styled.div<ContainerProps>`
    align-items: center;
    ${({ $isSelected }) =>
      $isSelected && `background-color: ${Colors.Alabaster};`};
    border-radius: 2.13vw;
    border: 0.26vw solid
      ${({ $isSelected }) =>
        $isSelected ? Colors.PurplishBlue : Colors.LightGray};
    cursor: pointer;
    display: flex;
    gap: 2.13vw;
    justify-content: space-between;
    padding: 3.46vw;

    &:hover {
      ${({ $isSelected }) =>
        !$isSelected && `border-color: ${Colors.PurplishBlue};`};
    }

    @media screen {
      @media (min-width: 1200px) {
        border-radius: 0.625vw;
        border-width: 0.078125vw;
        gap: 1.66vw;
        padding: 1.38vw;
      }
    }
  `,
  TitleDescription: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1.06vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.55vw;
      }
    }
  `,
};

export const Text = {
  Description: styled.span`
    color: ${Colors.CoolGray};
    font-size: 3.2vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1vw;
      }
    }
  `,
  Price: styled.span`
    color: ${Colors.PurplishBlue};
    font-size: 2.93vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1vw;
      }
    }
  `,
  Title: styled.h2`
    color: ${Colors.MarineBlue};
    font-size: 3.73vw;
    font-weight: 500;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.11vw;
      }
    }
  `,
};
