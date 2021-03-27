import {Text, Layer} from "react-konva";
import React from "react";

export function UILabel({element, position, value}) {

    let size = 0;
    if (value == null) {
        value = "Label name"
    }

    if (element && element.element && element.size === 1) {
        size = 25
    } else {
        size = 35
    }
    return <Layer><Text
        text={value}
        fontSize={size === 25 ? 10 : 12}
        x={position.x}
        y={position.y + 10}
        width={140}
        height={size}
    /></Layer>
}
