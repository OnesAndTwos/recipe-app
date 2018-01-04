import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import withRoot from "../styles/withRoot";
import {withStyles} from "material-ui/styles";
import AppBar from "../components/AppBar";
import Typography from "material-ui/Typography";

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

        {
          this.props.recipes.map((recipe, index) => (
            <Grid key={recipe.id} container spacing={24}>


              <Grid item xs={1} md={1}>
                <Typography type="display2" gutterBottom>
                  {index+1}
                </Typography>
              </Grid>

              <Grid item xs={11} md={5}>
                <img src={recipe.image} width="100%" />
              </Grid>

              <Grid item xs={12} md={6}>

                <Typography type="display2" gutterBottom>
                  {recipe.title}
                </Typography>

                <Typography gutterBottom>
                  {recipe.timings.cooking}
                </Typography>

                <Typography gutterBottom>
                  {recipe.timings.preparation}
                </Typography>

              </Grid>

            </Grid>
          ))
        }

      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {

  return {
    searchTerm: state.search.searchTerm,
    recipes: state.search.results
  }

};

export default connect(
  mapStateToProps
)(withRoot(withStyles(styles)(Search)));