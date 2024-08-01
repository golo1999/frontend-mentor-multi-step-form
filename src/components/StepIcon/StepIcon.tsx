import styled from "styled-components";

import { Colors } from "environment";

interface ContainerProps {
  $isActive?: boolean;
}

const Container = styled.div<ContainerProps>`
  align-items: center;
  ${({ $isActive }) => $isActive && `background-color: ${Colors.LightBlue};`};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 0.26vw solid
    ${({ $isActive }) => ($isActive ? Colors.LightBlue : Colors.Magnolia)};
  color: ${({ $isActive }) =>
    $isActive ? Colors.MarineBlue : Colors.Magnolia};
  display: flex;
  font-size: 3.73vw;
  font-weight: bold;
  height: 8.53vw;
  justify-content: center;
  user-select: none;
  z-index: 1;

  @media screen {
    @media (min-width: 1200px) {
      border-width: 0.07vw;
      font-size: 0.97vw;
      height: 2.22vw;
    }
  }
`;

interface Props {
  isActive?: boolean;
  step: string;
}

export function StepIcon({ isActive, step }: Props) {
  return <Container $isActive={isActive}>{step}</Container>;
}
