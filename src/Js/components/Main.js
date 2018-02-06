import React from "react"

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Buddy {this.props.person.name}, your age is {this.props.person.age}</h1>
                <h2>This is main content...</h2>
                <img src="img/webpack-logo.png"></img>
            </div>
        );
    }
}