import { Suspense, useEffect, useRef, useState } from 'react'
import './App.css'
import { useServices } from './context/useServices'
import { EmployeeCard } from './pagination-generics/EmployeeCard'
import { employees } from './pagination-generics/constants/Employees'
import Paginable from './pagination-generics/Paginable'
import Component from './fetch-withSuspense/Component'
import { ErrorBoundary } from 'react-error-boundary'
import { LazyLoadedDialog } from './lazyLoading/LazyLoadedDialog'

function App() {

    const {service1, service2} = useServices()

    const firstRender = useRef<boolean>(true)
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if(firstRender.current == false) return
        console.log(service1.test())
        console.log(service2.test())
        firstRender.current = false
    }, [])

    return (
        <>
            <Paginable items={employees} Renderer={EmployeeCard} perPage={4} className='flex flex-col justify-center items-center gap-y-[20px]'/>
            <ErrorBoundary fallback={<div>Error!</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component/>
                </Suspense>
            </ErrorBoundary>
            {isDialogOpen && (
                <Suspense fallback={<div>Loading Dialog...</div>}>
                    <LazyLoadedDialog onClose={() => setIsDialogOpen(false)} />
                </Suspense>
            )}
        </>
    )
}

export default App
