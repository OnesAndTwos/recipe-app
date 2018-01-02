import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import withRoot from "../styles/withRoot";
import {withStyles} from "material-ui/styles";
import AppBar from "../components/AppBar";

const styles = theme => ({

  root: {
    flexGrow: 1
  },

  container: {
    marginTop: "65px",
  }

});

class Index extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <AppBar />

        <Grid container spacing={24} className={classes.container}>

          <Grid item xs={12}>
            <Typography type="subheading" gutterBottom>
              Index {this.props.message}
            </Typography>
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