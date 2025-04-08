import React, { useEffect, useState } from 'react';
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { query, orderByKey, limitToLast, onValue } from "firebase/database";

import MessageItem from "./MessageItem";
import { messagesRef } from "../firebase";

const Root = styled("div")({
  gridRow: 1,
  overflow: "auto",
  width: "100%",
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesQuery = query(messagesRef, orderByKey(), limitToLast(3000));
    return onValue(messagesQuery, (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;

      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, []);

  const length = messages.length;

  return (
    <List className={Root}>
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
