import React, { useEffect, useState } from 'react';
import { List, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { query, orderByKey, limitToLast, onValue } from "firebase/database";

import MessageItem from "./MessageItem";
import { messagesRef } from "../firebase";

const Root = styled("div")({
  gridRow: 1,
  overflow: "auto",
  width: "100%",
  height: "calc(100vh - 200px)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "5px",
  margin: "20px",
  padding: "10px",
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesQuery = query(messagesRef, orderByKey(), limitToLast(3000));
    return onValue(messagesQuery, (snapshot) => {
      const messages = snapshot.val();
      console.log("Firebase Messages:", messages);
      if (messages === null) {
        console.log("No messages found in Firebase");
        return;
      }

      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      console.log("Processed Messages:", newMessages);
      setMessages(newMessages);
    });
  }, []);

  const length = messages.length;

  return (
    <List className={Root}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          p: 2,
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          ポレポーレ第3回コンサートご来場ありがとうございます
        </Typography>
      </Box>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;
        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
