import React, { useState} from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';

import facebook from "../img/facebook.svg";
import google from "../img/google.svg";


import {
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Button,
} from "reactstrap";
import { IoCloseSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

import {auth} from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

// <--------------------------------------------Hangling SignIn SignUp--------------------------------------->

const Header = () => {
  const [modal, setModal] = useState(false);
  const [modal2,setModal2] = useState(false);
  const modalToggel = () => {
    setModal(!modal);
  };
  const modalToggel2 = () => {
    setModal2(!modal2);
  };

  const [signedIn,setSignedIn] = useState(false);




// <------------------------------------------------------------SignUp---------------------------------------->

const Modal_main = () => {
  return (
    <Modal
    size="lg"
    isOpen={modal}
    style={{paddingTop:"20%"}}
    className="bd-example-modal-lg">
      <ModalBody className="signup" style={{position:"relative",padding:0}}>
        <button className="closing_primary" type="button" onClick={()=>modalToggel()} style={{position:"absolute",
        top:"-30px",
        right:"0%",
        fontSize:"12px",
        width:"23px",
        height:"23px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        border:"none",
        borderRadius:"50%"}}>X</button>

        <div className="head_signin" style={{width:"100%",
        backgroundColor:"#EFFFF4",
        padding:"10px",
        color:"#008A45"}}><span>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span></div>
        <div className="r1" style={{display:"flex",justifyContent:"space-between",alignItems:"center",
        padding:"10px 20px"}}>
          <h1>Create Acount</h1>
          <span className="signinMessage">Already have an acount? <span style={{color:"blue"}} onClick={()=>{modalToggel();modalToggel2();}}>signIn</span></span>
          <span className="hidden_closer" onClick={()=>modalToggel()}><IoCloseSharp/></span>
        </div>
        <div className="r2" style={{display:"flex",justifyContent:"space-between",padding:"10px 20px"}}>
          <div className="col1">
            <form style={{display:"flex",flexDirection:"column"}}>
              <div className="full_name" style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                <input type="text" placeholder="First Name" style={{width:"50%"}}/>
                <input type="text" placeholder="Last Name" style={{width:"50%"}}/>
              </div>
              <input type="mail" placeholder="email"/>
              <input type="password" placeholder="password"/>
              <input type="password" placeholder="confirm password"></input>
            </form>
            <div className="signup_submit">
              <span className="submit_btn" onClick={()=>{modalToggel();setSignedIn(!signedIn)}}>Create Account</span>
              <span className="secondary_toggle" onClick={()=>{modalToggel(); modalToggel2();}}>or SignIn</span>
            </div>
            <div className="col1_row3">
            <div className="methods">
              <img src={facebook} alt="/"/>
              <span>Sign In Using FaceBook</span>
            </div>
            <div className="methods">
              <img src={google} alt="/"/>
              <span>Sign In Using Google</span>
            </div>
            </div>
          </div>
          <div className="col2" style={{width:"45%"}}>
            <img src="pop_up_img.png" alt="/" style={{width:"100%"}}/>
            <span style={{fontSize:"8px"}}>By signing up, you agree to our Terms & conditions, Privacy policy</span>
          </div>
          <span className="hidden_signup_message">By signing up, you agree to our Terms & conditions, Privacy policy</span>
        </div>
      </ModalBody>
    </Modal>
  );
}

// <------------------------------------------------------------signIn------------------------------------------------>

const Modal_signin = () => {
  return (
    <Modal
    size="lg"
    isOpen={modal2}
    style={{paddingTop:"20%"}}>
      <ModalBody className="signIn" style={{position:"relative",padding:"0"}}>
        <button className="closing_primary" type="button" onClick={()=>modalToggel2()} style={{position:"absolute",
        top:"-30px",
        right:"0%",
        fontSize:"12px",
        width:"23px",
        height:"23px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        border:"none",
        borderRadius:"50%"}}>X</button>

        <div className="head_signin" style={{width:"100%",
        backgroundColor:"#EFFFF4",
        padding:"10px",
        color:"#008A45"}}><span>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span></div>
        <div className="r1" style={{display:"flex",justifyContent:"space-between",alignItems:"center",
        }}>
          <h1>Sign In</h1>
          <span className="signinMessage">Don’t have an account yet?<span style={{color:"blue"}} onClick={()=>{modalToggel();modalToggel2();}}> Create new for free!</span></span>
          <span className="hidden_closer" onClick={()=>modalToggel2()}><IoCloseSharp/></span>
        </div>
        <div className="r2" style={{display:"flex",padding:"10px 20px"}}>
          <div className="col1">
            <form  style={{display:"flex",flexDirection:"column"}}>
              <input type="mail" placeholder="email"/>
              <input type="password" placeholder="password"/>
            </form>
            <div className="signup_submit">
              <div className="submit_btn" onClick={()=>{modalToggel2();setSignedIn(!signedIn)}}>Sign In</div>
              <span className="secondary_toggle" onClick={()=>{modalToggel(); modalToggel2();}}>or Create Acount</span>
            </div>
            <div className="col1_row3">
            <div className="methods">
              <img src={facebook} alt="/"/>
              <span>Sign In Using FaceBook</span>
            </div>
            
            <div className="methods">
              <img src={google} alt="/"/>
              <span>Sign In Using Google</span>
            </div>
            </div>
            <span style={{width:"100%",textAlign:"center"}}>Forgot Password?</span>
          </div>
          <div className="col2" style={{width:"45%"}}>
            <img src="pop_up_img.png" alt="/" style={{width:"100%"}}/>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{padding:"15px"}}>
      <Container className="nav_bar_content">
        <Navbar.Brand><img src="/whole.png" alt="/"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="search">
              <button type="button"><SearchIcon fontSize="16px" color="#7A7A7A"/></button>
              <input placeholder="Search for your favorite groups in ATG"/>
            </div>
            {signedIn === false ? <div
            className="navtxt"
            style={{ cursor: "pointer" }}
            onClick={modalToggel}
            >
            Create account. <span className="bluetxt" onClick={()=>setModal(true)}>It's free!</span>
            </div> : <div className="signedIn" onClick={()=>setSignedIn(!signedIn)}>
              <div className="user_info">
                <img src="/author4.png" alt="/"/>
                <span>Siddharth Goyal</span>
                <MdArrowDropDown/>
              </div>
            </div>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal_main/>
    <Modal_signin/>
    </>
  );
};

export default Header;
