import Layout from "./components/Layout";
import Header from "./components/Header";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";

export default class App extends Component {
    render() {
      return (
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Layout} />
                <Route path='/address' exact component={Header} />
                <Route path='/login' exact component={Login} />
            </div>
        </BrowserRouter>
      )
    }
}
const Address = () => <h1>We are located at 555 Jackson St.</h1>

