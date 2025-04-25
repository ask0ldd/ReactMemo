import { lazy } from "react"
import { createPortal } from "react-dom";

function Component({onClose} : {onClose : () => void}){
    return createPortal(<dialog onClose={onClose}>Lazy Loaded Dialog</dialog>, document.body)
}

export const LazyLoadedDialog = lazy(() =>
    Promise.resolve({ default: Component })
);