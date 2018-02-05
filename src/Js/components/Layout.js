import React from "react";

export default class Layout extends React.Component {
    render() {
        const name = "Shyam"
        return (
            <div>
                <h1>Hello Buddy {name}</h1>
                <img src="img/webpack-logo.png"></img>
            </div>
        )
    }
}