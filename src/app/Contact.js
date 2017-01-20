var React = require('react');
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import {cyan300} from 'material-ui/styles/colors';

const bgColor = {
    backgroundImage:  'url("img/circles-25.jpg")',
};

const leftAlign = {
    textAlign: 'left',
    // color: 'white'
};

const fullWidth = {
    width: '100%'
};

const whiteColor = {
    // color: 'white'
};

const buttonStyle = {
    marginTop: '20px',
    // color: 'white'
};
const blackColor = {
    color: 'black'
};

export default class Contact extends React.Component {

    state = {
        name: '',
        category: null,
    };

    // handleChange = (event, index, value) => this.setState({category});

    render () {

        return (
            <Paper className="section" style={bgColor} rounded={false} id="contact">
                <h1 className="headingStyle1 ">CONTACT</h1>
                <div>
                    <div id="contact-form" className="alignTop">
                        <form>
                            <TextField
                                type="text"
                                fullWidth={true}
                                floatingLabelText="Name"
                                style={whiteColor}
                            /><br />
                            <SelectField style={leftAlign} fullWidth={true}
                                         floatingLabelText="Category"
                                         value={this.state.category}
                                         onChange={this.handleChange}
                                         menuItemStyle={blackColor}
                            >
                                <MenuItem value={1} primaryText="Suggestion" />
                                <MenuItem value={2} primaryText="Event invitation" />
                                <MenuItem value={3} primaryText="Question" />
                                <MenuItem value={4} primaryText="Housing" />
                                <MenuItem value={5} primaryText="Donation" />
                                <MenuItem value={6} primaryText="Website bug/typo" />
                                <MenuItem value={7} primaryText="Other" />
                            </SelectField>
                            <br />

                            <TextField fullWidth={true}
                                       type="email"
                                       floatingLabelText="E-mail"
                                        style={whiteColor}
                            /><br />
                            <TextField style={leftAlign}  fullWidth={true}
                                       multiLine={true}
                                       rows={4}
                                       rowsMax={4}
                                       required="true"
                                       floatingLabelText="Message"
                            /><br />
                        </form>
                        <FlatButton label="Submit" style={buttonStyle} />
                    </div>

                    <div id="social" className="alignTop alignLeft">
                        <h4 className="">Find us on social media</h4>
                        <a href="https://www.facebook.com/groups/5696549276/" target="_blank"><i className="fa fa-facebook hvr-grow"></i></a>
                        <a href="https://www.instagram.com/msa_sjsu/" target="_blank"><i className="fa fa-instagram hvr-grow"></i> </a>
                    </div>

                </div>
            </Paper>
        );
    }
}

