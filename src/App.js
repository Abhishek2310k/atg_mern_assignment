import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layout/Header";
import HeroSection from "./components/Hero/HeroSection";
import Tab from "./layout/Tab";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Main_content from "./components/Main_content/Main_content";

function App() {

  const [join_grp,setJoin_grp] = useState(false);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Tab />
      <div className="phone_join_grp">
        <button type="button" onClick={()=>setJoin_grp(!join_grp)}>{join_grp === false ? <span>Join Group</span> : <span> Leave Grpup</span>}</button>
      </div>
      <div className="add_post">
        <button type="button"><MdOutlineModeEditOutline/></button>
      </div>
    </div>
  );
}

export default App;
