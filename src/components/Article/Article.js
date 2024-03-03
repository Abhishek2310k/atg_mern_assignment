import React, { useState } from "react";
import "./Article.scss";
import {
  Card,
  Container,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";
import { RiCalendarEventFill } from "react-icons/ri";
import { TbBriefcase2 } from "react-icons/tb";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

import share from "../../img/share.svg";
import { HiDotsHorizontal } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";


const Symbol = ({type}) => {
  if (type === "Article") return (<span>✍️</span>);
  else if (type === "Education") return (<span>🔬️</span>);
  else if (type === "Meetup") return (<span>🗓️</span>);
  else if (type === "Job") return (<span>💼️</span>);
  else return <></>;
}

const Article = ({
  article_img,
  type,
  heading,
  sub_heading,
  author_name,
  author_img,
  views,
  date,
  location,
  employer,
  link
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Card className="articlecard mt-5">
      {article_img !== "" && <CardImg top className="img" height="220" src={article_img} />}
      <CardBody className="text-left mt-2 ms-4">
        <CardText className="title" style={{display:"flex",gap:"5px",alignItems:"center"}}><Symbol type={type}/>{type}</CardText>
        <Row style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="rowx">
          <Col xs="11" style={{ display: "flex", alignItems: "center" ,padding:"0",width:"85%"}}>
            <CardTitle id="article_title" className="cardtitle">{heading}</CardTitle>
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret style={{backgroundImage: 'none'}}><HiDotsHorizontal fontSize="14px"/></DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Report</DropdownItem>
                <DropdownItem>Option3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>

        <CardText className="secondary">{sub_heading}</CardText>
        <div className="tags">
          {date === "" ? <></> : <div className="tag">
          <span><RiCalendarEventFill/></span>
          <span>{date}</span>
          </div>}
          {location === "" ? <></> : <div className="tag">
          <span><CiLocationOn/></span>
          <span>{location}</span>
          </div>}
          {employer === "" ? <></> : <div className="tag">
          <span><TbBriefcase2/></span>
          <span>{employer}</span>
          </div>}
        </div>

        {link === "" ? <></> : <button type="button" className="main_btn">{type === "Job" ? <span className="job">Apply on Timesjobs</span> : <span className="website">Visit Website</span>}</button>}

        <CardFooter className="cardfooter mt-5 mb-3 ">
          <Row>
            <Col
              xs="9"
              sm="8"
              md="6"
              lg="9"
              className="col-xs-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img height="48" width="48" className=" profile" src={author_img}/>
              <span className="name">{author_name}</span>
            </Col>
            <Col
              xs="3"
              sm="4"
              md="6"
              lg="3"
              className="col-xs-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {views === "" ? <></> : <span className="views">{views} views</span>}

                <img
                  src={share}
                  className="share"
                  alt="cardmenu"
                  style={{ marginLeft: "5rem" }}
                />
              </div>
            </Col>
          </Row>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default Article;
