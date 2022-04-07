# FCONN
This is an updated MERN stack version of the Old_FCONN project. In the future, It will also be available on mobile. However we stuck to the website version for this semester. (Fall 2021)

To start up the project you will need to install npm, node.js, and bootstrap installed. VS code is the preferred IDE for development.

### Node.js and NPM:
* Visit https://nodejs.org/en/download/ and download the installer for your OS.
* Node.js and NPM will be installed using the above link.
* To verify the install was successful, run "node -v" then "npm -v" in your terminal without the quotations.

**The next steps will require you have installed Node.js and NPM correctly.** 

### MaterialUI and other dependencies:
* Navigate to the FCONN folder and open it up in the terminal.  
* Type the command "npm install" without the quotations.
* This command will install all of the dependencies in the package.json file.


### Starting the project: 
* Navigate to the FCONN folder and open it up in the terminal.
* I recommend using Visual Studio Code for this project.
* Install the latest node.js lts version.
* Run npm install in the terminal of this project.
* Type the command "npm start" without the quotations. 
* The localhost react app will start in your default browser.
* The full functionality of the project will not be available unless you have the FCONN Backend runnng as well.
* You can check your global dependencies with this command: npm list -g --depth=0
* The only global depedency you need is nodemon for this project.
* You can install by typing "npm install -g nodemon" in the terminal.
* Install the Google Maps API by using the command "npm i @react-google-maps/api"
* Install the Survey API with "npm install survey-react"
* Link to the Backend repo https://github.com/lucasdale99/FCONN_Backend

### Making Changes to Google API Services
* https://console.cloud.google.com/home/dashboard?project=foodconnection-328003
	

Don't forget:
1. When working in react, you need to import the components you want to use. If you get errors similar to can't find estate, you need to import that like:
    import {useState} from "react";

1. This is the same for all components. Each component if used in a certain view, needs to be imported.
