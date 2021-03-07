import {Text, Layer, Rect} from "react-konva";
import React from "react";

export function UILabel({element,position,value}) {

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
