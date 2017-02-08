import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

export default class EventCard extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            type: '',
            pictureURL: '',
            dayAndTime: '',
            locationAndDate: '',
            RSVP: '',
            description: '',
        }
    }
}