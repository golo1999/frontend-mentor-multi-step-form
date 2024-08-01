import styled from "styled-components";

import { Colors } from "environment";

export const Back = styled.span`
  color: ${Colors.CoolGray};
  cursor: pointer;
  font-size: 3.73vw;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    color: ${Colors.MarineBlue};
  }

  @media screen {
    @media (min-width: 1200px) {
      font-size: 1.11vw;
    }
  }
`;

interface ButtonProps {
  $backgroundColor: keyof typeof Colors;
  $backgroundColorHover: keyof typeof Colors;
}

export const Button = styled.button.attrs({ type: "button" })<ButtonProps>`
  background-color: ${({ $backgroundColor }) => Colors[$backgroundColor]};
  border-radius: 1.06vw;
  color: ${Colors.White};
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  font-size: 3.73vw;
  font-weight: 500;
  padding: 2.74vw 3.46vw;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ $backgroundColorHover }) =>
      Colors[$backgroundColorHover]};
  }

  @media screen {
    @media (min-width: 1200px) {
      border-radius: 0.27vw;
      font-size: 0.97vw;
      padding: 0.75vw 1.5vw;
    }
  }
`;

interface ContainerProps {
  $isGoBackVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${Colors.White};
  display: flex;
  gap: 4.26vw;
  justify-content: ${({ $isGoBackVisible }) =>
    $isGoBackVisible ? "space-between" : "flex-end"};
  padding: 4.26vw;

  @media screen {
    @media (min-width: 1200px) {
      gap: 1.11vw;
      padding: unset;
    }
  }
`;
