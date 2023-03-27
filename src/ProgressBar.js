import React from "react";

 function ProgressBar(props){

function dot2Style(props){
if(props.width2 > 0){
 return ({color:"#563d7c"});
} else{
  return ({color:"black"});
}
}

function dot3Style(){
  if(props.width3 > 0){
   return ({color:"#f1e05a"});
  } else{
    return ({color:"black"});
  }
  }

return(
<div className="BorderGrid-row">
<div className="BorderGrid-cell" style={{padding: "17px",margin:"50px", border:"none"}}>
  <h4 className="text-light" style={{textAlign:"left", color:"#EAEAEA"}}>Languages</h4>
<div className="mb-2">
<span data-view-component="true" className="Progress">
<span style={{backgroundColor:"#e34c26",width:(props.width1)}} itemProp="keywords" data-view-component="true" className="Progress-item"></span>
<span style={{backgroundColor:"#563d7c",width:(props.width2)}} itemProp="keywords" data-view-component="true" className="Progress-item"></span>
<span style={{backgroundColor:"#f1e05a",width:(props.width3)}} itemProp="keywords" data-view-component="true" className="Progress-item"></span>
</span></div>
<ul className="list-style-none">
<li className="d-inline-flex">

<a className="d-inline-flex flex-items-center flex-nowrap no-underline text-medium mr-3">
<svg id="dot1" style={{color: "#e34c26"}} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-dot-fill mr-2">
<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
</svg>
<span className="text mr-1">{props.lang1}</span>
<span className="text mr-1">{props.width1}</span>
</a>
</li>
<li className="d-inline">
<a className="d-inline-flex flex-items-center flex-nowrap no-underline text-medium mr-3" href="/aditi567/Resume/search?l=css"  data-ga-click="Repository, language stats search click, location:repo overview">
<svg id="dot2" style={dot2Style(props)} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-dot-fill mr-2">
<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
</svg>
<span className="text mr-1">{props.lang2}</span>
<span className="text mr-1">{props.width2}</span>
</a>
</li>
<li className="d-inline">
<a className="d-inline-flex flex-items-center flex-nowrap no-underline text-medium mr-3" href="/aditi567/Resume/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
<svg id="dot3" style={dot3Style(props)} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-dot-fill mr-2">
<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
</svg>
<span className="text mr-1">{props.lang3}</span>
<span className="text mr-1">{props.width3}</span>
</a>
</li>
</ul>

</div>
</div> ); }



 export default ProgressBar;