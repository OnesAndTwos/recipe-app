import React, {Component} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Dialog, {DialogTitle, DialogContent, DialogContentText, DialogActions} from "material-ui/Dialog";

import withRoot from "../styles/withRoot";
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    marginTop: "30px",
  }
});

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

        <AppBar color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Cookbook
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={24} className={this.props.classes.container}>

          <Grid item xs={12}>

          </Grid>

          <Grid className={this.props.classes.thing} item xs={4}>
          </Grid>

          <Grid className={this.props.classes.thing} item xs={4}>
          </Grid>

          <Grid className={this.props.classes.thing} item xs={4}>
          </Grid>

          <Grid className={this.props.classes.thing} item xs={4}>
          </Grid>

          <Grid className={this.props.classes.thing} item xs={4}>
          </Grid>

          <Grid className={this.props.classes.thing} item xs={4}>
          </Grid>

          <Grid item xs={12}>

            <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
              <DialogTitle>Cookbook</DialogTitle>
              <DialogContent>
                <DialogContentText>{this.props.message}</DialogContentText>
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

const mapStateToProps = (state) => {
  return {
    message: state.message
  }

};

export default connect(
  mapStateToProps
)(withRoot(withStyles(styles)(Index)));