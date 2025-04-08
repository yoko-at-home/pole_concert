import React from 'react';
import { styled } from "@mui/material/styles";

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const Root = styled("div")({
  display: "grid",
  height: "100vh",
  gridTemplateRows: "1fr auto",
  background: "radial-gradient(circle, rgba(1,17,97,1) 48%, #110104 96%)",
  color: "#fff",
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
