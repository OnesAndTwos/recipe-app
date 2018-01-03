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
    flexGrow: 1,
    marginTop: "75px",
    padding: "0 12px"
  },

});

class Index extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <AppBar />

        <Grid container spacing={24}>

          <Grid item xs={6}>
            <img src="//ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/chicken_cacciatore_with_54620_16x9.jpg" />
          </Grid>

          <Grid item xs={6}>

            <Typography type="display2" gutterBottom>
              Welcome to the BBC Food Cookbook!
            </Typography>

            <Typography gutterBottom>
              This is to Showcase the integration with Google Home
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