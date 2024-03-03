import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import cross from "../img/cross.svg";
import info from "../img/info.svg";
import like from "../img/like.svg";
import user2 from "../img/user2.jpg";
import follow1 from "../img/follow1.png";
import follow2 from "../img/follow2.png";
import follow3 from "../img/follow3.png";
import follow4 from "../img/follow4.png";
import GroupItems from "./GroupItems";

const Groups = () => {
  const [joinGroup, setJoinGroup] = useState(false);

  const groupToggel = () => {
    setJoinGroup(!joinGroup);
  };
  return (
    <Container fluid className="mt-5">
      <div>
        <input
          type="text"
          name="search"
          id="search"
          className="searchgrp locationicn crossicn"
          placeholder="Enter your location"
          onFocus={groupToggel}
          onfocusout={"groupToggel()"}
        ></input>
      </div>

      <div className="ms-3 mt-5">
        <Row>
          <Col xs="1">
            <img src={info} alt="" style={{ opacity: "0.5" }} />
          </Col>
          <Col>
            <span className="searchinfo" style={{ opacity: "0.5" }}>
              Your location will help us serve better and extend a personalised
              experience
            </span>
          </Col>
        </Row>
      </div>

      <div style={{ marginTop: "5rem" }} className="mt-5*2 ms-3">
        <Row className="mt-5">
          <Col xs="1">
            <img src={like} alt="like" />
          </Col>
          <Col className="ms-3">
            <h1 className="grouprecom">Recommended Groups</h1>
          </Col>
        </Row>
      </div>

      {joinGroup ? (
        <>
          <GroupItems followimg={follow1} followname="Liesure" />
          <GroupItems followimg={follow2} followname="activism" />
          <GroupItems followimg={follow3} followname="MBA" />
          <GroupItems followimg={follow4} followname="philosophy" />
          <div className="seemore mt-5">See more...</div>{" "}
        </>
      ) : null}
    </Container>
  );
};

export default Groups;
