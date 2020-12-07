import Layout from './Layout';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';

const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
});
const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
