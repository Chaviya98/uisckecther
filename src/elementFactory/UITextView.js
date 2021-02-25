import {Text, Layer} from "react-konva";
import React from "react";

export function UITextView({element,position}) {
    const color = 'white';
    const size = { width : 100 , height:50}

    return <Layer><Text 
    text="Sample text veiw" fontSize={15} 
    x={position.x}
    y={position.y}
    fill={element.color}
    /></Layer>
}
