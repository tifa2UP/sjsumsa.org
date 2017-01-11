var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper'
import {cyan400} from 'material-ui/styles/colors';

var Home = React.createClass({
    render: function () {
        const bgColor = {
            backgroundColor: cyan400,

        }
        return (
            <div>
                <img id="landing-img" src="img/landing-background.png" />
            </div>
        );
    }
})

module.exports = Home;