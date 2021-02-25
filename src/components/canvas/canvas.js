import React, {useEffect} from 'react';
import {Circle, Layer, Stage, Text,} from 'react-konva';
import {Button, Col, Image, Row} from "react-bootstrap";
import {FaFileDownload, FaTrash} from 'react-icons/fa';
import phone from "../../assets/images/hpne.png";
import {ElementFactory} from "../../elementFactory/elementFactory";
import {connect} from "react-redux";
import {fetchElements} from "../../actions";
import Pdf from "react-to-pdf";


function Canvas({fetchElements, element}) {
    // useEffect(()=>{
    //     fetchElements("TEst")
    // },[])
    // console.log(">>>",element)

    useEffect(() => {
        if (element && element.element && element.element === "null") {
              alert(element.error);
        }
    }, [element]);

    const ref = React.createRef();
    return (
        <div className={"canvas"}>
            <div ref={ref}>
                <Image src={phone} fluid style={{position: "absolute"}} width={200} height={400}/>
                <Stage width={200} height={400} style={{padding: 20}}>

                    {/*<Text text="Some text on canvas" fontSize={15} />*/}
                    {element && element.element !== "null" &&
                    <ElementFactory element={element}/>
                    }

                </Stage>
            </div>
            <br/>
            <Row className={"text-center"}>
                <Col>
                    <Pdf targetRef={ref} filename="div-blue.pdf" scale={2} x={50} y={20}>
                        {({toPdf}) => (
                            <Button variant="outline-light" style={{borderColor: "#34495e"}}>
                                <FaFileDownload size={30} color={"#34495e"}/>
                                <span style={{color: '#34495e', margin: 8}} onClick={toPdf}>Download Design</span>
                            </Button>
                        )}
                    </Pdf>

                </Col>
                <Col>
                    <Pdf targetRef={ref} filename="div-blue.pdf" scale={2} x={50} y={20}>
                        {({toPdf}) => (
                            <Button variant="outline-light" style={{borderColor: "#34495e"}}>
                                <FaTrash size={30} color={"#34495e"}/>
                                <span style={{color: '#34495e', margin: 8}} onClick={toPdf}>Reset Design</span>
                            </Button>
                        )}
                    </Pdf>

                </Col>
            </Row>
        </div>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        // explicitly forwarding arguments
        fetchElements: user => dispatch(fetchElements(user)),
    }
}

const mapStateToProps = state => {
    const {loginReducer} = state;
    const {element, isLoading, error} = loginReducer;
    return {
        element,
        error,
        isLoading
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Canvas);

