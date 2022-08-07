import React from "react";
import {Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/body";
import Footer from "./components/footer"
function App() {
    return (
        <div className="App">
          <Header />
          <Switch> 
          <Route exact path="/home">
          <Body />
            <Footer />
        </Route> 
            
            </Switch>
        </div>
    )
}
export default App;

