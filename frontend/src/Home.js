import React, { Component } from 'react'
// import ReactSearchBox from 'react-search-box'
import { Container, Row, Col, ListGroup, ListGroupItem, Navbar } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import TopNav  from './Components/Nav';


export default class Home extends Component {

  render() {
    return (
      <div className="Home">
      <Navbar >
        <TopNav/>
      </Navbar>
      <div className="header">Food Delivery</div>
      <input type="searchbox" placeholder="Search your food here" className="searchbox" />
      <button className="search">Search</button><br /><br />
      <Container className="themed-container" fluid="md">
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem color="success"><p className="restourent">Dishes</p></ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>pizza</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>pizza</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>pizza</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>pizza</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>pizza</ListGroupItem>

            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroupItem color="success" ><p className="restourent">Restaurant</p></ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>Domino's</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>Domino's</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>Domino's</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>Domino's</ListGroupItem>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} value={this.dynamicData} id={this.dynamicData} name={this.dynamicData} action>Domino's</ListGroupItem>

            </ListGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div>
              <Nav tabs>
                <NavItem>
                  <NavLink href="https://en.wikipedia.org/wiki/Copyright_law_of_India" className="termsandcondition">&copy;Copyright</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col>
            <div>
              <Nav tabs>
                <NavItem>
                  <NavLink href="https://www.business-standard.com/terms-conditions" className="termsandcondition">Terms and conditions</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col>
            <div>
              <Nav tabs>
                <NavItem>
                  <NavLink href="https://www.searchenginejournal.com/about-us-page-examples/250967/" className="termsandcondition">About us</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink href="https://www.google.com/search?q=contact+us+page+for+blogger&oq=contact&aqs=chrome.4.69i57j0l7.14710j0j7&sourceid=chrome&ie=UTF-8" className="termsandcondition">Contact us</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Row>
      </Container>
      </div>
    )
  }
}
