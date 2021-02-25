import {Text,Circle,Layer} from "react-konva";
import React from "react";

export function UICheckbox({element,position,count}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    return   <Layer><Circle x={position.x} y={position.y} radius={10} fill={element.color}  draggable={true}/>
    <Text text={`Check Box ${count}`} fontSize={15}  x={position.x+15} y={position.y-5} />
    </Layer>





}
