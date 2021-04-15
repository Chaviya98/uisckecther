import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import InputForm from "../inputForm/inputForm";
import Canvas from "../canvas/canvas";
import ChatBot from "../inputForm/chat";

function Body() {
    return (

        <Container fluid className={'my-auto'}>
            <Row className={"align-items-center"}>
                {/*if api key is not working then below line should be commeneted*/}
                <ChatBot></ChatBot>
                <Col><InputForm/></Col>
                {/*<span className="vl p-4  m-4 "></span>*/}
                <Col><Canvas/></Col>
            </Row>

            <Row className={"align-items-center row-12 justify-content-center"}>
                <span style={{fontSize: 15, padding: 10, textAlign: "center", color: "gery"}}>© 2021 UI Sketcher. All rights reserved.</span>

            </Row>
        </Container>
    )
}


export default Body;
