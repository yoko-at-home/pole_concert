import React from 'react';
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
  const handleSubmit = async () => {
    try {
      console.log("Submitting message:", { name, text });
      if (!name || !text) {
        console.error("Name or text is missing");
        return;
      }
      await pushMessage({ name, text });
      setText("");
      inputEl.current.focus();
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  return (
    <IconButton disabled={text === ""} onClick={handleSubmit}>
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
