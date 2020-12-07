import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authSelectors, authActions } from '../../../redux/auth';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.toggleStateData();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.toggleStateData();
    }
  };

  toggleStateData = () => {
    const { authError, unsetAuthError } = this.props;

    authError && unsetAuthError();
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
});

const mapDispatchToProps = {
  unsetAuthError: authActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
