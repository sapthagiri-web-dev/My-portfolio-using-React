import React from 'react'

 function Footer() {
    return (



<footer className="page-footer font-small cyan darken-3">


  <div className="container" style={ { backgroundColor:'#839b97' }}>

  

 
    <div className="row">

    

    
      <div className="col-md-12 py-5">

      <p className="h2  font-weight-light mt-2 text-center">Contact Me </p>
        <div className="mt-4 text-center">

     
          <a className="fb-ic">
            <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
       
          <a className="tw-ic" href="https://github.com/sapthagiri-web-dev">
            <i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a className="gplus-ic">
            <i className="fa fa-google-plus-square fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        
          <a className="li-ic" href="https://www.linkedin.com/in/sapthagiri-s-v/">
            <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        
        
          
       
        </div>
      </div>
    

    </div>
  

  </div>
 

 
  <div className="footer-copyright text-center py-3" style={ { backgroundColor:'#9ddfd3' }}>© 2020 Copyright:
    <a href="https://sapthagiri-web-dev.github.io/My-website/index.html"> sapthagiri.com</a>
  </div>


</footer>

            
     
    )
}


export default Footer;