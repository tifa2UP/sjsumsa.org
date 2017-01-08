/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {indigo500, indigo700, redA200, cyan500, white, cyan300} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Navbar = require('./NavBar');
var About = require('./About');

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: cyan500,
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
                    <About />
                </div>
            </MuiThemeProvider>
        );
    }
}
export default Main;
