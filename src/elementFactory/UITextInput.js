import {Text, Circle, Layer, Rect} from "react-konva";
import React from "react";

export function UITextInput({element,position,count, placeholder}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    if (placeholder == null){
        placeholder = "Placeholder"
    }
    return   <Layer>
        <Text text={`Label Name`} fontSize={14}  x={position.x} y={position.y+10} />
        <Rect
            x={position.x}
            y={position.y+30}
            width={140}
            height={30}
            fill="white"
            shadowBlur={2}
        />
        <Text text={placeholder} fontSize={12}  x={position.x+15} y={position.y+40} />
    </Layer>
}
