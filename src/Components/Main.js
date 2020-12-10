import React from 'react'
import './main.css'

 function Main() {

    const mainStyle = {
        height : '400px',
        
    }

    return (



        <div className="card mb-3 " style={ { backgroundColor:'#839b97' }}>
  <img src="/images/Main.jpg" className="card-img-top " style={mainStyle}  alt="..."/>
  <div className="card-body">
  <h1 className="display-4 text-center" >Welcome To My Site</h1>
  <p className="lead text-center ">My Portfolio Using React App</p>
    <div className="mt-5">
    <p className="lead" >Hello, I'm <span className="h2" style={ { color:'#03506f' }}>Sapthagiri.</span> </p>
    <p className="lead " >I'm a <span className="h5" style={ { color:'#03506f' }} >Front End Developer</span> </p>
    </div>
  </div>
</div>


        
    )

 }


export default Main;




