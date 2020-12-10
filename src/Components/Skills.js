import React from 'react'


 function Skills() {


    return (
        <div className="jumbotron mt-4 " style={ { backgroundColor:'#d0e8f2' }}>
        <span className="h2  font-weight-light ">Skills </span>
        
        <p className="lead ml-4 mt-2">I like to keep it simple.I love to convey your message that you want to send through your website </p>
        
        <div className="w-50 ">
        
        <div className="progress mb-2 "> 
        <span className="progress-bar text-left pl-1"   role="progressbar" style={{width : "85%"} } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML 85%</span> 
        </div>
        <div className="progress mb-2">
        <span className="progress-bar text-left pl-1 " role="progressbar" style={{width : "80%"} } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS 80%</span>
        </div>
        <div className="progress mb-2">
        <span className="progress-bar text-left pl-1 " role="progressbar" style={{width : "70%"} } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT 70%</span>
        </div>
        <div className="progress mb-2">
        <span className="progress-bar text-left pl-1 " role="progressbar" style={{width : "75%"} } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP 75%</span>
        </div>
        <div className="progress mb-2">
        <span className="progress-bar text-left pl-1 " role="progressbar" style={{width : "73%"} } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">JQUERY 73%</span>
        </div>
        <div className="progress mb-2">
        <span className="progress-bar text-left pl-1 " role="progressbar" style={{width : "65%"} } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">REACT 65%</span>
        </div>
        
        </div>



            
        </div>
    )
}


export default Skills;


