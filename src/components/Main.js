import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
    background: "radial-gradient(circle, rgba(1,17,97,1) 48%, #110104 96%)",
    color: "#fff",
  },
});

const Main = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <MessageList />
        <MessageInputField name={name} />
    </div>
  );
};

export default Main;
