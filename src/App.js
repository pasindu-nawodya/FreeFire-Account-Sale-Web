import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/footer/footer";
import Index from "./component/index";
import Form from "./component/form";
import Freefire from "./component/freefire";
import Pubg from "./component/pubg";
import Details from "./component/details";

export default function App() {
  return (
    <div>  
      <Router>                       
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/form" exact component={Form} />
          <Route path="/freefire" exact component={Freefire} />
          <Route path="/pubg" exact component={Pubg} />
          <Route path="/details/:id" exact component={Details} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  )
}