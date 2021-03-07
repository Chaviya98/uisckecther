import {Text, Circle, Layer, Rect} from "react-konva";
import React from "react";

export function UIImageView({element,position}) {

    var height = 0;

    if (element && element.element && element.size === 1 ){
        height = 80
    } else {
        height = 100
    }

    return   <Layer>
        <Rect
            x={position.x}
            y={position.y+10}
            width={140}
            height={height}
            fill="white"
            shadowBlur={2}
        />
        <Text text={`Image View`} fontSize={12}  x={position.x+40} y={position.y+60} />
    </Layer>





}
