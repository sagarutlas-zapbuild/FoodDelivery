import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

import './Home.css';

export default class Home extends Component {
    data = [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
      ]
    render() {
        return (
            <div className="Home">
             <button className="login" href="#">Login</button>
             <button className="signup" href="#">Signup</button>
             <div className="header">Food Delivery</div>
             <ReactSearchBox
                placeholder="Search Your food here"
                data={this.data}
                callback={record => console.log(record)}
                className="search"
            />
            <button>Search</button>
            </div>
        )
    }
}
