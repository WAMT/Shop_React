import './App.css';
import { useState } from "react"
import {Button,Navbar,Container,Nav,Col,Row} from 'react-bootstrap';
import data from './data.js';
function App() {

  let [shoes] = useState(data);
  let [shoid,setShoId] = useState([0,0,0])

  
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark" className='nav'>
        <Container>
          <Navbar.Brand href="#home" className='title'>J_Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="main-bg"></div>
      <div className="row"> 
          <OBJECT shoes={shoes}></OBJECT>
          <OBJECT shoes={shoes}></OBJECT>
     </div>
   </div>
  );
}
const OBJECT = (props) => {
  return(
    props.shoes.map(function(a,i){
      return (
        <div className="col-md-4">
        <img width="80%" src={props.shoes[i].src}/>
        <h4>{props.shoes[i].title}</h4>
        <h5>{props.shoes[i].price}</h5>
        <p>{props.shoes[i].content}</p>
      </div>
      )
    })
  )
}

export default App;
