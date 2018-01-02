import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import withRoot from "../styles/withRoot";
import {withStyles} from "material-ui/styles";
import AppBar from "../components/AppBar";

const styles = theme => ({

  root: {
    flexGrow: 1,
    marginTop: "65px",
    padding: "0 12px"
  },

});

class Search extends Component {

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>

        <AppBar />

        <Grid container spacing={24}>

          <Grid item xs={12}>

            <TextField
              id="search"
              label="search"
              autoComplete="Search"
              type="search"
              margin="normal"
              fullWidth
              value={this.props.searchTerm}
            />

          </Grid>

        </Grid>

      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {

  console.log(state);

  return {
    searchTerm: state.search.searchTerm
  }

};

export default connect(
  mapStateToProps
)(withRoot(withStyles(styles)(Search)));