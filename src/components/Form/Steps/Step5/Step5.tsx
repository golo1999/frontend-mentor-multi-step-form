import styled from "styled-components";

import ThankYouIcon from "assets/images/icon-thank-you.svg";
import { Colors } from "environment";

const Image = styled.img`
  aspect-ratio: 1 / 1;
  margin-bottom: 2.13vw;
  width: 12.8vw;

  @media screen {
    @media (min-width: 1200px) {
      margin-bottom: 1.66vw;
      width: 6.11vw;
    }
  }
`;

const Text = {
  Description: styled.span`
    color: ${Colors.CoolGray};
    font-size: 4.26vw;
    text-align: center;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.25vw;
      }
    }
  `,
  Title: styled.h2`
    color: ${Colors.MarineBlue};
    font-size: 5.33vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 2.22vw;
      }
    }
  `,
};

export function Step5() {
  return (
    <>
      <Image alt="Thank you!" src={ThankYouIcon} />
      <Text.Title>Thank you!</Text.Title>
      <Text.Description>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Text.Description>
    </>
  );
}
