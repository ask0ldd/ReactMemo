import { ReactNode, useState } from "react";

// The MouseTracker component encapsulates the logic for tracking mouse position.
export default function MouseTracker ({ render } : { render : ({ x, y} : {x : number, y : number}) => ReactNode }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
  
    function handleMouseMove (event : React.MouseEvent) {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    }
  
    return (
      <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
        {render(position)}
      </div>
    )
}