import React from 'react'
import { Card, CardDeck} from 'react-bootstrap'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import style from '../../../HeaderComponent/header.module.css'



function ItemComponent() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="container">
            <CardDeck >
            <Card >
                    <Card.Img variant="top" src="/img/hatishur.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.
                        </Card.Text>
                        <FontAwesomeIcon className={style.icon_1} onClick={() => setModalShow(true)} icon={faEye}/>
                        <FontAwesomeIcon className={style.icon_1} icon={faEdit}  />
                        <FontAwesomeIcon className={style.icon_1} icon={faTrash} />
                        <MyVerticallyCenteredModal 
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                        />


                    </Card.Body>
                </Card>

            
                <Card >
                    <Card.Img variant="top" src="/img/hatishur.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            contents.
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

export default ItemComponent
