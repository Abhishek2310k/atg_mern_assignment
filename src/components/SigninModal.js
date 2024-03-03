import {React,useState} from 'react'

import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Col,
  } from "reactstrap";
  
import facebook from "../img/facebook.svg";
import google from "../img/google.svg";
import illustration from "../img/illustration.svg";

import PropTypes from 'prop-types';
  

const SigninModal = ({modal}) => {

console.log(modal);

const [modal2,setModal2] = useState(modal);

const modalToggel2 = () => {
    setModal2(!modal2);
  };

  return (
    <Modal
        id="myModal"
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable rounded-5 text-center "
        dialogClassName="border-radius-2"
        isOpen={modal2}
        fade={true}
        toggle={modalToggel2}
        // style={{ width: "40rem" }}
        centered={true}
        backdrop={"static"}
        size="lg"
        external={
          <button
            className="close btnclose "
            onClick={modalToggel2}
            style={{ position: "absolute", right: "23%", top: "15%" }}
          >
            X
          </button>
        }
      >
        <ModalHeader
          toggle={modalToggel2}
          style={{
            backgoundColor: "#EFFFF4 !important",
            border: "none",
          }}
        >
          <div className="modalheader">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now{" "}
          </div>
        </ModalHeader>
        <ModalBody className="mb-2">
          <Row>
            <Col className="ps-5 p-4">
              <div className="modalheading" style={{ textAlign: "left" }}>
                Sign In
              </div>

              <Row className="mt-5">
                <Col>
                  <input
                    type="text"
                    className="firstname"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="password "
                    className="firstname eye"
                    placeholder="Password"
                  />
                </Col>
              </Row>

              <Row className="mt-5 mb-5">
                <Button color="primary submitbtn">Sign In </Button>
              </Row>

              <Row>
                <div
                  className="footerbtn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={facebook} alt="facebook" className="me-3" />
                  <span className="footertxt"> Sign in with Facebook</span>
                </div>
              </Row>
              <Row className="mt-4">
                <div
                  className="footerbtn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={google} alt="google" className="me-3" />
                  <span className="footertxt"> Sign in with Google </span>
                </div>
              </Row>

              <Row>
                <div className="forgettxt mt-4">Forgot Password?</div>
              </Row>
            </Col>

            <Col className="pe-5 p-4">
              <Row className="mt-3">
                <div className="illustxt" style={{ textAlign: "right" }}>
                  Don’t have an account yet?
                  <span
                    className="ms-2"
                    style={{
                      color: "#339AF0",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Create new for free!
                  </span>
                </div>
              </Row>
              <Row>
                <img src={illustration} alt="illustration" className="mt-3" />
              </Row>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
  )
}

export default SigninModal;