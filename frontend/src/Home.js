import React, { Component } from 'react'
// import ReactSearchBox from 'react-search-box'
import { Container, Row, Col, ListGroup, ListGroupItem, Navbar } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import TopNav  from './Components/Nav';
import { restaurantUrl ,cartUrl } from './Urls';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      food_search:'',
      dish:'',
      restaurant:'',
      data:[]
    }
    this.ChangeHandle = this.ChangeHandle.bind(this);
  }

  ChangeHandle = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

componentDidMount(){
  fetch(restaurantUrl, {
      headers: {
          'Content-Type': 'application/json',
          }
  })
  .then((Response)=>
          Response.json())
          .then((findresponse)=>
          {
              console.log(findresponse)
              this.setState({
                  data:findresponse,
              })
          })
}
handleSearch = (e) =>{
  e.preventDefault();
  const uploadData = new FormData();
  uploadData.append('dish', this.dynamicData.dish);
  uploadData.append('restaurant', this.dynamicData.restaurant);
  fetch(cartUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
          },
            body: uploadData
          })
          .then( res => console.log(res))
          .catch(error => console.log(error))
}
  render() {
    return (
      <div className="Home">
      <Navbar >
        <TopNav/>
      </Navbar>
      <div className="header">Food Delivery</div>
      <input type="searchbox" name="food_search" value={this.food_search} placeholder="Search your food here"
       className="searchbox" onChange={(event) => { this.ChangeHandle(event); }}/>
      <button className="search" onClick={(e)=>{this.handleSearch(e);}}>Search</button><br /><br />
      <Container className="themed-container" fluid="md">
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem color="success"><p className="restourent">Dishes</p></ListGroupItem>
              {this.state.data.map((dynamicData,key)=>{
                if(this.state.food_search===this.dynamicData.dish){
                  return(
                    <div>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} 
              value={this.dynamicData.dish} name={this.dynamicData.dish} action>{this.dynamicData.dish}</ListGroupItem>
                    </div>
                  )
                }})
              }
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroupItem color="success" ><p className="restourent">Restaurant</p></ListGroupItem>
              {this.state.data.map((dynamicData,key)=>{
                if(this.state.food_search===this.dynamicData.dish){
                  return(
                    <div>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.toggleButton} 
              value={this.dynamicData.restaurant} name={this.dynamicData.restaurant} action>{this.dynamicData.restaurant}</ListGroupItem>
                    </div>
                  )
                }})
              }
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
            <ListGroupItem color="success" ><p className="restourent">Click to add in cart</p></ListGroupItem>
            {this.state.data.map((dynamicData,key)=>{
                if(this.state.food_search===this.dynamicData.dish){
                  return(
                    <div>
              <ListGroupItem tag="button" data-backdrop="false" onClick={this.handleSearch}>Add to cart</ListGroupItem>
                    </div>
                  )
                }})
              }
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
