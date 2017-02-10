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
    static getKey(){
        key++;
        return key;
    }

    handleExpandChange = (expanded) => {
    };

    handleExpand = () => {
        this.expandedForm = true;
    };

    componentWillMount(){
        var database = firebase.database();
        var eventsRef = database.ref().root.orderByChild("archived").equalTo(true);
        eventsRef.on('value', snap => {
            var events = Object.values(snap.val());
            for (var i = 0; i < events.length; i++){
                events[i].expandedForm = false;
            }

            this.setState({
                events: events,
            })
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            archivedEvent: [],
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
        <EventCard key={Events.getKey()} title={event.title} type={event.type} pictureURL={event.pictureURL} description={event.description}
                   dayAndTime={event.dayAndTime} locationAndDate={event.locationAndDate} RSVP={event.RSVP}></EventCard>
        );

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

