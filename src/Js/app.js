import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation"
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
    render() {
      return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Route path='/' exact component={Layout} />
                <Route path='/address' exact component={Header} />
            </div>
        </BrowserRouter>
      )
    }
}
const Address = () => <h1>We are located at 555 Jackson St.</h1>

