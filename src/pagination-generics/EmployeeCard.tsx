import { IRendererProps } from "./Paginable"

export interface IEmployee{
    lastname : string
    firstname : string
    position : string
}

export function EmployeeCard({item, index} : IRendererProps<IEmployee>){ // defined item type passed to the renderer (this card)
    return(
        <article className="flex flex-col min-w-[300px] p-[20px] rounded-md shadow-gray-200 shadow-md bg-gray-50 hover:cursor-pointer">
            <span>{index}</span>
            <span>{item.lastname}</span>
            <span>{item.firstname}</span>
            <span>{item.position}</span>
        </article>
    )
}