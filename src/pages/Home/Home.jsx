import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Home.css';

import Banner from '../../components/Banner';

import WhatWeDo from '../../components/What-we-do';
import Actions from '../../components/Actions';
import Voluntarios from '../../components/Volunteers';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';




function Home() {
 
  return (
   
    <div className='home'>
    
      <Parallax pages={6} style={{background: "url('https://images.unsplash.com/photo-1494386346843-e12284507169?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')no-repeat center / cover"}}>

        <ParallaxLayer offset={0}  style={{background:"url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')no-repeat center / cover"}}
        >
       
        <Banner/>
        </ParallaxLayer>

        <ParallaxLayer  offset={1} className='center' id='oquefazemos' >
        <WhatWeDo />
        </ParallaxLayer>

        <ParallaxLayer offset={2}  >
        <Actions/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} >
        <Voluntarios/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} >
          
        </ParallaxLayer>
        <ParallaxLayer offset={4} >
         
     
        </ParallaxLayer>
        <ParallaxLayer offset={4} >
   
      
        </ParallaxLayer>
        <ParallaxLayer className='bottom' offset={5} >
        
      
        <Contact />  
        <Footer/>
        </ParallaxLayer>
        
       
      </Parallax>
    </div>
  );
}

export default Home;
