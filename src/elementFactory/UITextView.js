import {Text, Layer, Rect} from "react-konva";
import React from "react";

export function UITextView({element, position}) {
    const color = 'white';
    const size = {width: 100, height: 50}
    var height = 0;

    if (element && element.element && element.size === 1) {
        height = 40
    } else {
        height = 60
    }


    return <Layer><Text
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard" fontSize={10}
        x={position.x}
        y={position.y + 10}
        width={140}
        height={height}
        fill={element.color}
    /></Layer>
}
