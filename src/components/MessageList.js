import React, { useEffect, useState } from 'react';
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Root = styled("div")({
  gridRow: 1,
  overflow: "auto",
  width: "100%",
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(3000)
      .on('value', (snapshot) => {
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
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
      >
        <Tab label="すべてのメッセージ" {...a11yProps(0)} />
        <Tab label="質問だけ見る" {...a11yProps(1)} />
      </Tabs>
      <List className={Root}>
        {messages
          .filter(({ IsChecked }) => IsChecked === true || value === 0)
          .map(({ key, name, text, IsChecked }, index) => {
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
    </>
  );
};

export default MessageList;
