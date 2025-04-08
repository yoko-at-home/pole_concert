import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "0.2rem",
    whiteSpace: "nowrap",
    padding: 0,
  },
});

export const IsQuestion = ({ IsChecked, setIsChecked }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <div style={{ color: "purple", fontSize: "0.7rem" }}>質問する</div>
      <Checkbox
        checked={IsChecked}
        onChange={handleChange}
        color='purple'
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};
