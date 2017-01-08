var React = require('react');
var ReactDOM = require('react-dom');
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

var NavBar = React.createClass({
    render: function () {
        const menuItem = {
            backgroundColor: 'transparent',
            color: 'white'
        };

        const menuItems = {
            marginTop: 4,
        };

        const items = (
            <div style={menuItems}>
                <FlatButton label="Home" style={menuItem}/>
                <FlatButton label="Events" style={menuItem}/>
                <FlatButton label="About" style={menuItem}/>
                <FlatButton label="Resources" style={menuItem}/>
                <FlatButton label="Contact" style={menuItem}/>
            </div>
        );
        return(<AppBar title="SJSU MSA" className="navbar" iconElementRight={items} showMenuIconButton={false}/>);
    }
});

module.exports = NavBar;
