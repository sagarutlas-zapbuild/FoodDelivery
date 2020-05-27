import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <Container className="themed-container" fluid="md">
                    <div className="block-example border border-dark">
                        <Row>
                            <Col>
                            <ListGroup>
                                <ListGroupItem color='success'>Dishes</ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                            </ListGroup>
                            </Col>
                        </Row>

                    </div>

                </Container>
            </div>
        )
    }
}
