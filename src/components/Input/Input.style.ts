import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  LabelError: styled.div`
    align-items: center;
    display: flex;
    gap: 4.26vw;
    justify-content: space-between;

    @media screen {
      @media (min-width: 1200px) {
        gap: 1.25vw;
      }
    }
  `,
  Main: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.066vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.55vw;
      }
    }
  `,
};

export const Error = styled.span`
  color: ${Colors.StrawberryRed};
  font-weight: bold;
  font-size: 3.46vw;

  @media screen {
    @media (min-width: 1200px) {
      font-size: 1.11vw;
    }
  }
`;

interface InputProps {
  $isValid: boolean;
  type?: HTMLInputTypeAttribute;
}

export const Input = styled.input.attrs(({ type }) => ({ type }))<InputProps>`
  border-radius: 1.066vw;
  border: 0.26vw solid
    ${({ $isValid }) => ($isValid ? Colors.LightGray : Colors.StrawberryRed)};
  color: ${Colors.MarineBlue};
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  font-size: 3.73vw;
  font-weight: 500;
  padding: 3.73vw;

  &:is(:focus) {
    ${({ $isValid }) => $isValid && `border-color: ${Colors.PurplishBlue};`};
  }

  &::placeholder {
    color: ${Colors.CoolGray};
  }

  @media screen {
    @media (min-width: 1200px) {
      border-radius: 0.3125vw;
      border-width: 0.078125vw;
      font-size: 1.11vw;
      padding: 1.11vw;
    }
  }
`;

export const Label = styled.label`
  color: ${Colors.MarineBlue};
  font-size: 3.46vw;
  font-weight: 500;

  @media screen {
    @media (min-width: 1200px) {
      font-size: 1.11vw;
    }
  }
`;
