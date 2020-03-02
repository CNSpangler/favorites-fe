import React, { Component } from 'react'
import { BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Search from './Search';
import Favorites from './Favorites';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/" component={Favorites} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}