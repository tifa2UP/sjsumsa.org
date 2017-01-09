/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import {blueGrey50} from 'material-ui/styles/colors';

var Events = React.createClass({
    render: function () {
        const bgColor = {
            backgroundColor: '#00b8d6',
        }

        return (
            <div className="section" style={bgColor}>
                <h1 className="headingStyle1">EVENTS</h1>

            </div>
        );
    }
})

module.exports = Events;