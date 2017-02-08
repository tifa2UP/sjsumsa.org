/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var firebase = require('firebase');
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import EventCard from './EventCard'
var key = 0;

export default class Events extends React.Component{
    getKey(){
        key++;
        return key;
    }

    handleExpandChange = (expanded) => {
    };

    handleExpand = () => {
        this.expandedForm = true;
    };

    reverseExpand(expanded){
        return !expanded;
    }
    handleReduce = () => {
        this.setState({expanded: false});
    };

    componentWillMount(){
        var database = firebase.database();
        var eventsRef = database.ref().root;
        eventsRef.on('value', snap => {
            var events = Object.values(snap.val());
            for (var i = 0; i < events.length; i++){
                events[i].expandedForm = false;
            }
            console.log(events)

            this.setState({
                events: events,
            })
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            expanded: false,
        }
    }

    render() {

        const archiveStyle = {
            marginTop: 20,
        };


        var archivedEvents = (
        <FlatButton label="Events Archive" style={archiveStyle}/>
        );

        const cardTextExpanded = false;

        var events = this.state.events.map(event =>
        <EventCard></EventCard>


        )
        // var events = this.state.events.map(event =>
        //     <div className="cardTest alignTop" key={this.getKey()}>
        //         <Card style={cardStyle} expanded={event.expanded} onExpandChange={this.handleExpandChange}>
        //             <CardHeader
        //                 title={event.title} titleStyle={titleStyle}
        //                 subtitle={event.type} subtitleStyle={subtitleStyle}
        //                 actAsExpander={true}
        //                 showExpandableButton={true}
        //             />
        //             <img src={event.pictureURL} style={imgStyle}/>
        //             <CardText style={cardTextStyle} expandable={true}>
        //                 {event.description}
        //             </CardText>
        //             <CardTitle title={event.dayAndTime} subtitle={event.locationAndDate} titleStyle={titleStyle2} subtitleStyle={subtitleStyle} />
        //             <CardActions>
        //                 <FlatButton label="Description" primary={true} onTouchTap={this.handleExpand}/>
        //                 <FlatButton label="RSVP" secondary={true} href={event.RSVP} target="_window"/>
        //             </CardActions>
        //         </Card>
        //     </div>
        // );


        return (
            <Paper className="section" rounded={false} zDepth={1} id="events">
                <h1 className="headingStyle1">EVENTS</h1>
                <div>
                    {events}
                </div>
                    {archivedEvents}
            </Paper>
        );
    }
};

