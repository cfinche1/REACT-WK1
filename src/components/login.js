import React from "react";
import EnterButton from "./enter-button";
import Username from "./username";
import Password from "./password";

export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="form">
                    <h3>Log In</h3>
                    <div className="label">
                        <label>Input Username:</label>
                        <br></br>
                        <Username />
                    </div>
                    <div className="label">
                        <label>Input Password:</label>
                        <br></br>
                        <Password />
                    </div>
                    <div className="button">
                        <EnterButton />
                    </div>
                </div>
            </div>
        );
    }
}