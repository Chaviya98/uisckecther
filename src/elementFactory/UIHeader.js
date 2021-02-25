import {Text,Circle,Layer, Rect} from "react-konva";
import React from "react";

export function UIHeader({element,position,count}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    return   <Layer>
        <Rect
            x={position.x}
            y={position.y}
            width={140}
            height={30}
            fill="white"
            shadowBlur={2}
        />

        <Rect
            x={position.x+10}
            y={position.y+5}
            width={80}
            height={20}
            fill="white"
            shadowBlur={2}
        />
        <Text text={`Logo`} fontSize={12}  x={position.x+20} y={position.y+10} />
    </Layer>





}
