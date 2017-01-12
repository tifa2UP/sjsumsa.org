/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper'
import {cyan300} from 'material-ui/styles/colors';

var Resources = React.createClass({
    render: function () {
        const bgColor = {
            backgroundColor: cyan300,
        }

        return (
            <Paper className="section" style={bgColor} rounded={false}>
                {/*<h1 className="headingStyle1">RESOURCES</h1>*/}
                <div className="container" id="praying-spacing">
                    <div className="col-md-5 col-md-offset-1 alignTop">
                        <h2>Praying Space</h2>
                        <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero pulvinar gravida.
                            Sed purus risus,tempus a condimentum quis, tempor eget leo. Sed consectetur accumsan nulla sit amet
                            laoreet.tempus a condimentum quis, tempor eget leo. Sed consectetur accumsan nulla sit amet
                            laoreet.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src="img/praying-space.jpg" className="full-width"/>
                    </div>
                </div>
            </Paper>
        );
    }
})

module.exports = Resources;