import { useCallback, useMemo, useState } from "react";

import { Navigation, Sidebar } from "components";
import { SubscriptionAddOn, SubscriptionPlan, SubscriptionType } from "types";
import { useStore } from "store";

import { Step1, Step2, Step3, Step4, Step5 } from "../Steps";

import { Container } from "./VerticalForm.style";

export function VerticalForm() {
  const {
    currentStep,
    subscriptionAddOns,
    subscriptionPlan,
    subscriptionType,
    changeSubscriptionPlan,
    changeSubscriptionType,
    goBack,
    nextStep,
    setSubscriptionAddOns,
  } = useStore();
  const [selectedSubscriptionAddOns, setSelectedSubscriptionAddOns] =
    useState<Set<SubscriptionAddOn>>(subscriptionAddOns);
  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] =
    useState<SubscriptionPlan>(subscriptionPlan);
  const [selectedSubscriptionType, setSelectedSubscriptionType] =
    useState<SubscriptionType>(subscriptionType);
  const [stepOneInputErrors, setStepOneInputErrors] = useState<{
    email?: "EMAIL/REQUIRED" | "EMAIL/INVALID";
    name?: "NAME/REQUIRED";
    phone?: "PHONE/REQUIRED";
  }>({ email: undefined, name: undefined, phone: undefined });
  const [stepOneInputValues, setStepOneInputValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleBackClick = useCallback(() => {
    if (currentStep === "STEP_2") {
      changeSubscriptionPlan(selectedSubscriptionPlan);
      changeSubscriptionType(selectedSubscriptionType);
    } else if (currentStep === "STEP_3") {
      setSubscriptionAddOns(selectedSubscriptionAddOns);
    }

    goBack();
  }, [
    currentStep,
    selectedSubscriptionAddOns,
    selectedSubscriptionPlan,
    selectedSubscriptionType,
    changeSubscriptionPlan,
    changeSubscriptionType,
    goBack,
    setSubscriptionAddOns,
  ]);

  const handleButtonClick = useCallback(() => {
    if (currentStep === "STEP_1") {
      const { email, name, phone } = stepOneInputValues;

      let isEmailValid = true;
      let isNameValid = true;
      let isPhoneValid = true;

      // Email validation
      if (email.trim().length === 0) {
        isEmailValid = false;
        setStepOneInputErrors((errors) => ({
          ...errors,
          email: "EMAIL/REQUIRED",
        }));
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(
          String(email).trim().toLowerCase()
        )
      ) {
        isEmailValid = false;
        setStepOneInputErrors((errors) => ({
          ...errors,
          email: "EMAIL/INVALID",
        }));
      } else if (stepOneInputErrors.email) {
        setStepOneInputErrors((errors) => ({ ...errors, email: undefined }));
      }

      // Name validation
      if (name.trim().length === 0) {
        isNameValid = false;
        setStepOneInputErrors((errors) => ({
          ...errors,
          name: "NAME/REQUIRED",
        }));
      } else if (stepOneInputErrors.name) {
        setStepOneInputErrors((errors) => ({ ...errors, name: undefined }));
      }

      // Phone validation
      if (phone.trim().length === 0) {
        isPhoneValid = false;
        setStepOneInputErrors((errors) => ({
          ...errors,
          phone: "PHONE/REQUIRED",
        }));
      } else if (stepOneInputErrors.phone) {
        setStepOneInputErrors((errors) => ({ ...errors, phone: undefined }));
      }

      if (!isEmailValid || !isNameValid || !isPhoneValid) {
        return;
      }
    } else if (currentStep === "STEP_2") {
      changeSubscriptionPlan(selectedSubscriptionPlan);
      changeSubscriptionType(selectedSubscriptionType);
    } else if (currentStep === "STEP_3") {
      setSubscriptionAddOns(selectedSubscriptionAddOns);
    }

    nextStep();
  }, [
    currentStep,
    selectedSubscriptionAddOns,
    selectedSubscriptionPlan,
    selectedSubscriptionType,
    stepOneInputErrors,
    stepOneInputValues,
    changeSubscriptionPlan,
    changeSubscriptionType,
    nextStep,
    setSubscriptionAddOns,
  ]);

  const displayedStep = useMemo(() => {
    switch (currentStep) {
      case "STEP_1":
        return (
          <Step1
            inputErrors={Object.assign(
              {},
              {
                ...(stepOneInputErrors.email && {
                  email:
                    stepOneInputErrors.email === "EMAIL/INVALID"
                      ? "This field is invalid"
                      : "This field is required",
                }),
                ...(stepOneInputErrors.name && {
                  name: "This field is required",
                }),
                ...(stepOneInputErrors.phone && {
                  phone: "This field is required",
                }),
              }
            )}
            inputValues={stepOneInputValues}
            onEmailInputChange={(e) => {
              setStepOneInputValues((inputValues) => ({
                ...inputValues,
                email: e.target.value,
              }));
            }}
            onNameInputChange={(e) => {
              setStepOneInputValues((inputValues) => ({
                ...inputValues,
                name: e.target.value,
              }));
            }}
            onPhoneInputChange={(e) => {
              setStepOneInputValues((inputValues) => ({
                ...inputValues,
                phone: e.target.value,
              }));
            }}
          />
        );
      case "STEP_2":
        return (
          <Step2
            onSubscriptionPlanChange={(plan) =>
              setSelectedSubscriptionPlan(plan)
            }
            onSubscriptionTypeChange={(type) =>
              setSelectedSubscriptionType(type)
            }
          />
        );
      case "STEP_3":
        return (
          <Step3
            onSubscriptionAddOnsChange={(addOns) =>
              setSelectedSubscriptionAddOns(addOns)
            }
          />
        );
      case "STEP_4":
        return <Step4 />;
      default:
        return <Step5 />;
    }
  }, [currentStep, stepOneInputErrors, stepOneInputValues]);

  const isNavigationVisible = currentStep !== "STEP_5";
  const isNavigationGoBackVisible = currentStep !== "STEP_1";
  const navigationButtonText =
    currentStep !== "STEP_4" ? "Next step" : "Confirm";

  return (
    <Container.Main>
      <Sidebar />
      <Container.Content>
        <Container.Steps $currentStep={currentStep}>
          {displayedStep}
        </Container.Steps>
        {isNavigationVisible && (
          <Navigation
            buttonText={navigationButtonText}
            isGoBackVisible={isNavigationGoBackVisible}
            onBackClick={handleBackClick}
            onButtonClick={handleButtonClick}
          />
        )}
      </Container.Content>
    </Container.Main>
  );
}
