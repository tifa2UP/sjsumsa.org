var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper'

let divStyle = {
height:"100vh",
width: "100%",
backgroundImage: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
textAlign: "Center",
paddingTop: "25vh",
fontSize: "130%"
}

let heading2Style = {
  marginTop: 0,
}

let heading1Style = {
  marginBottom: 100,
}
let socialIconStyle = {
  marginLeft: 20,
  marginRight: 20,
}
var Home = React.createClass({
    render(){
        return (
            <div style={divStyle}>
              <h2 style={heading2Style}>San Jose State University</h2>
              <h1 style={heading1Style}>Muslim Student Association</h1>
              <div id="social" className="alignTop alignLeft">
                  <a style={socialIconStyle} href="https://www.facebook.com/groups/5696549276/" target="_blank"><i className="fa fa-facebook hvr-grow"></i></a>
                  <a style={socialIconStyle} href="https://www.facebook.com/groups/5696549276/" target="_blank"><i className="fa fa-facebook hvr-grow"></i></a>
                  <a style={socialIconStyle} href="https://www.instagram.com/msa_sjsu/" target="_blank"><i className="fa fa-instagram hvr-grow"></i></a>
              </div>
            </div>
        );
    }
});

module.exports = Home;
