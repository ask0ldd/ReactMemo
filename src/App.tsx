import './App.css'
import { EmployeeCard } from './pagination/EmployeeCard'
import { employees } from './pagination/Employees'
import Paginable from './pagination/Paginable'

function App() {

  return (
    <>
      <Paginable items={employees} Renderer={EmployeeCard} perPage={4} className='flex flex-row gap-x-[10px]'/>
    </>
  )
}

export default App
