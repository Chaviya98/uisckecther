import {Text, Circle, Layer, Rect} from "react-konva";
import React from "react";

export function UIImageView({element,position,count}) {
    const color = 'white';
    const size = { width : 100 , height:50};

    return   <Layer>
        <Rect
            x={position.x}
            y={position.y+10}
            width={140}
            height={100}
            fill="white"
            shadowBlur={2}
        />
        <Text text={`Image View`} fontSize={12}  x={position.x+40} y={position.y+60} />
    </Layer>





}
