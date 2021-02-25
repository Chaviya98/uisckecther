import {Rect} from "react-konva";
import React from "react";

export function Navbar({element,position}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    return <Rect
        x={position.x}
        y={position.y}
        width={400}
        height={20}
        fill={element.color}
        shadowBlur={4}
    />


}
