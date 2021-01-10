import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from  './components/App'; 
import './index.css';

class Main extends React.Component{
  constructor(props){
    super(props); 
  }
  render(){
    return (
      <App/>
    )
  }
}

ReactDOM.render(
  <Main/>, 
  document.getElementById('root')
)