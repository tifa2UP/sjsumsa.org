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
        var archivedEventsRef = database.ref().root.orderByChild("archived").equalTo(true);
        var eventsRef = database.ref().root.orderByChild("archived").equalTo(false);
        archivedEventsRef.on('value', snap => {
            // var archivedEvents = Object.values(snap.val());
            var archivedEvents = [];
            for (var key in snap.val()){
                archivedEvents.push(snap.val()[key]);
            }
            this.setState({
                archivedEvents: archivedEvents,
            })
        })
        eventsRef.on('value', snap => {
            var events = [];
            for (var key in snap.val()){
                events.push(snap.val()[key]);
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
            archivedEvents: [],
            displayArchive: false,
        }
    }

    viewArchivedEvents() {
        // console.log("button clocked!")
        this.state.displayArchive = true;
        console.log(this.state.displayArchive)
        this.forceUpdate();
    }

    render() {

        const archiveStyle = {
            marginTop: 20,
        };


        var archivedEvents;

        const cardTextExpanded = false;

        var events = this.state.events.map(event =>
            <EventCard key={Events.getKey()} title={event.title} type={event.type} pictureURL={event.pictureURL} description={event.description}
                       dayAndTime={event.dayAndTime} locationAndDate={event.locationAndDate} RSVP={event.RSVP}></EventCard>
        );

        if (this.state.displayArchive){
            archivedEvents =  this.state.archivedEvents.map(event =>
                <EventCard key={Events.getKey()} title={event.title} type={event.type} pictureURL={event.pictureURL} description={event.description}
                           dayAndTime={event.dayAndTime} locationAndDate={event.locationAndDate} RSVP={event.RSVP}></EventCard>
            );
        }
        else{
            archivedEvents = (<FlatButton label="Events Archive" style={archiveStyle} onTouchTap={() => this.viewArchivedEvents()}/>);
        }

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

