import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./Footer";
import reportWebVitals from './reportWebVitals';
import Experience from './Experience';
import blastoserve from './Blastoserve.mp4'
import letter1 from './Experience_letter.jpg'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
  <div style={{padding: "2% 5%"}}>
    <h2 className="section-heading">Experience</h2>
    <div className="container">
                <Experience h="Software Development Intern"
                video={blastoserve} 
                    company="Bastoserve Scientific"
                    year="(March'22 - May'22)"
                    skills="Django REST Framework • Rest APIs • MongoDB • PostgreSQL • React Redux."
                    description="Developed a hospital management system’s responsive UI to manage and authenticate
                    patient data with extensive functionality and backend to store and edit it through Agile
                    development process and version control."
                   
                    btn={letter1}
                />
              
   </div>
   </div>
  </React.StrictMode>,
  document.getElementById('experience')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('foot')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
