import './vertical.css'

import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faBolt } from '@fortawesome/free-solid-svg-icons'


export const VerNav = () => {
  return (
    <div className="column-icons">
      <Nav defaultActiveKey="/home" className="flex-column" >
        <Nav.Link href="/home"><FontAwesomeIcon icon={faUser} /></Nav.Link>
        <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
        <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faBolt} /></Nav.Link>
        <Nav.Link eventKey="disabled" disabled> </Nav.Link>
      </Nav>
    </div>

  )
}