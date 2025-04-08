import { createContext, ReactNode } from "react";
import Service1 from "./services/service1";
import Service2 from "./services/service2";

export interface IServicesContext {
    service1: Service1
    service2: Service2
}
  
export const ServicesContext = createContext<IServicesContext | null>(null)

interface IServicesProviderProps {
    children: ReactNode
    services : IServicesContext
}

export function ServicesProvider({ children, services }: IServicesProviderProps) {

    return (
        <ServicesContext.Provider value={services}>
            {children}
        </ServicesContext.Provider>
    )
}