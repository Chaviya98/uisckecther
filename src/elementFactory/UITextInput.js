import {Text, Circle, Layer, Rect} from "react-konva";
import React from "react";

export function UITextInput({element, position, placeholder}) {

    let size = 0;

    if (placeholder == null) {
        placeholder = "Placeholder"
    }

    if (element && element.element && element.size === 1) {
        size = 25
    } else {
        size = 35
    }
    return <Layer>
        <Text text={`Label Name`} fontSize={12} x={position.x} y={position.y + 10}/>
        <Rect
            x={position.x}
            y={position.y + 30}
            width={140}
            height={size}
            fill="white"
            shadowBlur={2}
        />
        <Text text={placeholder} fontSize={size === 25 ? 10 : 12} x={position.x + 15} y={position.y + 40}/>
    </Layer>
}
