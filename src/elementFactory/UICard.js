import {Text, Layer, Rect} from "react-konva";
import React from "react";

export function UICard({element, position, title}) {

    let sizeCardBackground = 0;
    let sizeCardInformation = 0;
    if (title == null) {
        title = "Title"
    }
    if (element && element.element && element.size === 1) {
        sizeCardBackground = 100;
        sizeCardInformation = 30;
    } else {
        sizeCardBackground = 120;
        sizeCardInformation = 40;
    }

    return <Layer>
        <Rect
            x={position.x}
            y={position.y + 10}
            width={140}
            height={sizeCardBackground}
            fill="white"
            shadowBlur={2}
        />
        <Rect
            x={position.x}
            y={position.y + 110}
            width={140}
            height={sizeCardInformation}
            fill="white"
            shadowBlur={1}
        />
        <Text text={title} fontSize={sizeCardBackground === 100 ? 9 : 12} x={position.x + 10} y={position.y + 115}/>
        <Text text={`Description`} fontSize={sizeCardBackground === 100 ? 9 : 12} x={position.x + 10}
              y={position.y + 130}/>
    </Layer>

}
