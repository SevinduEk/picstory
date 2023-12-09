import React from "react";
// import { Link } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import logo from "../../images/social-media.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        PicStory
      </Typography>
      <img className={classes.image} src={logo} alt="picStory" height="60" />
    </AppBar>
  );
};

export default Navbar;
