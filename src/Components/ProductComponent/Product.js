import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
// import { ImgContext, TextContext } from './../../App'
import { users } from "../../data/item";



function Product() {
    
    return (
        <div className="container">
            <CardDeck >
            {users.map((user, index) => (
                <Card key={user}>
                    {/* <Card.Img variant="top" src={require(`../../data/images/${user.itemImage}`)} alt={user.type} /> */}
                    <Card.Body>
                        <Card.Title>{user.itemName}</Card.Title>
                        <Card.Text>
                            <p>Price : ৳ {user.price} </p>
                            <img src={user.itemImage} alt={user.type}/>

                            
                            {/* <img src={require(`../../data/images/${user.itemImage}`)}/> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>{user.itemName}</Card.Title>
                        <Card.Text>
                            <p>Price : ৳ {user.price} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                
                ))}
                {/* <Card >
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
                </Card>*/}
            </CardDeck>
        </div>
    )
}

export default Product
