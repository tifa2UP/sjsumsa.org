var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.js');
var getMuiTheme= require('material-ui/styles/getMuiTheme');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var Main = React.createClass({
    render: function () {
        return <div><NavBar /><br/><h1>Hello Anique!</h1></div>
    }
});

module.exports = Main;