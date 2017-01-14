var React = require('react');
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import {cyan300} from 'material-ui/styles/colors';


const style = {
    textAlign: 'center',
    backgroundColor: '#0097A7',
    padding: 10,

};


export default class Footer extends React.Component {

    render () {

        return (
            <Paper style={style} zDepth={3}>Website made with 3 by SJSU students</Paper>
        );
    }
}

