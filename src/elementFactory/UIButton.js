import {Text, Layer, Rect} from "react-konva";
import React from "react";

export function UIButton({element, position, title}) {

    let size = 0;
    if (title == null) {
        title = "Title"
    }

    if (element && element.element && element.size === 1) {
        size = 25
    } else {
        size = 30
    }

    return <Layer>
        <Rect
            x={position.x}
            y={position.y + 10}
            width={140}
            height={size}
            fill="white"
            shadowBlur={2}
        />
        <Text text={title} fontSize={12} x={position.x + 55} y={position.y + 20}/>
    </Layer>

}
