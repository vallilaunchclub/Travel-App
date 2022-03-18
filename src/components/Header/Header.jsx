import React, { useState } from "react";

import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import "./Header.css";

import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <AppBar position="relative">
      <Toolbar className= "toolbar">
        <Box display="flex">
          <Typography variant="h4" className="title-explo">
            Explore the 🌎 
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
