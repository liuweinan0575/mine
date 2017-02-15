import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore';
import { AppContainer, BlogContainer, PostContainer } from './containers';
import { HomeView, AboutView, ContactView } from './views';

/// intialize redux store values
// const store = configureStore(hashHistory, window.__INITIAL_STATE__);
const store = configureStore(hashHistory);

const history = syncHistoryWithStore(hashHistory, store);

export default class Root extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <Router history={history} >
          <Route path="/" component={AppContainer} >
            <IndexRoute component={HomeView} />
            <Route path="blog" component={BlogContainer} />
            <Route path="post/:id" component={PostContainer} />
            <Route path="about" component={AboutView} />
            <Route path="contact" component={ContactView} />
          </Route>
      </Router>
    </Provider>
    )
  }
}
