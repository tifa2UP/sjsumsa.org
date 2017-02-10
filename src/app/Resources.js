/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";


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

    componentWillMount(){
        const prayingSpaceRef = firebase.database().ref('Praying Space');
        prayingSpaceRef.on('value', snap => {
            this.setState({
                prayingSpace: snap.val()
            });
        });
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
                            <p className="section-text resource-description">The on-campus praying space is located in the Mosaic
                                Cross Cultural Center. Located on the east side of the Student Union. The space is also equipped with a
                                wudoo’ (ablution) area.</p>

                            <div className="section-text resource-description">
                                The praying space is open on: <br/>
                                <ul>
                                    <li>M-Th: 9 am to 8 pm</li>

                                    <li>Fr: 9 am - 5 pm </li>
                                </ul>
                            </div>
                            <FlatButton label="Location by video" onTouchTap={this.handleOpen}/>
                            <Dialog
                                title="Prayer Space Location"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                            >
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ydn7Nvh1oUQ" frameBorder="0" allowFullScreen></iframe>
                            </Dialog>
                        </div>

                        <div className="width40 ">
                            <img src="img/praying_space.jpg" className="block-img full-width" />
                        </div>
                    </div>
                </Paper>
                <Paper className="section no-padding" rounded={false} style={paperStyle} zDepth={5}>
                    <div id="quran-halaqa">
                        <div className="width40 ">
                            <img src="img/quran_halaqa.jpg" className="block-img full-width" />
                        </div>
                        <div className="width60 alignTop section">
                            <h2 className="">Quran Halaqa</h2>
                            <p className="section-text resource-description">
                                We have a weekly Qur'an halaqa (session) in which we review or memorize a part of Qur'an. <br/>
                            </p>
                            <p>
                                location: TBD for Spring <br/>
                                Time: TBD for Spring
                            </p>
                            <FlatButton label="Sign up" href="https://goo.gl/forms/IaJ2wnABFBDH42ax1" target="_window"/>
                        </div>
                    </div>
                </Paper>
                <div id="handbook">
                    <h2 className="no-margin">New Students Handbook</h2>
                    <p id="handbook-description">Find off-campus Mosques, Roommates, Halal Restaurants and our unofficial hangout spot!</p>
                    <RaisedButton secondary={true} target="_blank" href="handbook.pdf" label="Download PDF" style={buttonStyle}/>
                </div>
            </div>
        );
    }
}
