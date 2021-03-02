import React, {useState} from 'react';
import {Navbar} from "react-bootstrap";
import logo from './../../assets/images/logoLight.png';

function Header(props) {
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    function handleChange(page) {
        props.setPage(page);
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" className={"row-12"}>
                <Navbar.Brand onClick={() => {
                    handleChange(1);
                    setPage2(false);
                    setPage3(false);
                }} className={"col-4"}>
                    <img
                        alt=""
                        src={logo}
                        width="140"
                        height="25"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <div className={"col-8 p-0"} style={{textAlign: "end"}}>
                    <text style={{color:page2 ? "orange": "white",marginRight:5,padding:10}}
                          onClick={() => {
                              handleChange(2);
                              setPage2(true);
                              setPage3(false);
                          }}>Instructions</text>
                    <text style={{color:page3 ? "orange": "white",marginRight:10,padding:10}}
                          onClick={() => {
                              handleChange(3);
                              setPage2(false);
                              setPage3(true);
                          }}>About</text>
                </div>
            </Navbar>
        </>
    )}


export default Header;
