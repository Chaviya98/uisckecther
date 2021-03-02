import React, {useEffect, useState, Tex} from 'react';
import {Circle, Layer, Stage, Text,} from 'react-konva';
import {Button, Card, Col, Form, Image, InputGroup, Row} from "react-bootstrap";
import {FaFileDownload, FaTrash} from 'react-icons/fa';
import phone from "../../assets/images/hpne.png";
import {ElementFactory} from "../../elementFactory/elementFactory";
import {connect} from "react-redux";
import {fetchElements} from "../../actions";
import Pdf from "react-to-pdf";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactStars from "react-rating-stars-component";


function Canvas({fetchElements, element}) {
    // useEffect(()=>{
    //     fetchElements("TEst")
    // },[])
    // console.log(">>>",element)
    const [rating, setRating] = useState(2);
    const [review, setReview] = useState();

    const ratingChanged = (newRating) => {
      setRating(newRating);
    };

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

                    <Button variant="outline-light" style={{borderColor: "#34495e"}} onClick={() => {
                        confirmAlert({
                            customUI: () => {
                                return (
                                    <Pdf targetRef={ref} filename="div-blue.pdf" scale={2} x={50} y={15}>
                                        {({toPdf}) => (
                                            <div className='custom-ui'>
                                                <h3>Please rate you sketch design.</h3>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={40}
                                                    activeColor="#ffd700"
                                                />
                                                <br/>
                                                <Form.Control as="textarea" rows={3} style={{borderRadius: 20, flex: 1}}
                                                              placeholder={"I want a "} value={review}
                                                              onChange={e => setReview(e.target.value)}>
                                                </Form.Control>
                                                <br/>
                                                <button style={{
                                                    borderRadius: 10,
                                                    backgroundColor: "grey",
                                                    color: 'black',
                                                    marginRight: 15
                                                }}>Cancel
                                                </button>
                                                <button style={{
                                                    borderRadius: 10,
                                                    backgroundColor: "orange",
                                                    color: 'black'
                                                }} onClick={()=>{
                                                    toPdf()
                                                }}>
                                                    Download
                                                </button>
                                            </div>
                                        )}
                                    </Pdf>
                                );
                            }
                        });
                    }}>
                        <FaTrash size={20} color={"#34495e"}/>
                        <span style={{color: '#34495e', margin: 8}}>Reset Design</span>
                    </Button>


                </Col>
                <Col>

                    <Button variant="outline-light" style={{borderColor: "#34495e"}}>
                        <FaFileDownload size={20} color={"#34495e"}/>
                        <span style={{color: '#34495e', margin: 8}}>Reset</span>
                    </Button>


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

