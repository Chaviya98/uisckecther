import {Text, Circle, Layer, Rect} from "react-konva";
import React from "react";

export function UICard({element,position,count, title}) {
    const color = 'white';
    const size = { width : 100 , height:50};

    if (title == null){
        title = "Title"
    }
    return   <Layer>
        <Rect
            x={position.x}
            y={position.y+10}
            width={140}
            height={120}
            fill="white"
            shadowBlur={2}
        />
        <Rect
            x={position.x}
            y={position.y+110}
            width={140}
            height={40}
            fill="white"
            shadowBlur={1}
        />
        <Text text={title} fontSize={12}  x={position.x+10} y={position.y+115} />
        <Text text={`Description`} fontSize={12}  x={position.x+10} y={position.y+130} />
    </Layer>





}
