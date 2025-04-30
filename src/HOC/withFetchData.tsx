import { ComponentType, useEffect, useState } from "react";

interface InjectedFetchProps<T> {
    data: T | null
    isLoading: boolean
    error: Error | null
}

// function taking a component + fetchData logic and combining both into a new component
// very similar to custom hook
export function withDataFetch<GWComponentProps, GData>(
    // React.ComponentType<P> means "a React component that accepts props of type P"
    WrappedComponent : ComponentType<GWComponentProps & InjectedFetchProps<GData>>, 
    fetchData : () => Promise<GData> 
) {
    return function EnhancedComponent(props : Omit<GWComponentProps, keyof InjectedFetchProps<GData>>) {
        const [data, setData] = useState<GData|null>(null)
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState<Error | null>(null)
  
        useEffect(() => {
            fetchData()
            .then(response => {
                setData(response)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
        }, [])
  
        return (
            <WrappedComponent
                {...props as GWComponentProps}
                data={data}
                isLoading={isLoading}
                error={error}
            />
        )
    }
}