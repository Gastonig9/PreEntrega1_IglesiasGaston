import React from "react";
import "./Cards.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function (props) {
    return (
        <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.imgProduct} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <Button variant="primary">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
        </>
    )
}