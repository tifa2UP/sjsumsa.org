import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const cardStyle = {
    textAlign: 'left',
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
    width: '100%',
    height: '180%'
};

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
            expanded: false,
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };


    handleExpand = () => {
        this.setState({expanded: !this.state.expanded});
    };

    render(){
        return (
        <div className="cardTest alignTop" key={this.props.key}>
            <Card style={cardStyle} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={this.props.title} titleStyle={titleStyle}
                    subtitle={this.props.type} subtitleStyle={subtitleStyle}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <img src={this.props.pictureURL} style={imgStyle}/>
                <CardText expandable={true}>
                    {this.props.description}
                </CardText>
                <CardTitle title={this.props.dayAndTime} subtitle={this.props.locationAndDate} titleStyle={titleStyle2} subtitleStyle={subtitleStyle} />
                <CardActions>
                    <FlatButton label="Description" primary={true} onTouchTap={this.handleExpand}/>
                    <FlatButton label="RSVP" secondary={true} href={this.props.RSVP} target="_window"/>
                </CardActions>
            </Card>
        </div>
        )
    }
}