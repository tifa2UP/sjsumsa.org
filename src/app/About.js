var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper';
import {cyan500} from 'material-ui/styles/colors';

var About = React.createClass({
    render: function () {
        const bgColor = {
            backgroundColor: cyan500,
        }

        return (
            <Paper className="section" style={bgColor} rounded={false}>
                <h1 className="headingStyle1">ABOUT</h1>
                <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero pulvinar gravida. Sed purus risus, tempus a condimentum quis, tempor eget leo. Sed consectetur accumsan nulla sit amet laoreet. Aliquam erat volutpat. Phasellus vitae sem at eros tincidunt maximus id nec ipsum. Mauris consequat nulla neque, sed condimentum ipsum varius in. Donec mattis dolor eu dapibus fermentum.
                </p>
            </Paper>
        );
    }
});

module.exports = About;