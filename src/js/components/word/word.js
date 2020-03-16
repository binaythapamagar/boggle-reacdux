import React, { Component } from "react";


class Word extends Component{
    render(){
        return (
                <p>Current word : <strong>{this.props.currentWord}</strong></p>
        )
    };
}

export default Word;