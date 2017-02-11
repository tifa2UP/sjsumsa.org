import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
var firebase = require('firebase');

export default class About extends React.Component {

    constructor(){
        super();
        this.state = {
            about: 'Description loading'
        };
    }

    componentWillMount(){
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
                <p className="section-text">The Muslim Student Association of San Jose State University is dedicated to building an awesome environment of brotherhood and sisterhood on campus through social, religious, interfaith, educational and outreach events. </p>
                <p className="section-text">Our goal is to promote the true, balanced message of Islam within ourselves and to the general public by being the best possible Muslims we can be in terms of our manners, morale characters, and worship. We hope to achieve this inshallah through following the Qur’an and example of the Prophet Muhammad (peace be upon him).</p>
                <FlatButton label="Subscribe to our mailing list" href="https://docs.google.com/forms/d/e/1FAIpQLScIuuXRnuhuEWAw8uywj7aKyXyWd218fJKX1BLW0SJ6KP7Otg/viewform" target="_window"/>
            </Paper>
        );
    }
}

