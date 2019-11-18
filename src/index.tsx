import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
const name = `
888888ba           oo oo          dP     dP                    dP                
88    '8b                         88     88                    88                
88     88 .d8888b. dP dP .d8888b. 88aaaaa88a .d8888b. .d8888b. 88  .dP  .d8888b. 
88     88 88'  '88 88 88 88'  '88 88     88  88'  '88 88'  "" 88888"   Y8ooooo. 
88     88 88.  .88 88 88 88.  .88 88     88  88.  .88 88.  ... 88  '8b.       88 
dP     dP '88888P8 dP 88 '88888P8 dP     dP  '88888P8 '88888P' dP   'YP '88888P' 
                      88                                                         
                      dP                                                         
                      d8888b.  a8888a  d88  .d888b.                                                    
                          '88 d8' ..8b  88  Y8' '88                                                    
                      .aaadP' 88 .P 88  88  '8bad88                                                    
                      88'     88 d' 88  88      '88                                                    
                      88.     Y8'' .8P  88  d.  .88                                                    
                      Y88888P  Y8888P  d88P '8888P                                                     
`;

/* eslint-disable no-console */
console.log(name);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
