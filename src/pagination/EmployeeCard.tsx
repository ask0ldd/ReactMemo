import { IRendererProps } from "./Paginable"

export interface IEmployee{
    lastname : string
    firstname : string
    position : string
}

export function EmployeeCard({item, index} : IRendererProps<IEmployee>){ // defined item type passed to the renderer (this card)
    return(
        <article className="flex flex-col border-1 border-[#dfdfdf] min-w-[300px] p-[20px] rounded-md shadow-gray-200 shadow-md">
            <span>{index}</span>
            <span>{item.lastname}</span>
            <span>{item.firstname}</span>
            <span>{item.position}</span>
        </article>
    )
}