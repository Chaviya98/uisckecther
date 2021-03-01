import {Text, Layer, Rect} from "react-konva";
import React from "react";

export function UITextView({element,position}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    return <Layer><Text 
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard" fontSize={10}
    x={position.x}
    y={position.y+10}
    width={140}
    height={60}
    fill={element.color}
    /></Layer>
}
