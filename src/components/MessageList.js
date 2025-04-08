import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();
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
        aria-label='simple tabs example'
        centered
      >
        <Tab label='すべてのメッセージ' {...a11yProps(0)} />
        <Tab label='質問だけ見る' {...a11yProps(1)} />
      </Tabs>
      <List className={classes.root}>
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
