import React, { createContext, useEffect, useState } from "react";
import { addons as AddonsUtils } from "../Utils/Addons";

interface InfoType {
  name: string | null;
  email: string | null;
  phone: string | null;
}

interface PlansType {
  plan: string;
  planPrice: {
    monthly: number,
    yearly: number;
  };
}

interface AddonsType {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  isActive: boolean;
}


interface FormContextType {
  info: InfoType | null;
  setInfo: React.Dispatch<React.SetStateAction<InfoType>>;
  plan: PlansType | null;
  setPlan: React.Dispatch<React.SetStateAction<PlansType>>;
  billing: string;
  setBilling: React.Dispatch<React.SetStateAction<string>>;
  addons: AddonsType[];
  setAddons: React.Dispatch<React.SetStateAction<AddonsType[]>>
}

const iFormContextState = {
  info: null,
  setInfo: () => {},
  plan: null,
  setPlan: () => {},
  billing: 'monthly',
  setBilling: () => {},
  addons: AddonsUtils,
  setAddons: () => {}
};

export const FormCtx = createContext<FormContextType>(iFormContextState);

interface Props {
  children: React.ReactNode;
}

export const FormContextProvider = ({ children }: Props) => {
  const [info, setInfo] = useState<InfoType>({
    name: null,
    email: null,
    phone: null,
  });
  
  const [plan, setPlan] = useState<PlansType>({
    plan: "Arcade",
    planPrice: {
      monthly: 9,
      yearly: 90
    },
  });

  const [billing, setBilling] = useState("monthly")
  const [addons, setAddons] = useState<AddonsType[]>(AddonsUtils)

  return (
    <FormCtx.Provider value={{ info, setInfo, plan, setPlan, billing, setBilling, addons, setAddons }}>
      {children}
    </FormCtx.Provider>
  );
};
