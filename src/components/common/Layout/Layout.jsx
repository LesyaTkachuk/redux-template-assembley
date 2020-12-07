import React from 'react';
import Error from '../Error';
import Modal from '../Modal';
import Spinner from '../Spinner';
import styles from './Layout.module.css';

class Layout extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const {
      children,

      authError,

      isAuthLoading,
    } = this.props;
    return (
      <div>
        {children}
        {isAuthLoading && (
          <Modal>
            <Spinner />
          </Modal>
        )}
        {authError && (
          <Modal>
            <Error />
          </Modal>
        )}
      </div>
    );
  }
}

export default Layout;
