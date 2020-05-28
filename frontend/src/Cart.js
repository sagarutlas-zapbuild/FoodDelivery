import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { restaurantUrl ,orderUrl } from './Urls';

export default class Cart extends Component {
    constructor(state) {
        super(state)
        this.state = {
            data: [],
            dish:'',
            restaurant:'',
            toggle:false,
        }
    }
    componentDidMount() {
        fetch(restaurantUrl, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((Response) =>
                Response.json())
            .then((findresponse) => {
                console.log(findresponse)
                this.setState({
                    data: findresponse,
                })
            })
    }
    OrderNow = (e) => {
        e.preventDefault();
        const orderfood = new FormData();
        orderfood.append('dish', this.dynamicData.dish);
        orderfood.append('restaurant', this.dynamicData.restaurant);
        fetch(orderUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: orderfood
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <Container className="themed-container" fluid="md">
                    <div className="block-example border border-dark">
                        <h1 className="text-center">Your Cart</h1>
                        <Row>
                            <Col>
                                <ListGroup>
                                    <ListGroupItem color='success'>Dish</ListGroupItem>
                                    {this.state.data.map((dynamicData, key) => {
                                        if (this.state.toggle === 'false') {
                                            return (
                                                <div>
                                                    <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton}
                                                        value={this.dynamicData.dish} name={this.dynamicData.dish} action>{this.dynamicData.dish}</ListGroupItem>
                                                </div>
                                            )
                                        }
                                    })
                                    }
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup>
                                    <ListGroupItem color='success'>Restaurant</ListGroupItem>
                                    {this.state.data.map((dynamicData, key) => {
                                        if (this.state.toggle === 'false') {
                                            return (
                                                <div>
                                                    <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton}
                                                        value={this.dynamicData.restaurant} name={this.dynamicData.restaurant} action>{this.dynamicData.restaurant}</ListGroupItem>
                                                </div>
                                            )
                                        }
                                    })
                                    }
                                </ListGroup>
                            </Col>
                            <Col>
                                <ListGroup>
                                    <ListGroupItem color='success'>Click to Order</ListGroupItem>
                                    {this.state.data.map((dynamicData, key) => {
                                        if (this.state.toggle === 'false') {
                                            return (
                                                <div>
                                                    <ListGroupItem tag="button" data-backdrop="false" onClick={this.OrderNow}>Order Now</ListGroupItem>
                                                </div>
                                            )
                                        }
                                    })
                                    }
                                </ListGroup>
                            </Col>
                        </Row>

                    </div>

                </Container>
            </div>
        )
    }
}
