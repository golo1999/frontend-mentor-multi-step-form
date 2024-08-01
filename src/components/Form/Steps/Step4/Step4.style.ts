import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  SubscriptionPlan: styled.div`
    align-items: center;
    display: flex;
    gap: 2.13vw;
    justify-content: space-between;

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.625vw;
      }
    }
  `,
  SubscriptionPlanType: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.06vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.55vw;
      }
    }
  `,
  Summary: styled.div`
    background-color: ${Colors.Alabaster};
    border-radius: 2.13vw;
    display: flex;
    flex-direction: column;
    gap: 3.2vw;
    padding: 3.2vw;

    @media screen {
      @media (min-width: 1200px) {
        border-radius: 0.625vw;
        gap: 1.66vw;
        padding: 1.66vw;
      }
    }
  `,
  Total: styled.div`
    align-items: center;
    display: flex;
    gap: 2.13vw;
    justify-content: space-between;
    margin: 0 3.2vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 0.625vw;
        margin: 0.83vw 1.66vw 0;
      }
    }
  `,
};

export const Divider = styled.div`
  background-color: ${Colors.LightGray};
  height: 0.26vw;

  @media screen {
    @media (min-width: 1200px) {
      height: 0.078125vw;
    }
  }
`;

export const Text = {
  Change: styled.span`
    color: ${Colors.CoolGray};
    cursor: pointer;
    font-size: 3.73vw;
    text-decoration: underline 0.53vw;

    &:hover {
      color: ${Colors.PurplishBlue};
    }

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.09375vw;
        text-decoration-thickness: 0.15625vw;
      }
    }
  `,
  Description: styled.span`
    color: ${Colors.CoolGray};
    font-size: 4.26vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.25vw;
        margin-bottom: 1.39vw;
      }
    }
  `,
  SubscriptionPlanPrice: styled.span`
    font-size: 3.73vw;
    font-weight: bold;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.11vw;
      }
    }
  `,
  SubscriptionPlanType: styled.span`
    color: ${Colors.MarineBlue};
    font-size: 3.73vw;
    font-weight: 500;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.11vw;
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
  Total: styled.span`
    color: ${Colors.CoolGray};
    font-size: 3.73vw;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.09375vw;
      }
    }
  `,
  TotalPrice: styled.span`
    color: ${Colors.PurplishBlue};
    font-size: 4.26vw;
    font-weight: bold;

    @media screen {
      @media (min-width: 1200px) {
        font-size: 1.38vw;
      }
    }
  `,
};
