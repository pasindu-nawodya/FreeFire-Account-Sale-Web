import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/footer/footer";
import Index from "./component/index";
import Form from "./component/form";

export default function App() {
  return (
    <div>  
      <Router>                       
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  )
}