/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default class Routes extends React.Component<Props> {
  render() {
    return (
      <App>
        <Switch>
          <Route path="/counter" component={CounterPage} i18n={this.props.i18n} />
          <Route path="/" component={HomePage} i18n={this.props.i18n} />
        </Switch>
      </App>
    );
  }
}
