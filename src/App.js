

import './index.css'
import React from "react";
import Project from "./Project"
import Video1 from "./Video1.mp4";
import Video2 from "./Video2.mp4";
;

function App() {
  return (
   
    <div style={{padding: "2% 5%"}}>
            <h2 className="section-heading">Projects</h2>
            
            <div className="container">
           
                <Project h="Advance Image Cropping "
                video={Video1} w1="100%" l1="Python"
                    p1="Patent filed ✅"
                    p2="A Desktop Application which can not only crop out margins but also end to end middle portion of a image."
                    p3="Libraries used: PIL, tkinter"
                    btn="https://github.com/aditi567/Advance-Image_cropping.git"
                />
             
                <hr></hr>
                
                 <Project h="PTG-Forum"
                 video={Video2} w1="52.2%" w2="39.2%" w3="8.6%" l1="EJS" l2="Javascript" l3="CSS"
                    p1="MongoDB Database"
                    p2="A Chat Webapp that authorizes users and allows them to message anonymously."
                    p3="Libraries used: Mongoose, Express, Passport"
                    btn="https://ptg-forum.herokuapp.com/"
                />
            </div>
           
        </div>
       
  );
}

export default App;
