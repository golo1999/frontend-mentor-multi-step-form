import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { Input } from "components";
import { Colors } from "environment";

const Container = {
  Inputs: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.46vw;

    @media screen {
      @media (min-width: 1200px) {
        gap: 1.94vw;
      }
    }
  `,
};

const Text = {
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

interface Props {
  inputErrors: {
    email?: string;
    name?: string;
    phone?: string;
  };
  inputValues: { email: string; name: string; phone: string };
  onNameInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEmailInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPhoneInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Step1({
  inputErrors,
  inputValues: defaultInputValues,
  onEmailInputChange,
  onNameInputChange,
  onPhoneInputChange,
}: Props) {
  const [inputValues, setInputValues] = useState(defaultInputValues);
  const {
    email: emailErrorMessage,
    name: nameErrorMessage,
    phone: phoneErrorMessage,
  } = inputErrors;
  const { email, name, phone } = inputValues;

  return (
    <>
      <Text.Title>Personal info</Text.Title>
      <Text.Description>
        Please provide your name, email address, and phone number.
      </Text.Description>
      <Container.Inputs>
        <Input
          errorMessage={nameErrorMessage}
          label="Name"
          placeholder="e.g. Stephen King"
          type="text"
          value={name}
          onChange={(e) => {
            setInputValues((values) => ({ ...values, name: e.target.value }));
            onNameInputChange(e);
          }}
        />
        <Input
          errorMessage={emailErrorMessage}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          value={email}
          onChange={(e) => {
            setInputValues((values) => ({ ...values, email: e.target.value }));
            onEmailInputChange(e);
          }}
        />
        <Input
          errorMessage={phoneErrorMessage}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="tel"
          value={phone}
          onChange={(e) => {
            setInputValues((values) => ({ ...values, phone: e.target.value }));
            onPhoneInputChange(e);
          }}
        />
      </Container.Inputs>
    </>
  );
}
