import React from 'react'
import "./Homepage.css";
import Timeline from './components/Timeline';
import Nav from './components/Nav';
function Homepage() {
  return (
    <div className="homepage">
    <div className="homepage_nav"> <Nav/> </div> 
    <div className="homepage_timeline"><Timeline/></div>
    
    </div>
    );
}

export default Homepage
