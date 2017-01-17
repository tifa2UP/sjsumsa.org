var React = require('react');
var ReactDOM = require('react-dom');
import AppBar from "material-ui/AppBar";
// import FlatButton from "material-ui/FlatButton";

var NavBar = React.createClass({
    render: function () {

        const items = (
            <div className="navbar-items">
                <li className="navbar-menu-items"> <a href="#events"> Events </a></li>
                <li className="navbar-menu-items"> <a href="#about"> About </a></li>
                <li className="navbar-menu-items"> <a href="#resources"> Resources </a> </li>
                <li className="navbar-menu-items"> <a href="#contact"> Contact </a></li>
            </div>
        );
        return(<AppBar title="SJSU MSA" className="navbar" iconElementRight={items} showMenuIconButton={false}/>);
    }
});

module.exports = NavBar;
