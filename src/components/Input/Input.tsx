import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

import { Container, Error, Input as StyledInput, Label } from "./Input.style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export function Input({
  errorMessage,
  label,
  placeholder,
  type,
  ...props
}: Props) {
  return (
    <Container.Main>
      {(errorMessage || label) && (
        <Container.LabelError>
          {label && <Label>{label}</Label>}
          {errorMessage && <Error>{errorMessage}</Error>}
        </Container.LabelError>
      )}
      <StyledInput
        {...props}
        $isValid={!errorMessage}
        placeholder={placeholder}
        spellCheck={false}
        type={type}
      />
    </Container.Main>
  );
}
