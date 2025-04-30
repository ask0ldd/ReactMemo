import { lazy } from "react"
import { createPortal } from "react-dom";

function Component(){
    return createPortal(<dialog>Lazy Loaded Dialog</dialog>, document.body)
}

export const LazyLoadedDialog = lazy(() =>
    Promise.resolve({ default: Component })
);