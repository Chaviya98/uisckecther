import {Circle, Rect} from "react-konva";
import React, {useEffect, useState} from "react";
import {Navbar} from "./Navbar";
import {UICheckbox} from "./UICheckbox";
import {UIButton} from "./UIButton";
import {UICard} from "./UICard";
import {UITextInput} from "./UITextInput";
import {UIImageView} from "./UIImageView";
import {UITextView} from "./UITextView";
import {UIHeader} from "./UIHeader";
import elementPositionMap from "../assets/data/data.json";
import {UILabel} from "./UILabel";
import {BottomNavBar} from "./BottomNavBar";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export function ElementFactory({element}) {

    const [position,setPosition] = useState({ x: 10,y:5});
    const [elementCount,setElementCount] = useState(0);
    const [elementArray,setElementArray] = useState( []);
    const [maxLimit,setMaxLimit] = useState( false);

    function positionCalculator({elementName,elementSize}){

        if(!elementName){
            return 35
        }
        else {
            if(elementSize === 1) {
                return elementPositionMap.filter(element => element.component == elementName)[0].heightSmall
            } else {
                return elementPositionMap.filter(element => element.component == elementName)[0].heightLarge
            }

        }
    }


    useEffect(()=>{

        setElementCount( prevState => prevState +1);
        setPosition(preState => ({
            ...preState,
            y: preState.y + positionCalculator({elementName:element.element,elementSize:element.size})
        }))
        if(position.y +  positionCalculator({elementName:element.element,elementSize:element.size}) < 380 && element.element !== ""){
            elementArray.push(<ElementGenerator element={element} position={position} elementCount={elementCount}/>)
        }
        else {
            confirmAlert({
                title: 'Failed !',
                message: 'Max Canvas height reached.',
                buttons: [
                    {
                        label: 'Ok',
                    }
                ]
            });
        }
    },[element])

    console.log(elementCount)

    return elementArray.map(
        (item,index) => <>{item}</>
    )

}

export function ElementGenerator({element,position,elementCount}){
    switch(element.element) {
        case "navbar":
            return    <BottomNavBar element={element} position={position} count={elementCount}/>;
        case "button":
            return  <UIButton element={element} position={position} radius={50} fill={element.color} draggable={true} title={element.attribute} />;
            // code block
            break;
        case "card":
            return  <UICard element={element} position={position} count={elementCount} title={element.attribute}/>;
            break;
        case "image":
            return  <UIImageView element={element} position={position} count={elementCount}/>;
            break;
        case "input":
            return  <UITextInput element={element} position={position} count={elementCount} placeholder={element.attribute}/>;
            break;
        case "text":
            return  <UITextView element={element} position={position} count={elementCount}/>;
            break;
        case "label":
            return  <UILabel element={element} position={position} count={elementCount} value={element.attribute}/>;
            break;
        case "header":
            return  <UIHeader element={element} position={position} count={elementCount}/>;
            break;
        default:
            return <Circle x={100} y={100} radius={50} fill="grey" draggable={true} />
    }
}
