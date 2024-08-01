import { create } from "zustand";

import {
  Step,
  SubscriptionAddOn,
  SubscriptionPlan,
  SubscriptionType,
} from "types";

type Store = {
  currentStep: Step;
  subscriptionAddOns: Set<SubscriptionAddOn>;
  subscriptionPlan: SubscriptionPlan;
  subscriptionType: SubscriptionType;
  changeCurrentStep: (step: Step) => void;
  changeSubscriptionPlan: (plan: SubscriptionPlan) => void;
  changeSubscriptionType: (type: SubscriptionType) => void;
  goBack: () => void;
  nextStep: () => void;
  setSubscriptionAddOns: (addOns: Set<SubscriptionAddOn>) => void;
};

export const useStepOneStore = create<Store>((set) => ({
  currentStep: "STEP_1",
  subscriptionAddOns: new Set<SubscriptionAddOn>(),
  subscriptionPlan: "ARCADE",
  subscriptionType: "MONTHLY",
  changeCurrentStep(newStep) {
    const { currentStep } = useStepOneStore.getState();

    if (newStep !== currentStep) {
      set((state) => ({ ...state, currentStep: newStep }));
    }
  },
  changeSubscriptionPlan(newPlan) {
    const { subscriptionPlan } = useStepOneStore.getState();

    if (newPlan !== subscriptionPlan) {
      set((state) => ({ ...state, subscriptionPlan: newPlan }));
    }
  },
  changeSubscriptionType(newType) {
    const { subscriptionType } = useStepOneStore.getState();

    if (newType !== subscriptionType) {
      set((state) => ({ ...state, subscriptionType: newType }));
    }
  },
  goBack() {
    const { currentStep } = useStepOneStore.getState();

    if (currentStep === "STEP_2") {
      set((state) => ({ ...state, currentStep: "STEP_1" }));
    } else if (currentStep === "STEP_3") {
      set((state) => ({ ...state, currentStep: "STEP_2" }));
    } else if (currentStep === "STEP_4") {
      set((state) => ({ ...state, currentStep: "STEP_3" }));
    }
  },
  nextStep() {
    const { currentStep } = useStepOneStore.getState();

    if (currentStep === "STEP_1") {
      set((state) => ({ ...state, currentStep: "STEP_2" }));
    } else if (currentStep === "STEP_2") {
      set((state) => ({
        ...state,
        currentStep: "STEP_3",
      }));
    } else if (currentStep === "STEP_3") {
      set((state) => ({ ...state, currentStep: "STEP_4" }));
    } else if (currentStep === "STEP_4") {
      set((state) => ({ ...state, currentStep: "STEP_5" }));
    }
  },
  setSubscriptionAddOns(newAddOns) {
    const { subscriptionAddOns } = useStepOneStore.getState();

    if (subscriptionAddOns.size !== newAddOns.size) {
      set((state) => ({ ...state, subscriptionAddOns: newAddOns }));
      return;
    }

    let isSameSet = true;

    subscriptionAddOns.forEach((addOn) => {
      if (!isSameSet) {
        return;
      }

      if (!newAddOns.has(addOn)) {
        isSameSet = false;
        return;
      }
    });

    if (!isSameSet) {
      set((state) => ({ ...state, subscriptionAddOns: newAddOns }));
    }
  },
}));
