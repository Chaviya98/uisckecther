import React from 'react';
import {Container, Row,Image, Col} from "react-bootstrap";
import userGuide from "../../assets/images/userguide.png";
function UserGuide() {
    return (

        <Container fluid className={'my-auto'}>
            <Row className={"align-items-center row-12"}>
                <Col sm={12} md={6} lg={6}>
                    <div style={{padding:15,marginTop:15}}>
                        <h2 style={{color:"orange"}}>How to use the system</h2>
                        <br/>
                        <br/>
                        <div style={{padding:10}}>
                        <span style={{fontSize:20}}>Step 1 - Speak to the system by pressing 'speak' button
                        or user can type the text in the text area.</span>
                            <br/>
                            <br/>
                            <br/>
                            <span style={{fontSize:20}}>Step 2 - Once the converted information is visible in the text area
                             click the generate button to get the sketch design.</span>

                            <br/>
                            <br/>
                            <br/>
                            <span style={{fontSize:20}}>Step 3 - Once the sketch is visible in the canvas click download and
                                submit the feedback.</span>
                        </div>

                    </div>


                </Col>

                <Col sm={12} md={6} lg={6}>
                    <Image src={userGuide} fluid/>
                </Col>
            </Row>

            <Row className={"align-items-center row-12 justify-content-center"}>
                <span style={{fontSize:15,padding:10,textAlign:"center",color:"gery"}}>© 2020 UI Sketcher. All rights reserved.</span>

            </Row>
        </Container>
    )
}


export default UserGuide;
