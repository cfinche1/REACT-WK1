import React from "react";
import Login from "./login";

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                 <nav className="navbar">
                    <a className="nav-link" href="bootstrap2.html">Forgot Username/Password?</a>
                </nav>
                <br></br>
                <div>
                    <Login />
                </div>
            </div>
           
            
        )
    }
}