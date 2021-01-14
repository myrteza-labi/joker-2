import React from 'react'; 
import './Navbar.css'; 

class Navbar extends React.Component{
    constructor(props){
        super(props); 

    }
    render(){
        return (
            
           
                <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#HomeImage">JOKER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#carouselExampleCaptions1">EVOLUTION</a>
      <a className="nav-item nav-link" href="#carouselExampleCaptions2">ALLIES</a>
      <a className="nav-item nav-link" href="#carouselExampleCaptions3">ENNEMIES</a>
    </div>
  </div>
</nav>
           /*
          <nav class="navbar fixed-top navbar-dark bg-dark">
          <a class="navbar-brand" href="#">JOKER</a>
          
        </nav>*/
        )
    }
}
export default Navbar; 

