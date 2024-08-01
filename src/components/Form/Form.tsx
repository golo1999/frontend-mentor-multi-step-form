import { useMemo } from "react";

import { useDeviceType } from "hooks";

import { HorizontalForm } from "./HorizontalForm";
import { VerticalForm } from "./VerticalForm";

export function Form() {
  const deviceType = useDeviceType();

  const renderedForm = useMemo(
    () =>
      deviceType !== "DESKTOP" && deviceType !== "LAPTOP" ? (
        <VerticalForm />
      ) : (
        <HorizontalForm />
      ),
    [deviceType]
  );

  return renderedForm;
}
