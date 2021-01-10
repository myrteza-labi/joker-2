import React from 'react'; 
import './Navbar.css'; 

class Navbar extends React.Component{
    constructor(props){
        super(props); 

    }
    render(){
        return (
            <div className='NavabarContainer'>
                <nav className='Navbar'>
                <ul>
                    <li>ALLIES</li>
                    <li>ENNEMIES</li>
                    <li>EVOLUTION</li>
                    <li>HISTOIRE</li>
                </ul>
            </nav>
            </div>
            
        )
    }
}
export default Navbar; 