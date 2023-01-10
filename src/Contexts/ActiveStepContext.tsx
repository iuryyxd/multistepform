import React, { createContext, useState } from 'react';

interface ActiveStepContextType {
    activeStep: number | null,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

const iActiveStepContextState = {
    activeStep: 1,
    setActiveStep: () => {}
}

export const ActiveStepCtx = createContext<ActiveStepContextType>(iActiveStepContextState)

interface Props {
    children: React.ReactNode;
}

export const ActiveStepProvider = ({children}: Props) => {

    const [activeStep, setActiveStep] = useState<number>(1)

    return (
        <ActiveStepCtx.Provider value={{activeStep, setActiveStep}}>
            {children}
        </ActiveStepCtx.Provider>
    )
}