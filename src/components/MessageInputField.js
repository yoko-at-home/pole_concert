import React, { useRef, useState } from 'react';
import { Avatar, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';
import { IsQuestion } from "./IsQuestion";

const Root = styled("div")({
  gridRow: 2,
  margin: "26px",
  backgroundColor: "#e7f5ed",
  borderRadius: "5px",
  padding: "1rem",
  color: "#fff",
});

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null);
  const [text, setText] = useState("");
  const avatarPath = gravatarPath(name);
  const [IsChecked, setIsChecked] = useState(false);

  return (
    <Root>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={9}>
          <MessageField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <IsQuestion IsChecked={IsChecked} setIsChecked={setIsChecked} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
            IsChecked={IsChecked}
          />
        </Grid>
      </Grid>
    </Root>
  );
};

export default MessageInputField;
