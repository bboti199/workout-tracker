import React from 'react';

import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className='column is-4 is-offset-4 animated fadeInDown'>
      <div className={`notification is-${alert.alertType}`}>{alert.msg}</div>
    </div>
  ));

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
