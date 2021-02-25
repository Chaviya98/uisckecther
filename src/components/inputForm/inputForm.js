import React, {useState, useEffect} from 'react';
import {Button, Card, Form, InputGroup} from "react-bootstrap";
import {FaMicrophone, FaStop, FaResolving} from 'react-icons/fa';
import {SiMicrogenetics, SiHighly, SiFlickr} from 'react-icons/si';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import {fetchElements} from "../../actions";
import {connect} from "react-redux";


function InputForm({dispatch, fetchElements, isLoading}) {
    const {transcript, resetTranscript} = useSpeechRecognition();
    const [input, setInput] = useState();


    useEffect(() => {
        setInput(transcript)
    }, [transcript])

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <>
            {isLoading ?
                <div>Loading ...</div> :
                <>
                    <Card className={"text-center"} style={{borderRadius: 60}}>
                        <Card.Body>
                            <Form>
                                <InputGroup className="mb-3" style={{borderRadius: 60}}>
                                    <Form.Control as="textarea" rows={3} style={{borderRadius: 20, margin: 10, flex: 1}}
                                                  placeholder={"I want a "} value={input}
                                                  onChange={e => setInput(e.target.value)}>
                                    </Form.Control>
                                    <InputGroup.Append>
                                        <Button onClick={SpeechRecognition.startListening} variant="light"
                                                style={{borderRadius: 20, margin: 10}}><FaMicrophone color={'red'}
                                                                                                     size={35}/>
                                            <div>Record</div>
                                        </Button>
                                        <Button onClick={SpeechRecognition.stopListening} variant="light"
                                                style={{borderRadius: 20, margin: 10}}><FaStop color={'grey'}
                                                                                               size={35}/>
                                            <div>Stop</div>
                                        </Button>
                                        <Button onClick={resetTranscript} variant="light"
                                                style={{borderRadius: 20, margin: 10}}><FaResolving color={'green'}
                                                                                                    size={35}/>
                                            <div>Reset</div>
                                        </Button>

                                    </InputGroup.Append>
                                </InputGroup>
                                <Button variant="success"  style={{borderRadius: 50}}
                                        onClick={() => fetchElements(input)}>
                                    <SiMicrogenetics color={'white'} size={35} style={{marginLeft: 5, marginRight: 8}}/>
                                    Generate
                                </Button>
                            </Form>

                        </Card.Body>
                    </Card>
                </>
            }
        </>
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
    const {user, isLoading, error} = loginReducer;
    return {
        userInfo: user,
        error,
        isLoading
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
