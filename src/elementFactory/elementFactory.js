import {Text} from "react-konva";
import React, {useEffect, useState} from "react";
import {UIButton} from "./UIButton";
import {UICard} from "./UICard";
import {UITextInput} from "./UITextInput";
import {UIImageView} from "./UIImageView";
import {UITextView} from "./UITextView";
import {UIHeader} from "./UIHeader";
import elementPositionMap from "../assets/data/data.json";
import {UILabel} from "./UILabel";
import {BottomNavBar} from "./BottomNavBar";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export function ElementFactory({element}) {

    const [position, setPosition] = useState({x: 10, y: 5});
    const [elementCount, setElementCount] = useState(0);
    const [elementArray, setElementArray] = useState([]);

    function positionCalculator({elementName, elementSize}) {

        if (!elementName) {
            return 35
        } else {
            if (elementSize === 1) {
                return elementPositionMap.filter(element => element.component == elementName)[0].heightSmall
            } else {
                return elementPositionMap.filter(element => element.component == elementName)[0].heightLarge
            }

        }
    }

    useEffect(() => {
        if (element && element.element && element.element === "null") {
            confirmAlert({
                title: 'Failed !',
                message: element.error,
                buttons: [
                    {
                        label: 'Ok',
                    }
                ]
            });
        } else {
            setElementCount(prevState => prevState + 1);
            setPosition(preState => ({
                ...preState,
                y: preState.y + positionCalculator({elementName: element.element, elementSize: element.size})
            }));
            if (position.y + positionCalculator({
                elementName: element.element,
                elementSize: element.size
            }) < 380 && element.element !== "") {
                elementArray.push(<ElementGenerator element={element} position={position} elementCount={elementCount}/>)
            } else {
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
        }

    }, [element]);

    console.log(elementCount);

    return elementArray.map(
        (item, index) => <>{item}</>
    )

}

export function ElementGenerator({element, position, elementCount}) {
    switch (element.element) {
        case "navbar":
            return <BottomNavBar element={element} position={position}/>;
            break;
        case "button":
            return <UIButton element={element} position={position} title={element.attribute}/>;
            // code block
            break;
        case "card":
            return <UICard element={element} position={position} title={element.attribute}/>;
            break;
        case "image":
            return <UIImageView element={element} position={position}/>;
            break;
        case "input":
            return <UITextInput element={element} position={position} placeholder={element.attribute}/>;
            break;
        case "text":
            return <UITextView element={element} position={position}/>;
            break;
        case "label":
            return <UILabel element={element} position={position} value={element.attribute}/>;
            break;
        case "header":
            return <UIHeader element={element} position={position}/>;
            break;
        default:
            return <Text text={"ERROR"} fontSize={12} x={100} y={100} width={140} height={30}/>
    }
}
