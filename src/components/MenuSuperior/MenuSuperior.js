import React, { Component } from "react";

class MenuSuperior extends Component {



    render() {
        return (
            <nav className="nav navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="nav-brand">DevMedia</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nabarNav">
                    <ul className="navbar-nab mr-auto"></ul>
                </div>
            </nav>
        )
    }
}

export default MenuSuperior