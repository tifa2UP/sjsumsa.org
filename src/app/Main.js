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
var Events = require('./Events');
var About = require('./About');
var Resources = require('./Resources');
import Contact from './Contact'

const muiTheme = getMuiTheme({
    palette: {
        textColor: white,
    },
    textField: {
        focusColor: white,
    },
});

class Main extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <div>
                    <Navbar />
                    <Home />
                    <Events />
                    <About />
                    <Resources />
                    <Contact />
                </div>
            </MuiThemeProvider>
        );
    }
}
export default Main;
