import React from "react";
import Title from "./Header/Title"

export default class Header extends React.Component {
        handleChange(e){
        const name = e.target.value;
        this.props.changeName(name);
    }
    render() {
        return (
            <div>
                <input value={this.props.name} onChange={this.handleChange.bind(this)}/>
                <Title/>
                <h1>Thsi will be changed by fuction of Layout </h1>
                <h1>Hi This is header..</h1>
            </div>
        )
    }
}