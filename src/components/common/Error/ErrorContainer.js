import Error from './Error';
import { connect } from 'react-redux';
import { authActions, authSelectors } from '../../../redux/auth';


const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
});

const mapDispatchToProps = {
  unsetAuthError: authActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
