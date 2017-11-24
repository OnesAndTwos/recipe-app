import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withRoot from '../styles/withRoot';

import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';

const styles = {
  root: {

  },
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>

        <Grid container spacing={24}>
          <Grid item xs={12}>

            <AppBar title="Cookbook" />

          </Grid>
          <Grid item xs={12}>

            <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
              <DialogTitle>Cookbook</DialogTitle>
              <DialogContent>
                <DialogContentText>Soon there will be recipes here</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={this.handleRequestClose}>
                  OK
                </Button>
              </DialogActions>
            </Dialog>

            <Typography type="subheading" gutterBottom>
              Cookbook
            </Typography>
            <Button raised color="accent" onClick={this.handleClick}>
              Open Cookbook
            </Button>

          </Grid>
        </Grid>

      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));