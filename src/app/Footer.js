var React = require('react');
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";
import {cyan500} from 'material-ui/styles/colors';


const style = {
    textAlign: 'center',
    backgroundColor: cyan500,
    padding: 10,

};


export default class Footer extends React.Component {

    render () {

        return (
            <Paper style={style} zDepth={5}>Website made with <i style={{fontSize: 14, paddingBottom: 3}} className="fa fa-heart"/> by SJSU students</Paper>
        );
    }
}
