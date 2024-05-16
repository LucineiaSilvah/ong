import React from "react";
import './Actions.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const SlideImages = [
  {
    url: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Comida Solidaria",
  },
  {
    url: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Basar Social",
  },
  {
    url: "https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Artesanato",
  },
];
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "800px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const spanStyle = {
  fontSize: "20px",
  background: "#ccc",
  color: "black",
 
};
const Actions = () => {
  return (
    
    <div className="slide-container">
      <Fade>
        {SlideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
              <div className="descricao">
                
        <h2>Eventos & Ações</h2>
              <p style={{ spanStyle }}>{image.caption}</p>
              </div>
        
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Actions;
