import React from 'react';
import './about.css';
import teamimg from'./team-img.jpg';


  
const About = () => {
  return (
    <div className="About"> 
    
      <h1 className='title'>About Us</h1>

      <h2 className='headline'>Training the next generation of dreamers, thinkers, engineers and business developers to discover and nurture their unique talents</h2>

      <p className='info'>Silicon Roundabout Academy focuses training on the areas relevant to startup teams, driven by our decade-long experience
       working with innovative companies in tech and related fields. Silicon Roundabout is an official partner to the UK Government
        ─currently training diverse cohorts of startup enthusiasts between the age of 18-24 who seek to start a career at startups and
         innovative SMEs.</p><br/>

      <p className='info2'>Training, mentoring, events – we’ve barely scratched the surface. We will not rest until every person regardless
       of age, background or education is given the opportunity to be part of something amazing, and simply do what they love.</p>

      <img src={teamimg} alt="Team Image" className="teamImage"/>

      <button type="submit" className="abtBtn">
        Apply Now
      </button>

    </div>
  );
};
  
export default About;