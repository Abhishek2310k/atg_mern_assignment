import React from 'react';

import {
    Container,
    Row,
    Col,
  } from "reactstrap";
  import Groups from "../Groups";

import article2 from "../../img/article2.png";
import user2 from "../../img/user2.jpg";
import Article from "../Article/Article.js";
import data from "../../data.js"

function Main_content ()  {
  return (
    <Container className="mb-5">
        <Row>
          <Col sm="9" md="8" lg="9">
            {data.map((item,index)=>(<Article 
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
            />))}
          </Col>
          <Col sm="3" md="4" lg="3">
            <Groups />
          </Col>
        </Row>
      </Container>
  )
}

export default Main_content;