/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


var Events = React.createClass({
    render: function () {

        const archiveStyle = {
            marginTop: 20,
        };
        const bgColor = {
            // backgroundColor: '#00b8d6',
            // borderTop: '#000',
        };

        const titleStyle = {
            fontSize: '160%',
            // color: '#000'
        };

        const titleStyle2 = {
            fontSize: '120%',
            // color: '#000'
        };

        const subtitleStyle = {
            color: '#ababab'
        };

        const imgStyle = {
            width: '100%'
        };

        const cardStyle = {
            textAlign: 'left',
        };

        const cardTextStyle = {
            // color: '#000',
        };

        const whiteColor = {
            // color: 'white'
        }
        const cardTextExpanded = false;

        return (
            <Paper className="section" style={bgColor} rounded={false} zDepth={1} id="events">
                <h1 className="headingStyle1">EVENTS</h1>
                 {/*Original Card*/}
                <div>
                    <div className="cardTest alignTop">
                        <Card style={cardStyle}>
                            <CardHeader
                                title="EVENT 1" titleStyle={titleStyle}
                                subtitle="Social" subtitleStyle={subtitleStyle}
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <img src="img/event-placeholder.jpeg" style={imgStyle}/>
                            <CardText style={cardTextStyle} expandable={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                            <CardTitle title="Wednesday at 2:30 pm" subtitle="DMH 123 - 1/9/2017" titleStyle={titleStyle2} subtitleStyle={subtitleStyle} />
                            <CardActions>
                                <FlatButton label="Description" primary={true}/>
                                <FlatButton label="RSVP" secondary={true}/>
                            </CardActions>
                        </Card>
                    </div>
                    {/*Duplicate cards start here*/}
                    <div className="cardTest alignTop">
                        <Card style={cardStyle}>
                            <CardHeader
                                title="EVENT 2" titleStyle={titleStyle}
                                subtitle="Social" subtitleStyle={subtitleStyle}
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <img src="img/event-placeholder.jpeg" style={imgStyle}/>
                            <CardText style={cardTextStyle} expandable={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                            <CardTitle title="Wednesday at 2:30 pm" subtitle="DMH 123 - 1/9/2017" titleStyle={titleStyle2} subtitleStyle={subtitleStyle} />
                            <CardActions>
                                <FlatButton label="Description" primary={true}/>
                                <FlatButton label="RSVP" secondary={true}/>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="cardTest alignTop">
                        <Card style={cardStyle}>
                            <CardHeader
                                title="EVENT 3" titleStyle={titleStyle}
                                subtitle="Social" subtitleStyle={subtitleStyle}
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <img src="img/event-placeholder.jpeg" style={imgStyle}/>
                            <CardText style={cardTextStyle} expandable={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                            <CardTitle title="Wednesday at 2:30 pm" subtitle="DMH 123 - 1/9/2017" titleStyle={titleStyle2} subtitleStyle={subtitleStyle} />
                            <CardActions>
                                <FlatButton label="Description" primary={true}/>
                                <FlatButton label="RSVP" secondary={true}/>
                            </CardActions>
                        </Card>
                    </div>

                </div>
                <FlatButton label="Events Archive" style={archiveStyle}/>
            </Paper>
        );
    }
});

module.exports = Events;