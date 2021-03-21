import React, {useEffect, useState} from 'react';
import {Stage} from 'react-konva';
import {Button, Col, Image, Row} from "react-bootstrap";
import {FaFileDownload, FaTrash, FaComment, FaStickyNote} from 'react-icons/fa';
import phone from "../../assets/images/hpne.png";
import {ElementFactory} from "../../elementFactory/elementFactory";
import {connect} from "react-redux";
import {fetchElements} from "../../actions";
import Pdf from "react-to-pdf";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactStars from "react-rating-stars-component";
import {saveReviews} from "../../actions/DataStoreManager";
import ReactSnackBar from "react-js-snackbar";

function Canvas({fetchElements, element}) {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [note, setNote] = useState("");
    const [toastMsg, setToastMsg] = useState("");
    const [toastForReview, setToastForReview] = useState(false);
    const [toastForNote, setToastForNote] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastShowing, setToastShowing] = useState(false);

    var uniqid = require('uniqid');

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([note], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    useEffect(() => {
        if (toastForReview) {
            if (rating !== 0) {
                setToastMsg("User review saved. Thank you !")
            } else {
                setToastMsg("Failed attempt ! Please add a rating")
            }
        }
        if (toastForNote) {
            if (!!note) {
                setToastMsg("User note saved. Thank you !")
            } else {
                setToastMsg("Failed attempt ! Please add a note")
            }
        }
    }, [note, rating, toastForReview, toastForNote]);

    const toast = () => {

        if (toastShowing) return;
        setShowToast(true);
        setToastShowing(true);
        setTimeout(() => {
            setShowToast(false);
            setToastShowing(false)
        }, 2000);
    };


    const ref = React.createRef();
    return (

        <div className={"canvas"}>
            <Row>

                <Col>
                    <div ref={ref}>
                        <Image src={phone} fluid style={{position: "absolute"}} width={200} height={400}/>
                        <Stage width={200} height={400} style={{padding: 20}}>

                            {element &&
                            <ElementFactory element={element}/>
                            }

                        </Stage>
                    </div>
                </Col>
                <br/>
                <Col className={"text-center"}>
                    <Row className={"justify-content-center"}>

                        <span style={{textAlign: "center", marginBottom: 20}}>Please use the button below  to download the generated sketch UI design as a PDF.</span>
                        <Pdf targetRef={ref} filename="div-blue.pdf" scale={2} x={50} y={20}>
                            {({toPdf}) => (
                                <Button variant="outline-light"
                                        style={{borderColor: "#EC7A23", width: 130, marginBottom: 20}}
                                        onClick={() => {
                                            if (rating !== 0) {
                                                saveReviews({
                                                    collectionName: "UISketcherUserReviews",
                                                    documentID: uniqid(),
                                                    ratingValue: !!rating ? rating : 0,
                                                    userComment: !!comment ? comment : ""
                                                });
                                            }

                                            toPdf();
                                            if (!!note) {
                                                downloadTxtFile();
                                            }
                                            setRating(0);
                                            setComment("");
                                        }}>
                                    <FaFileDownload size={15} color={"#EC7A23"}/>
                                    <span style={{color: '#34495e', margin: 5}}>Download</span>
                                </Button>
                            )}
                        </Pdf>

                    </Row>
                    <Row className={"justify-content-center"}>
                        <span style={{textAlign: "center", marginBottom: 20}}>Please use the button below to add a review and a rating to the generated sketch UI design.</span>
                        <Button variant="outline-light" style={{borderColor: "#EC7A23", width: 130, marginBottom: 20}}
                                onClick={() => {
                                    confirmAlert({
                                        customUI: ({onClose}) => {
                                            return (
                                                <div className='custom-ui'>
                                                    <h3>Please rate you sketch design.</h3>
                                                    <ReactStars
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={40}
                                                        activeColor="#EC7A23"
                                                    />
                                                    <br/>
                                                    <textarea
                                                        rows={4}
                                                        style={{
                                                            borderRadius: 20,
                                                            flex: 1,
                                                            width: "100%",
                                                            paddingTop: 10,
                                                            paddingLeft: 10
                                                        }}
                                                        placeholder={"add a comment"}
                                                        onChange={event => setComment(event.target.value)}
                                                    />
                                                    <br/>
                                                    <br/>
                                                    <button style={{
                                                        borderRadius: 10,
                                                        padding: 5,
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        backgroundColor: "#282F33",
                                                        color: 'white',
                                                        marginRight: 15
                                                    }} onClick={() => {
                                                        setComment("");
                                                        onClose()
                                                    }}>Cancel
                                                    </button>
                                                    <button style={{
                                                        borderRadius: 10,
                                                        padding: 5,
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        borderColor: "white",
                                                        backgroundColor: "#EC7A23",
                                                        color: 'white'
                                                    }} onClick={() => {
                                                        setToastForReview(true);
                                                        setToastForNote(false);
                                                        onClose();
                                                        toast();
                                                    }}>
                                                        Submit
                                                    </button>
                                                </div>
                                            );
                                        }, onClickOutside: () => {
                                            setComment("")
                                        }
                                    });
                                }}>
                            <FaComment size={15} color={"#EC7A23"}/>
                            <span style={{color: '#34495e', margin: 5}}>Review</span>
                        </Button>


                    </Row>
                    <Row className={"justify-content-center"}>
                        <span style={{textAlign: "center", marginBottom: 20}}>Please use the button below to add a custom note to your generated sketch UI design.</span>
                        <Button variant="outline-light" style={{borderColor: "#EC7A23", width: 130, marginBottom: 20}}
                                onClick={() => {
                                    confirmAlert({
                                        customUI: ({onClose}) => {
                                            return (
                                                <div className='custom-ui'>
                                                    <h3>Please add a custom note to your generated design.</h3>
                                                    <br/>
                                                    <textarea
                                                        rows={4}
                                                        style={{
                                                            borderRadius: 20,
                                                            flex: 1,
                                                            width: "100%",
                                                            paddingTop: 10,
                                                            paddingLeft: 10
                                                        }}
                                                        placeholder={"add a note"}
                                                        onChange={event => setNote(event.target.value)}
                                                    />
                                                    <br/>
                                                    <br/>
                                                    <button style={{
                                                        borderRadius: 10,
                                                        padding: 5,
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        backgroundColor: "#282F33",
                                                        color: 'white',
                                                        marginRight: 15
                                                    }} onClick={() => {
                                                        setNote("");
                                                        onClose()
                                                    }}>Cancel
                                                    </button>
                                                    <button style={{
                                                        borderRadius: 10,
                                                        padding: 5,
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        borderColor: "white",
                                                        backgroundColor: "#EC7A23",
                                                        color: 'white'
                                                    }} onClick={() => {
                                                        setToastForReview(false);
                                                        setToastForNote(true);
                                                        onClose();
                                                        toast();
                                                    }}>
                                                        Submit
                                                    </button>
                                                </div>
                                            );
                                        }, onClickOutside: () => {
                                            setNote("")
                                        }
                                    });
                                }}>
                            <FaStickyNote size={15} color={"#EC7A23"}/>
                            <span style={{color: '#34495e', margin: 5}}>Note</span>
                        </Button>


                    </Row>
                    <Row className={"justify-content-center"}>
                        <span style={{textAlign: "center", marginBottom: 20}}>Please use the button below to clear the canvas.</span>
                        <Button variant="outline-light" style={{borderColor: "#EC7A23", width: 130}}
                                onClick={() => refreshPage()}>
                            <FaTrash size={15} color={"#EC7A23"}/>
                            <span style={{color: '#34495e', margin: 5}}>Reset</span>
                        </Button>


                    </Row>
                </Col>
            </Row>
            <ReactSnackBar Show={showToast} Icon={<FaComment size={20} color={"#EC7A23"}/>}>
                {toastMsg}
            </ReactSnackBar>
        </div>

    )

}

function refreshPage() {
    window.location.reload(false);
}


const mapDispatchToProps = dispatch => {
    return {
        // explicitly forwarding arguments
        fetchElements: user => dispatch(fetchElements(user)),
    }
};

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

