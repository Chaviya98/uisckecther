import {Text, Circle, Layer, Rect} from "react-konva";
import React from "react";

export function BottomNavBar({element, position}) {

    return <Layer>
        <Rect
            x={position.x}
            y={position.y + 10}
            width={240}
            height={40}
            fill="white"
            shadowBlur={2}
        />
        <Rect
            x={position.x}
            y={position.y + 10}
            width={60}
            height={40}
            fill="white"
            shadowBlur={2}
        />
        <Rect
            x={position.x + 60}
            y={position.y + 10}
            width={60}
            height={40}
            fill="white"
            shadowBlur={2}
        />
        <Rect
            x={position.x + 120}
            y={position.y + 10}
            width={60}
            height={40}
            fill="white"
            shadowBlur={2}
        />
        <Rect
            x={position.x + 180}
            y={position.y + 10}
            width={60}
            height={40}
            fill="white"
            shadowBlur={2}
        />

    </Layer>

}
