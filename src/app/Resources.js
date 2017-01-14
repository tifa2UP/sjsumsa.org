/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {cyan300} from 'material-ui/styles/colors';

var Resources = React.createClass({
    render: function () {
        const bgColor = {
            backgroundColor: cyan300,
        };
        const buttonStyle = {
            padding: '0px',
        };

        return (
            <div>
                <Paper className="section no-padding" style={bgColor} rounded={false}>
                    <div id="praying-spacing">
                        <div className="width60 alignTop">
                            <h2>Praying Space</h2>
                            <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero pulvinar gravida.
                                Sed purus risus,tempus a condimentum quis, tempor eget leo. Sed consectetur accumsan nulla sit amet
                                laoreet.
                            </p>
                        </div>
                        <div className="width40 ">
                            <img src="img/praying-space.jpg" className="block-img full-width" />
                        </div>
                    </div>
                </Paper>
                <Paper className="section no-padding" style={bgColor} rounded={false} zDepth={5}>
                    <div id="study-groups">
                        <div className="width40 ">
                            <img src="img/praying-space.jpg" className="block-img full-width" />
                        </div>
                        <div className="width60 alignTop">
                            <h2>Study Groups</h2>
                            <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero pulvinar gravida.
                                Sed purus risus,tempus a condimentum quis, tempor eget leo. Sed consectetur accumsan nulla sit amet
                                laoreet.
                            </p>
                        </div>
                    </div>
                </Paper>
                <div id="handbook">
                    <h2 className="no-margin">New Students Handbook</h2>
                    <p id="handbook-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero pulvinar gravida.
                        Sed purus risus,tempus a condimentum quis,</p>
                    <RaisedButton secondary={true} label="Download PDF" style={buttonStyle}/>
                </div>
            </div>
        );
    }
})

module.exports = Resources;