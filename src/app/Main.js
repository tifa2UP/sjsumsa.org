/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {indigo500, indigo700, redA200, cyan800, white, cyan300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Navbar = require('./NavBar');
var Home = require('./Home');
import Events from './Events';
import About from './About';
import Resources from './Resources'
import Contact from './Contact'
import Footer from './Footer'
import * as firebase from 'firebase';

console.log("Salam Awesome Developer! We've built this website using React.js, Material-UI, and Firebase. If you'd like to contribute to the project, it'd be great! Get in touch with us. You can see the source code at: https://github.com/tifa2UP/sjsumsa.org")
var config = {
    apiKey: "AIzaSyCL4-zkL3zYHt9NhYDx9m2Q3Ig9US8dTHA",
    authDomain: "sjsu-msa.firebaseapp.com",
    databaseURL: "https://sjsu-msa.firebaseio.com",
    storageBucket: "sjsu-msa.appspot.com",
    messagingSenderId: "799679794278"
};

firebase.initializeApp(config);
const db = firebase.database();

const muiTheme = getMuiTheme({});

class Main extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <div>
                    <Home />
                    {/* <Navbar /> */}
                    {/* <Events /> */}
                    <About />
                    <Resources />
                    <Contact />
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}
export default Main;
