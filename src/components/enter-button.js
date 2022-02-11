import React from "react";

export default class EnterButton extends React.Component{
    render() {
        return React.createElement('button', {class: 'btn btn-danger'}, "Enter");
    }
}