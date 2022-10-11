import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoo } from '@fortawesome/free-solid-svg-icons'

import './brand.css';


export const Header = () => { 
    return (
        <Navbar bg="dark" variant="dark" >
        <Container className = "header">
          <Navbar.Brand href="#home" className = "header">
          <FontAwesomeIcon icon={faPoo} />
            {' '}
            Tcc App
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}