import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {Link} from "react-router-dom";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "Shyam", age: 30 }
    }
    changeName(name) {
        this.setState({name})
    }
    render() {
        return (
            <div>
                <button type="button" class="btn btn-default"><Link to="address">About</Link></button>
                <Header name= {this.state.name} changeName = {this.changeName.bind(this)}/>
                <Main person={this.state} />
                <Footer />
            </div>
        )
    }
}