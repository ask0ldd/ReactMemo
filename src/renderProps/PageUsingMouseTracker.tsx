import MouseTracker from "./MouseTracker";

export default function PageUsingMouseTracker(){
    return(
        <MouseTracker render={({ x, y }) => (
            <h1>The mouse position is ({x}, {y})</h1>
        )} />   
    )
}