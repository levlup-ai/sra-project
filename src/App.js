import background from './background.jpg';
import './App.css';
import Navbar from './components/Navbar';



function App() {
  return (

    <div>
      <Navbar />
      <div style={{ backgroundImage: `url(${background})`, width:'1920px', height:'1080px', backgroundRepeat: 'no-repeat' }} >
        
        <div className="overlay">
          <h1 className="title1">Silicon</h1> 
          <h1 className="title2">Roundabout</h1>
          <h1 className="title3">Academy</h1>

          <h2 className="motto">JOIN THE SILICON ROUNDABOUT REVOLUTION</h2>

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
