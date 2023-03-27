import React from "react";



function Experience(props){
    return(
        <div className="row">
        
        <h2 style={{marginTop: "20px"}}>{props.h}</h2>
        <hr></hr>
            <div className="col-lg-6" style={{border: "2px solid white"}}>
                <video src={props.video} width="100%" height="100%" controls="controls" autoPlay={false}/>
            </div>
            <div className="col-lg-6" style={{margin: "10px 0", padding:"0"}}>
                
                <div style={{margin: "0 20px", fontSize: "1.5em"}}>
                <h3 className="text company">{props.company}</h3><p className="year">{props.year}</p>
                <h4 className="text">{props.skills}</h4>
                <h4 className="text">{props.description}</h4>
                <a className="effect btn btn-lg btn-outline-info" role="button" href={props.btn}  rel="noopener noreferrer" target='_blank'>View Experience letter</a>
                </div>
              
            </div>
            <div style={{width:"15%" ,margin: "80px auto 0", borderBottom: "12px dotted grey", opacity: "0.4"}}></div>
        </div>
    );
}

export default Experience;