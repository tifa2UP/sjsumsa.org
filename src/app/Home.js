var React = require('react');
var ReactDOM = require('react-dom');
import {cyan400} from 'material-ui/styles/colors';
import zIndex from 'material-ui/styles/zIndex'

var Home = React.createClass({
    render: function () {
        const bgColor = {
            backgroundColor: cyan400,

        }
        return (
            <div className="section" style={bgColor} >
                <h1 className="headingStyle1">HOME</h1>
                <p className="section-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero
                    pulvinar gravida. Sed purus risus, tempus a condimentum quis, tempor eget leo.
                    Sed consectetur accumsan nulla sit amet laoreet. Aliquam erat volutpat. Phasellus vitae sem
                    at eros tincidunt maximus id nec ipsum. Mauris consequat nulla neque, sed condimentum ipsum varius in.
                    Donec mattis dolor eu dapibus fermentum.
                </p>

            </div>
        );
    }
})

module.exports = Home;