import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div style={{padding:'0 12px'}}>
      <div >
        <Link style={{fontSize:'large'}} to="counter">Counter</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
