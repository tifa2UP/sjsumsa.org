var React = require('react');
var ReactDOM = require('react-dom');
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

var NavBar = React.createClass({
    render: function () {
        return(<AppBar title="SJSU MSA" className="navbar" iconElementRight={<FlatButton label="Menu items"/>}/>);
    }
});

module.exports = NavBar;
