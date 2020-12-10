import React from 'react'
import './skills.css'

function Projects() {
    return (
        <div className="jumbotron mt-4 " style={ { backgroundColor:'#d0e8f2' }}>

        
<span className="h2  font-weight-light mt-2">Projects </span>

<p className="lead ml-4 mt-2">Created Various Projects using HTML , CSS , JAVASCRIPT , BOOTSTRAP some of them are listed below</p>



<div className="d-flex p-2 bd-highlight">
<div className="d-flex flex-row flex-wrap bd-highlight mb-3">
<div className="p-2 bd-highlight">
<div className="card"  style={{width : "18rem"} }>
    <img src="/images/weather.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Weather Web App</h5>
        <p className="card-text">
        <ul className="text-justify">
            <li>This application gets weather data from the API</li>
    
        </ul></p>
        <a href="https://github.com/sapthagiri-web-dev/Weather-Update-Project" className="btn btn-primary btn-block">GitHub Link</a>
    </div>
</div>

</div>
<div className="p-2 bd-highlight">
<div className="card"  style={{width : "18rem"} }>
    <img src="/images/random_name.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Random Names App</h5>
        <p className="card-text">
        <ul className="text-justify">
            <li> Simple app which  return random names by from API</li>
         
        </ul></p>
        <a href="https://github.com/sapthagiri-web-dev/Random_API_Names" className="btn btn-primary btn-block">GitHub Link</a>
    </div>
</div>
</div>


<div className="p-2 bd-highlight">
<div className="card"  style={{width : "18rem"} }>
    <img src="/images/currency.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Currency converter App</h5>
        <p className="card-text">
        <ul className="text-justify">
            <li>Currency converter app comapring with 2 countries</li>
      
       
        </ul></p>
        <a href="https://github.com/sapthagiri-web-dev/Currency-converter" className="btn btn-primary btn-block">GitHub Link</a>
    </div>
</div>
</div>

<div className="p-2 bd-highlight">
<div className="card"  style={{width : "18rem"} }>
    <img src="/images/music.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Music player App</h5>
        <p className="card-text">
        <ul className="text-justify">
            <li>Music player app build from scratch with pause ,play ,forward controls</li>

        </ul></p>
        <a href="https://github.com/sapthagiri-web-dev/Music-player-web-application" className="btn btn-primary btn-block">GitHub Link</a>
    </div>
</div>
</div>

<div className="p-2 bd-highlight">
<div className="card"  style={{width : "18rem"} }>
    <img src="/images/newyear.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">New Year countdown App</h5>
        <p className="card-text ">
        <ul className="text-justify" >
            <li>The Dynamic New Year countdown app wishes on every new year </li>
      
        </ul></p>
        <a href="https://github.com/sapthagiri-web-dev/New-year-countdown" className="btn btn-primary btn-block">GitHub Link</a>
    </div>
</div>
</div>

<div className="p-2 bd-highlight">
<div className="card"  style={{width : "18rem"} }>
    <img src="/images/register.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Registration App</h5>
        <p className="card-text">
        <ul className="text-justify">
            <li> Simple user registration app with Username, Email, Password</li>
            
        </ul></p>
        <a href="https://github.com/sapthagiri-web-dev/User-Registration-form" className="btn btn-primary btn-block">GitHub Link</a>
    </div>
</div>
</div>

</div>
</div>
            
        </div>
    )
}


export default Projects;