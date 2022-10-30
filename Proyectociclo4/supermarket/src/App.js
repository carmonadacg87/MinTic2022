//import logo from './logo.svg';
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import CreateProduct from './components/create_product.component';
import EditProduct from './components/edit_product.component';
import ProductList from './components/product-list.component';

function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-product"} className="nav-link">
                App SuperMarket
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </Router>
    </div>
  );
}

export default App;
