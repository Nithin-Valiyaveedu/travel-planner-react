import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  //set isMobile to false if the screensize is larger than 600px
  const isMobile = useMediaQuery("(min-width:600px");
  // const coordinates = { lat: 10.784703, lng: 76.653145 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCcYIqMZnUBjtRYYDIoAbTpvV-AdZH3VQI" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e)=>{
            setCoordinates({lat:e.center.lat, lng: e.center.lng})
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
