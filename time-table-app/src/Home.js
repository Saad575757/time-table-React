import React from 'react';
import './Home.css';
import Sliders from './Sliders';
import Buttons from './Buttons';
import DropdownButton from './DropdownButton';
import Faculty from './Faculty';
import Contact from './login/Contact';




const Home = () => {
    
  return (
    <>
    <div class="header">
        <h3 align="center">TIME TABLE MANAGEMENT SYSTEM, CS&IT (TIEST) DEPARTMENT</h3>
      
    </div>
    <Sliders />
    <Buttons />
    <DropdownButton />
    <Faculty />
    <Contact />
    <div>
      <footer>
      &copy 2023 @TIEST.com | All Rights Reserved |  <a href="http://shimputa.com" target="_blank">Design by : shimputa.com</a>
      </footer>
    </div>
    
  </>
    
  )
}

export default Home;

