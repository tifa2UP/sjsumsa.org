/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import {cyan300} from 'material-ui/styles/colors';


const bgColor = {
    backgroundImage: 'url("img/circles-25.jpg")',
};
const buttonStyle = {
    padding: '0px',
};
const paperStyle = {
    backgroundColor: 'transparent'
};


export default class Resources extends React.Component {

    componentDidMount(){
        const prayingSpaceRef = firebase.database().ref('Praying Space');
        prayingSpaceRef.on('value', snap => {
            this.setState({
                prayingSpace: snap.val()
            });
        })
        const halaqaRef = firebase.database().ref('Halaqa');
        halaqaRef.on('value', snap => {
            this.setState({
                halaqa: snap.val()
            });
        })
    }

    state = {
        open: false,
        prayingSpace: 'fetching',
        halaqa: 'fetching'
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div style={bgColor}>
                <Paper className="section no-padding" rounded={false} id="resources" style={paperStyle} zDepth={1}>
                    <div id="praying-spacing">
                        <div className="width60 alignTop section">
                            <h2>Praying Space</h2>
                            <p className="section-text resource-description">{this.state.prayingSpace}
                            </p>
                            <FlatButton label="Location by video" onTouchTap={this.handleOpen}/>
                            <Dialog
                                title="Prayer Space Location"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                            >
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/JRn8Xc41nUI" frameBorder="0" allowFullScreen></iframe>
                            </Dialog>
                        </div>
                        <div className="width40 ">
                            <img src="img/praying-space.jpg" className="block-img full-width" />
                        </div>
                    </div>
                </Paper>
                <Paper className="section no-padding" rounded={false} style={paperStyle} zDepth={5}>
                    <div id="quran-halaqa">
                        <div className="width40 ">
                            <img src="img/praying-space.jpg" className="block-img full-width" />
                        </div>
                        <div className="width60 alignTop section">
                            <h2 className="">Quran Halaqa</h2>
                            <p className="section-text resource-description">{this.state.halaqa}
                            </p>
                            <FlatButton label="Sign up"/>
                        </div>
                    </div>
                </Paper>
                <div id="handbook">
                    <h2 className="no-margin">New Students Handbook</h2>
                    <p id="handbook-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis cursus libero pulvinar gravida.
                        Sed purus risus,tempus a condimentum quis,</p>
                    <RaisedButton secondary={true} target="_blank" href="handbook.pdf" label="Download PDF" style={buttonStyle}/>
                </div>
            </div>
        );
    }
}
