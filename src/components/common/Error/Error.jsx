import React, { Component } from 'react';
import styles from './Error.module.css';

class Error extends Component {
  render() {
    const { authError, unsetAuthError } = this.props;

    return (
      <div className={styles.container}>
        <button
          className={styles.closeModal}
          onClick={authError && unsetAuthError()}
        ></button>
        <div className={styles.errorWrapper}>
          <h2 className={styles.errorTitle}>Oops, an error occurred</h2>
          {authError && <p className={styles.errorText}>{authError}</p>}
        </div>
      </div>
    );
  }
}

export default Error;
