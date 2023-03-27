import React from "react";
import PrgBar from "./ProgressBar";

function Project(props){
    return(
        <div className="row">
        
        <h2  style={{marginTop: "20px"}}>{props.h}</h2>
        <hr></hr>
            <div className="col-lg-6" style={{border: "2px solid white"}}>
                <video src={props.video} width="100%" height="100%" controls="controls" autoPlay={false}/>
            </div>
            <div className="col-lg-6" style={{margin: "10px 0", padding:"0"}}>
                <PrgBar width1={props.w1} lang1={props.l1}
                        width2={props.w2} lang2={props.l2}
                        width3={props.w3} lang3={props.l3}
                />
                <div style={{margin: "0 20px", fontSize: "1.5em"}}>
                <p className="text">{props.p1}</p>
                <p className="text">{props.p2}</p>
                <p className="text">{props.p3}</p>
                <a className="effect btn btn-lg btn-outline-info" role="button" href={props.btn}  rel="noopener noreferrer" target="_blank">View Project</a>
                </div>
              
            </div>
            <div  style={{width:"15%" ,margin: "80px auto 0", borderBottom: "12px dotted grey", opacity: "0.4"}}></div>
        </div>
    );
}

export default Project;
