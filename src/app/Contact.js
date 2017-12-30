var React = require('react');
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import {cyan300} from 'material-ui/styles/colors';

const bgColor = {
    backgroundColor: 'rgb(252, 252, 252)',
};

const leftAlign = {
    textAlign: 'left',
};

const fullWidth = {
    width: '100%'
};


const buttonStyle = {
    marginTop: '20px',
    // color: 'white'
};
const blackColor = {
    color: 'black'
};

let iconStyle = {
  fontSize: 28,
  marginLeft: 15,
  marginRight: 15,
}

export default class Contact extends React.Component {

    state = {
        name: '',
        category: null,
        email: '',
        message: '',
    };

    handleNameChange(event) {
        this.setState({

        });
        console.log(this.state.name);
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(this);
    };
    handleChange = (event, index, value) => this.setState({value});

    render () {

        return (
            <Paper className="section" style={bgColor} rounded={false} id="contact">
                <h2 className="headingStyle1 ">CONTACT</h2>
                <div>
                    <div id="contact-form" className="alignTop">
                        {/*<form onSubmit={this.handleSubmit} action="https://formspree.io/tifa3333@gmail.com" method="POST">*/}
                            {/*<TextField*/}
                                {/*type="text"*/}
                                {/*fullWidth={true}*/}
                                {/*floatingLabelText="Name"*/}
                            {/*/><br />*/}
                            {/*<SelectField style={leftAlign} fullWidth={true}*/}
                                         {/*floatingLabelText="Category"*/}
                                         {/*value={this.state.category}*/}
                                         {/*onChange={this.handleChange}*/}
                            {/*>*/}
                                {/*<MenuItem value={1} primaryText="Suggestion" />*/}
                                {/*<MenuItem value={2} primaryText="Event invitation" />*/}
                                {/*<MenuItem value={3} primaryText="Question" />*/}
                                {/*<MenuItem value={4} primaryText="Housing" />*/}
                                {/*<MenuItem value={5} primaryText="Donation" />*/}
                                {/*<MenuItem value={6} primaryText="Website bug/typo" />*/}
                                {/*<MenuItem value={7} primaryText="Other" />*/}
                            {/*</SelectField>*/}
                            {/*<br />*/}

                            {/*<TextField fullWidth={true}*/}
                                       {/*type="email"*/}
                                       {/*floatingLabelText="E-mail"*/}
                            {/*/><br />*/}
                            {/*<TextField style={leftAlign}  fullWidth={true}*/}
                                       {/*multiLine={true}*/}
                                       {/*rows={4}*/}
                                       {/*rowsMax={4}*/}
                                       {/*required="true"*/}
                                       {/*floatingLabelText="Message"*/}
                            {/*/><br />*/}
                            {/*<FlatButton label="Submit" value="Submit" type="submit" style={buttonStyle} />*/}
                        {/*</form>*/}
                    E-mail: inbox@sjsumsa.org
                    </div>

                    <div id="social" className="alignTop alignLeft">
                        <h4 className=""></h4>
                        <a style={iconStyle} href="https://www.facebook.com/groups/5696549276/" target="_blank"><i className="fab fa-facebook-f hvr-grow"></i></a>
                        <a style={iconStyle} href="https://www.instagram.com/msa_sjsu/" target="_blank"><i className="fab fa-instagram hvr-grow"></i> </a>
                    </div>

                </div>
            </Paper>
        );
    }
}
