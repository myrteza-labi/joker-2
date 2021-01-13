import React from 'react'; 
import './Navbar.css'; 

class Navbar extends React.Component{
    constructor(props){
        super(props); 

    }
    render(){
        return (
            <div className='NavabarContainer'>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">JOKER</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">EVOLUTION</a>
      <a className="nav-item nav-link" href="#">HISTOIRE</a>
      <a className="nav-item nav-link" href="#">ALLIES</a>
      <a className="nav-item nav-link" href="#">ENNEMIES</a>
    </div>
  </div>
</nav>
            </div>
            
        )
    }
}
export default Navbar; 