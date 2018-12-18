import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';

import TemplateContainer from 'containers/TemplateContainer';
import NotFound from 'containers/NotFound';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={TemplateContainer} />
          <Route exact path="/404" component={NotFound} />
        </Switch>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
