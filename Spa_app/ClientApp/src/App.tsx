import React ,{Component} from 'react';
//import { Route } from 'react-router';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import  { Simple } from './components/LandingPage/Simple'


export default class App extends Component
{
  render() {
    return(
      <Router>
      <div>
        <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/simple' component={Simple} />
      </Layout>
      </div>
    </Router>
    )
  }
};
