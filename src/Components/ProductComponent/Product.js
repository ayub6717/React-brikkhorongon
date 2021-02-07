import React,{useContext} from 'react'
import { Card,CardDeck } from 'react-bootstrap'
import {ImgContext, TextContext} from './../../App'

function Product() {

    const title = useContext(ImgContext)
    const text = useContext(TextContext)


    return (
        <div className="container">
            <CardDeck >
                <Card >
                    <Card.Img variant="top" src="/img/6720.jpg" />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src="/img/hatishur.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src="/img/6720.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. 
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card >
                    <Card.Img variant="top" src="/img/hatishur.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Product
