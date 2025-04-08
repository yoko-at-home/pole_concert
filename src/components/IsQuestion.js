import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  lineHeight: "0.2rem",
  whiteSpace: "nowrap",
  padding: 0,
});

export const IsQuestion = ({ IsChecked, setIsChecked }) => {
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Root>
      <div style={{ color: "purple", fontSize: "0.7rem" }}>質問する</div>
      <Checkbox
        checked={IsChecked}
        onChange={handleChange}
        color="secondary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </Root>
  );
};
