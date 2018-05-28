import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    margin: 0,
  },
});

class AppLayout extends Component {
  render() {
    const { classes, children } = this.props;
    return <div className={classes.root}>{children}</div>;
  }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppLayout);
