import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {cyan500} from 'material-ui/styles/colors';
var firebase = require('firebase');

export default class About extends React.Component {

    constructor(){
        super();
        this.state = {
            about: 'Description loading'
        };
    }

    componentDidMount(){
        const aboutRef = firebase.database().ref('About');
        aboutRef.on('value', snap => {
            this.setState({
                about: snap.val()
            });
        })
    }

    render() {
        const bgColor = {
            backgroundColor: '#f9f9f9',
        };

        return (
            <Paper className="section" style={bgColor} rounded={false} id="about">
                <h1 className="headingStyle1">ABOUT</h1>
                <p className="section-text">{this.state.about}
                </p>
            </Paper>
        );
    }
}

