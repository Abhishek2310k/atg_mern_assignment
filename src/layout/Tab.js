import React, { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";

import Groups from "../components/Groups.js";
import Article from "../components/Article/Article.js";

import './Tab.scss';
import { FaCaretDown } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import data from "../data.js";


function Tab () {
  const [modal,setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const [filter, setFilter] = useState("All");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const modalToggel2 = () => {
    setModal2(!modal2);
  };

  const modalToggel = () => {
    setModal(!modal);
  };


  return (
    <Container>
      <div className="topnav">
        <div className="col-1">
          <button type="button" 
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >All Posts(32)</button>
          <button onClick={() => setFilter("Article")}
          type="button" 
          className={filter === "Article" ? "active" : ""}>Article</button>
          <button 
          onClick={() => setFilter("Event")}
          type="button" className={filter === "Event" ? "active" : ""}>Event</button>
          <button 
          onClick={() => setFilter("Education")}
          type="button" className={filter === "Education" ? "active" : ""}>Education</button>
          <button 
          onClick={() => setFilter("Job")}
          type="button" className={filter === "Job" ? "active" : ""}>Job</button>
        </div>
        <div className="col-2">
          <div className="add_post_main">
            <button type="button">Write A Post <FaCaretDown/></button>
          </div>
          <div className="join_group_main">
            <button
              onClick={modalToggel2}
            >
              <span><MdGroupAdd/></span><span>Join Group</span>
            </button>
          </div>
        </div>
        <div className="phone_part">
          <span>Posts(36)</span>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="top_nav_dropdown">
              <DropdownToggle caret style={{color:"black",fontSize:"9px"}} id="tab_dropdown"><span style={{fontSize:"9px",fontWeight:"300"}}>Filter :{filter}</span></DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                <button type="button" 
                  className={filter === "All" ? "active" : ""}
                  onClick={() => setFilter("All")}
                  style={{width:"100%",height:"20px"}}
                  >All Posts(32)</button>
                </DropdownItem>
                <DropdownItem>
                <button onClick={() => setFilter("Article")}
                  type="button" 
                  className={filter === "Article" ? "active" : ""}
                  style={{width:"100%",height:"20px"}}
                  >Article</button>
                </DropdownItem>
                <DropdownItem>
                <button 
                  onClick={() => setFilter("Event")}
                  type="button" className={filter === "Event" ? "active" : ""}
                  style={{width:"100%",height:"20px"}}
                  >Event</button>
                </DropdownItem>
                <DropdownItem>
                <button 
                  onClick={() => setFilter("Education")}
                  type="button" className={filter === "Education" ? "active" : ""}
                  style={{width:"100%",height:"20px"}}
                  >Education</button>
                </DropdownItem>
                <DropdownItem>
                <button 
                  onClick={() => setFilter("Job")}
                  type="button" className={filter === "Job" ? "active" : ""}
                  style={{width:"100%",height:"20px"}}
                  >Job</button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
        </div>
      </div>
      <hr/>

      <Row>
          <Col sm="9" md="8" lg="9">
            {data.map((item,index)=>(item.type === filter || filter === "All" ? <Article 
            key={index} 
            type={item.type}
            heading={item.heading}
            sub_heading={item.sub_heading}
            author_name={item.author_name}
            author_img={item.author_img}
            views={item.views}
            article_img={item.article_img}
            date={item.date}
            location={item.location}
            employer={item.employer}
            link={item.link}
            /> : <></>))}
          </Col>
          <Col sm="3" md="4" lg="3">
            <Groups />
          </Col>
        </Row>
    </Container>
  );
};

export default Tab;