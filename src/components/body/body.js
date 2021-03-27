import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import InputForm from "../inputForm/inputForm";
import Canvas from "../canvas/canvas";

function Body() {
    return (

        <Container fluid className={'my-auto'}>
            <Row className={"align-items-center"}>
                <Col><InputForm/></Col>
                {/*<span className="vl p-4  m-4 "></span>*/}
                <Col><Canvas/></Col>
            </Row>

            <Row className={"align-items-center row-12 justify-content-center"}>
                <span style={{fontSize: 15, padding: 10, textAlign: "center", color: "gery"}}>© 2020 UI Sketcher. All rights reserved.</span>

            </Row>
        </Container>
    )
}


export default Body;
