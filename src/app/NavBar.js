var React = require('react');
var ReactDOM = require('react-dom');
import AppBar from "material-ui/AppBar";
// import FlatButton from "material-ui/FlatButton";

var NavBar = React.createClass({
    render: function () {

        const items = (
            <div className="navbar-items">
                <li className="navbar-menu-items">Events</li>
                <li className="navbar-menu-items">About</li>
                <li className="navbar-menu-items">Resources</li>
                <li className="navbar-menu-items">Contact</li>
            </div>
        );
        return(<AppBar title="SJSU MSA" className="navbar" iconElementRight={items} showMenuIconButton={false}/>);
    }
});

module.exports = NavBar;
