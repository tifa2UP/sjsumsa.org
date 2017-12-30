var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper'

let divStyle = {
height:"100vh",
width: "100%",
backgroundImage: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
textAlign: "Center",
paddingTop: "30vh",
fontSize: "130%"
}

let heading2Style = {
  marginTop: 0,
}

let heading1Style = {
  marginBottom: 100,
}
let socialIconStyle = {
  marginLeft: 40,
  marginRight: 40,
  fontSize: 42,
}
let chevronDownStyle = {
  position: "absolute",
  bottom: "5vh",
}
var Home = React.createClass({
    render(){
        return (
            <div style={divStyle}>
              <h2 style={heading2Style}>San Jose State University</h2>
              <h1 style={heading1Style}>Muslim Student Association</h1>
              <div id="social" className="alignTop alignLeft">
                  <a style={socialIconStyle} href="https://www.instagram.com/sjsumsa/" target="_blank"><i className="fab fa-instagram hvr-grow"></i></a>
                  <a style={socialIconStyle} href="https://www.facebook.com/sjsumsa/" target="_blank"><i className="fab fa-facebook-f hvr-grow"></i></a>
                  <a style={socialIconStyle} href="https://m.me/join/AbZvqymuKjqEDwRx" target="_blank"><i className="fab fa-facebook-messenger hvr-grow"></i></a>
              </div>
              <br />
              <a style={chevronDownStyle} href="#about"><i className="fas fa-chevron-down hvr-grow"></i></a>
            </div>
        );
    }
});

module.exports = Home;
