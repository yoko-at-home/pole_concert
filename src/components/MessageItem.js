import React, { useEffect, useRef } from 'react';
import Linkify from 'react-linkify'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { gravatarPath } from '../gravatar';

const InlineTypography = styled(Typography)({
  display: "inline",
  color: "#endregion",
  wordBreak: "break-word",
});

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target='_blank' rel='noopener noreferrer'>
      {text}
    </a>
  );

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <InlineTypography
            component="span"
            variant="body2"
            color="text.primary"
          >
            <Linkify componentDecorator={componentDecorator}>{text}</Linkify>
          </InlineTypography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
