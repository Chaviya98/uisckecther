import React from 'react';
import {Container, Row,Image, Col} from "react-bootstrap";
import InputForm from "../inputForm/inputForm";
import Canvas from "../canvas/canvas";
import phone from "../../assets/images/hpne.png";
import {Stage} from "react-konva";

function Body() {
    return (

        <Container fluid className={'my-auto'}>
            <Row className={"align-items-center"}>
                <Col><InputForm/></Col>
                {/*<span className="vl p-4  m-4 "></span>*/}
                <Col><Canvas/></Col>
            </Row>
        </Container>
    )
}


export default Body;
