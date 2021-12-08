import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoriesPage from './components/CategoriesPage';
import BooksPage from './components/BooksPage/index';
import './index.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/index';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={BooksPage} />
        <Route path="/categories" component={CategoriesPage} />

      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);