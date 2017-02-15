
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../redux/app';
import { AppView } from '../views';

function mapStateToProps(state) {
  const { app } = state;
  return {
    app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
