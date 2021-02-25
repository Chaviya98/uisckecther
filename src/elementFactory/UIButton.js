import {Text,Circle,Layer, Rect} from "react-konva";
import React from "react";

export function UIButton({element,position,count,title}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    if (title == null){
        title = "Title"
    }
    return   <Layer>
        <Rect
            x={position.x}
            y={position.y+10}
            width={140}
            height={30}
            fill="white"
            shadowBlur={2}
        />
        <Text text={title} fontSize={12}  x={position.x+55} y={position.y+20} />
    </Layer>





}
