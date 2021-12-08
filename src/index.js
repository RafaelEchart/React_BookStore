import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoriesPage from './components/CategoriesPage';
import BooksPage from './components/BooksPage/index';
import './index.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/index';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={BooksPage} />
        <Route path="/categories" component={CategoriesPage} />

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);