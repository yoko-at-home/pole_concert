import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList";

const Root = styled("div")({
  display: "grid",
  height: "100vh",
  gridTemplateRows: "1fr auto",
  color: "#endregion",
  marginBottom: "20px",
});

const InputContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0px",
  // paddingRight: "calc(26px + 48px)",
  backgroundColor: "white",
  marginBottom: "20px",
});

const NameContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "20px", // 26px (margin) + 48px (send button width)
  margin: "0px, 6px, 0px, 6px",
});

const Main = () => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setDisabled(value === "");
    setNameError(false);
  };

  const handleMessageSubmit = () => {
    if (!name) {
      setNameError(true);
    }
  };

  return (
    <Root>
      <MessageList />
      <InputContainer>
        <MessageInputField
          name={name}
          disabled={disabled}
          onMessageSubmit={handleMessageSubmit}
        />
        <NameContainer>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            label="名前 | ニックネーム"
            name="name"
            value={name}
            onChange={handleNameChange}
            error={nameError}
            helperText={
              nameError ? "メッセージを送信するには名前を入力してください" : ""
            }
            sx={{ maxWidth: "400px" }}
          />
        </NameContainer>
      </InputContainer>
    </Root>
  );
};

export default Main;
