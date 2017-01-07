var React = require('react');
var ReactDOM = require('react-dom');
import AppBar from 'material-ui/AppBar';


var NavBar = React.createClass({
    render: function () {

        return(<AppBar title="SJSU MSA" className="navbar"> </AppBar>);
    }
});

module.exports = NavBar;
