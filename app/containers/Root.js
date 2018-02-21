// @flow
import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes i18n={this.props.i18n} />
        </ConnectedRouter>
      </Provider>
    );
  }
}
