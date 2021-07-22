import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";

function App() {
  return (
      <Router>
          <div className="everything">
            <Header />
            <div className="App">          
            <Switch>
                <Route exact path="/store" component={Store}></Route>
                <Route path="/store/:id" component={Details}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/checkout" component={Checkout}></Route>
            </Switch>
            <Footer />
            </div>
          </div>
        
    </Router>
  );
}

export default App;
