import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next'
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import i18n from './i18n/i18n'

const store = configureStore();

render(
  <AppContainer>
    <I18nextProvider i18n={i18n()}>
      <Root store={store} history={history} />
    </I18nextProvider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <I18nextProvider i18n={i18n()}>
          <NextRoot store={store} history={history} />
        </I18nextProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
