import React from 'react';

import LoadingBar from 'react-redux-loading-bar'

export default class App extends React.Component {

  render() {
    const { children, app, actions, location } = this.props;
    return (
      <div>
          {children}
      </div>
    )
  }
}
