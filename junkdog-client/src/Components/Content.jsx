import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Content extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles, { withTheme: true })(Content);
