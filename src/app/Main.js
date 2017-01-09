/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {indigo500, indigo700, redA200, cyan800, white, cyan300} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Navbar = require('./NavBar');
var Home = require('./Home');
var Events = require('./Events');
var About = require('./About');
var Resources = require('./Resources');
var Contact = require('./Contact');

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: cyan800,
        accent2Color: cyan300,
        textColor: white,
    },

});

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Navbar/>
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
