import React from "react";
import PropTypes from "prop-types";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

import withRoot from "../styles/withRoot";
import {withStyles} from "material-ui/styles";

const styles = theme => ({

  bbc: {
    marginRight: "10px"
  },

  iplayer: {
    marginTop: "6px"
  }

});

class MyAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar color="default">
        <Toolbar>
          <img className={classes.bbc} src="//nav.files.bbci.co.uk/orbit/1.0.0-571.15b54a4/img/blq-orbit-blocks_white.svg"/>
          <img className={classes.iplayer} src="//static.bbci.co.uk/tviplayer/img/navigation/iplayer_pink.svg"/>
        </Toolbar>
      </AppBar>
    )
  }
};

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(MyAppBar));