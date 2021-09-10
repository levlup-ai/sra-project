import background from './background.jpg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/about';


function App() {
  return (

    
    <div>

      {/* Setup links for the Navbar*/}
      {/* Add extra route tags to create more links to Courses page and Contact Us page */}

      <Router>
        <Navbar />
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
      </Router>

      {/*Apply Background Image to the base div*/}
      <div style={{ backgroundImage: `url(${background})`, width:'1920px', height:'1080px', backgroundRepeat: 'no-repeat' }} >
        
        {/*Create Overlay Div and content, styled to provide a darker overlay on the background image*/}
        <div className="overlay">
          <h1 className="title1">Silicon</h1> 
          <h1 className="title2">Roundabout</h1>
          <h1 className="title3">Academy</h1>

          {/*Signup Page Section*/}
          <h2 className="motto">JOIN THE SILICON ROUNDABOUT REVOLUTION</h2>

          <form className="sign-upForm">
            <div className ="email">
              <label htmlFor="email" className="emailLabel">Email Address</label> 
              <input type="email" className="form-control" name="email" />
            </div>

            <div className="pass">
              <label htmlFor="password" className="passLabel">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>

          {/* Company Introduction */}
          <div className="introDiv">
          <p className="intro">Throwback to 2011, Silicon Roundabout organised our first London meet up, we may be biased but, we thought it was pretty special, and it turns out the demand for a community of like-minded individuals on a mission was huge – we were on to a winner!<br/><br/>
          Since then, we have expanded our brand into SRA (Silicon Roundabout Academy) – an online platform where we provide courses with a kick, you have a strictly snore-free studying zone. Our mission is to upskill every go-getter with first-class knowledge they need to hit the ground running in marketing, events, sales/business development, administration, graphic design, videography and programming.</p>
          </div>
        
        </div>
    
      </div>

    </div>

  );

}

export default App;
