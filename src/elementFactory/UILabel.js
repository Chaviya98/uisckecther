import {Text, Layer, Rect} from "react-konva";
import React from "react";

export function UILabel({element,position,count,value}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    if (value == null){
        value = "Label name"
    }

    return <Layer><Text
        text={value}
        fontSize={12}
        x={position.x}
        y={position.y+10}
        width={140}
        height={30}
        fill={element.color}
    /></Layer>
}
