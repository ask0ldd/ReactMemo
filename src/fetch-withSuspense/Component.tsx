/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { use } from "react";
import { mockUserService } from "./services/mockUserService";

/*
    Without caching:
    1. New promises would be created on each render
    2. React would treat them as different operations
    3. Components would suspend indefinitely in a loop
*/
const cachedPromise = mockUserService.getFirst();

export default function Component() {

    const data = use(cachedPromise)

    return (
        <div className={"flex flex-col p-[20px]"}>
            {data.firstname}
            {data.lastname}
            {data.email}
        </div>
    )
}