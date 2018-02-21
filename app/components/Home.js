// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next'
import styles from './Home.css';

type Props = {};

class Home extends Component<Props> {
  props: Props;

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>{t('links.link1')}</h2>
          <Link to="/counter">{t('links.link2')}</Link>
          <button onClick={() => changeLanguage('fr')}>fr</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
      </div>
    );
  }
}

export default translate('translations')(Home);