import React, { Component } from 'react'
import './Home.css';
import food from './images/food.jpeg'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
             <img src={food} className="App-logo" alt="logo" />
            </div>
        )
    }
}
