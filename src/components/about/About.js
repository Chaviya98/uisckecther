import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import userGuide from "../../assets/images/userguide.png";

function About() {
    return (
        <Container>
            <Row className={"align-items-top row-12"}>
                <Col sm={12} md={6} lg={6}>
                    <div style={{padding: 15, marginTop: 15}}>
                        <h2 style={{color: "orange", textAlign: "center"}}>System limitations</h2>
                        <br/>

                        <div style={{padding: 10}}>
                            <ul>
                                <li><span style={{fontSize: 20}}>System can only generate one UI element at a given time.</span>
                                </li>
                                <br/>
                                <li><span style={{fontSize: 20}}>System can only detect basic attributes such as title, placeholder etc.</span>
                                </li>
                                <br/>
                                <li><span style={{fontSize: 20}}>System only support a limited number of UI elements such as Button, Label, Card, Image.</span>
                                </li>
                                <br/>
                                <li><span style={{fontSize: 20}}>Editable feature for generated sketch designs are not yet supported.</span>
                                </li>
                                <br/>
                                <li><span
                                    style={{fontSize: 20}}>System only supports one default size screen yet.</span></li>
                                <br/>
                            </ul>

                        </div>

                    </div>


                </Col>

                <Col sm={12} md={6} lg={6}>
                    <div style={{padding: 15, marginTop: 15}}>
                        <h2 style={{color: "orange", textAlign: "center"}}>Contact Us</h2>
                        <br/>

                        <div style={{padding: 10,textAlign: "center"}}>
                            <span style={{fontSize: 20}}>Location : Maradana, Colombo 10</span>
                            <br/>
                            <br/>
                            <span style={{fontSize: 20}}>Tel : 0770519613</span>
                            <br/>
                            <br/>
                            <span style={{fontSize: 20}}>Email : chavividusha@gmail.com</span>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row className={"align-items-center row-12 justify-content-center"}>
                <span style={{fontSize: 15, padding: 10, textAlign: "center", color: "gery"}}>© 2020 UI Sketcher. All rights reserved.</span>

            </Row>
        </Container>
    )
}


export default About;
