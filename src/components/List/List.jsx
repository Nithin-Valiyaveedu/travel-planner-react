import React, { useState } from "react";
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const places = [
    { name: "Cool Place1" },
    { name: "Cool Place2" },
    { name: "Cool Place3" },
    { name: "Cool Place4" },
    { name: "Cool Place5" },
    { name: "Cool Place6" },
    { name: "Cool Place7" },
    { name: "Cool Place8" },
    { name: "Cool Place9" },
    { name: "Cool Place10" },
    { name: "Cool Place11" },
    { name: "Cool Place12" }
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Plan Your Journey!{" "}
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attraction</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Ratings</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
              <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
