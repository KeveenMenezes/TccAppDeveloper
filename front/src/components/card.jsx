import './card.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cards = () => {
    return (
        <Card className="cards"  >
            <Card.Body className='card-text' >
                <h4>Card Title</h4>
                <h6>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </h6>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}