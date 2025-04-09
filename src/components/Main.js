import React from 'react';
import { styled } from "@mui/material/styles";

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const Root = styled("div")({
  display: "grid",
  height: "100vh",
  gridTemplateRows: "1fr auto",
  // background:
  //   "radial-gradient(circle, rgb(126, 196, 237) 28%,rgb(84, 143, 128) 80%)",
  color: "#endregion",
});

const Main = ({ name }) => {
  return (
    <Root>
      <MessageList />
      <MessageInputField name={name} />
    </Root>
  );
};

export default Main;
