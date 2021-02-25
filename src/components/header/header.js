import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from './../../assets/images/logoLight.png';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className={"row-12"}>
                <Navbar.Brand href="#home" className={"col-4"}>
                    <img
                        alt=""
                        src={logo}
                        width="140"
                        height="25"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <div className={"col-8 p-0"} style={{textAlign: "end"}}>
                    <text style={{color:"white",marginRight:5,padding:10}}>Instructions</text>
                    <text style={{color:"white",marginRight:10,padding:10}}>About</text>
                </div>
            </Navbar>
        </>
    )}


export default Header;
