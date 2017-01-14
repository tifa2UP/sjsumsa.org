# SJSU MSA's website
  
 #### Assalamulaikum, this repo contains the source code for sjsumsa.org
 
 ###Stack
 
 * React.js
 * Material-UI
 * Firebase
 * Webpack
 * Babel
 
 Other items and version numbers could be found in 'package.json'

 
 ###Design: 
 
 <p> The website implements Google's material design. You can read more about it <a href="google.com">here</a>
 
 ###Reporting an issue
 
 If you find a bug or would like to add a suggestion/feature, you can do through using Github Issues.
  
  ###Firebase access
  
  The API keys for firebase are masked. If you'd like to access firebase for debugging or deployment purposes shoot us an email at dev@sjsumsa.org
  
  ###Installation instructions
  
  1. Clone or Fork the repo
  2. Make sure that you have a recent version of npm installed. If not, you can download it from http://npm.org
  3. Open the terminal and cd to your project directory
  4. Type npm install to install all the dependencies
  5. Type npm start to run a local server
  6. You access the website on http://localhost:3000/
  
  ###Architecture
  
  The website is a single page application:
  
  www/index.html contains the HTML file in which the app is appended to. Include in this file all the meta tags, open graph attributes and cdns
  
  The react application is appended to the app id in the index file.
   
  Main.js contains all the Components used by the website. You can overwrite the default palette by changing the MUI-Theme variable

  You'll find each of the components in the app directory
  
  ###License
  
  We made our license MIT. You can use the source code in anyway you want. ;) 
  
  ###Question
  If you have any questions, we'd be happy to answer it at dev@sjsumsa.org