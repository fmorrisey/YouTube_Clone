import React from 'react'
import './navBar.css';

export default function TitleBar(props) {
    return (
        <nav className="navbar navbar-style navbar-dark bg-dark navbar-expand-lg">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="navbar-nav">
                    <h1 className="center-really">YouTube</h1>
                </div>
            </div>
        </nav>
    );
}