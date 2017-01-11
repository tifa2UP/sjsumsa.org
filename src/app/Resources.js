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
                <h1 className="headingStyle1">RESOURCES</h1>
                <div id="praying-spacing">
                    <div className="width60 alignTop">
                        <h2>Praying Space</h2>
                        <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero pulvinar gravida.
                            Sed purus risus,tempus a condimentum quis, tempor eget leo. Sed consectetur accumsan nulla sit amet
                            laoreet.tempus a condimentum quis, tempor eget leo. Sed consectetur accumsan nulla sit amet
                            laoreet.
                        </p>
                    </div>
                    <div className="width40">
                        <iframe src="https://player.vimeo.com/video/190913296?byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
                <div id="study-groups">
                </div>
                <div id="brochure">
                    <div className="width40">
                    </div>
                </div>
            </Paper>
        );
    }
})

module.exports = Resources;