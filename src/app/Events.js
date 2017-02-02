/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class Events extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            events: [{
                id: 1,
                title: 'event 1',
                type: 'Social',
                picture: '',
                dayAndTime: 'Tuesday at 2:30pm',
                locationAndDate: 'BBQ pit - 1/9/2017',
                description: 'lorem ipsum loves me'
            },
                {
                    id: 2,
                    type: 'Social',
                    picture: '',
                    day: '',
                    time: '',
                    location: '',
                },
                {
                    id: 3,
                    type: 'Social',
                    picture: '',
                    day: '',
                    time: '',
                    location: '',
                },
            ]
        }
    }

    render() {

        const archiveStyle = {
            marginTop: 20,
        };


        const titleStyle = {
            fontSize: '160%',
            textTransform: 'uppercase'
        };

        const titleStyle2 = {
            fontSize: '120%',
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

        const cardTextExpanded = false;

        var events = this.state.events.map(event =>
            <div className="cardTest alignTop" key={event.id}>
                <Card style={cardStyle}>
                    <CardHeader
                        title={event.title} titleStyle={titleStyle}
                        subtitle={event.type} subtitleStyle={subtitleStyle}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <img src="img/event-placeholder.jpeg" style={imgStyle}/>
                    <CardText style={cardTextStyle} expandable={true}>
                        {event.description}
                    </CardText>
                    <CardTitle title={event.dayAndTime} subtitle={event.locationAndDate} titleStyle={titleStyle2} subtitleStyle={subtitleStyle} />
                    <CardActions>
                        <FlatButton label="Description" primary={true}/>
                        <FlatButton label="RSVP" secondary={true}/>
                    </CardActions>
                </Card>
            </div>
        );


        return (
            <Paper className="section" rounded={false} zDepth={1} id="events">
                <h1 className="headingStyle1">EVENTS</h1>
                <div>
                    {events}
                </div>
                <FlatButton label="Events Archive" style={archiveStyle}/>
            </Paper>
        );
    }
};

