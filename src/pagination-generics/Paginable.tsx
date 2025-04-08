import { FC, useState } from "react"

interface IPaginableProps<T>{
    items : T[]
    Renderer : FC<IRendererProps<T>> // Component to render each item with
    className ?: string
    perPage : number
}

// IRendererProps inherits the generic type T from IPaginableProps through the Renderer component
// Example: When using IPaginableProps<ICard>, IRendererProps will receive ICard as the item type
export interface IRendererProps<T>{
    item : T
    index : number
}

export default function Paginable<T>({items, Renderer, className, perPage} : IPaginableProps<T>){

    const [currentPage, setCurrentPage] = useState(0)
    const startOffset = currentPage * perPage
    const endOffset = (currentPage + 1) * perPage
    const subSet = items.slice(startOffset, endOffset)
    const numPages = Math.ceil(items.length / perPage)
    const pages = Array.from(Array(numPages)).map((_, v) => v)

    return(
        <section className={className}>
            <div className="flex flex-row gap-x-[10px]">
                {
                    subSet.map((item, index) => (
                        <Renderer key={index} item={item} index={index + startOffset} />
                    ))
                }
            </div>
            {
                numPages > 1 && (
                    <ol className="flex flex-row gap-x-[5px]">
                        {pages.map(page => (
                            <li key={page}>
                                <button className={'shadow-gray-300 shadow-xl bg-gray-50 hover:cursor-pointer px-[12px] py-[5px] rounded-[4px] ' + (page == currentPage ? 'bg-fuchsia-400' : '')} onClick={() => setCurrentPage(page)}>{page + 1}</button>
                            </li>
                        ))}
                    </ol>
                )
            }
        </section>
    )
}