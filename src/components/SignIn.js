import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { List, ListItem } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      yoko {new Date().getFullYear()}
    </Typography>
  );
}
function Notes() {
  return (
    <List>
      <ListItem>
        同じアイコンを使用したい場合は、同じ名前で入場してください。
      </ListItem>
    </List>
  );
}

const Root = styled("div")({
  minHeight: "100vh",
  backgroundImage: "url('/background.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Paper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  width: "100%",
  maxWidth: "400px",
}));

const Form = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export default function SignIn({ setName }) {
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  return (
    <Root>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            sx={{ width: "100%" }}
          >
            メッセージをどうぞ
          </Typography>
          <Form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="お名前 | ニックネーム可"
              name="name"
              autoFocus
              onChange={(e) => setString(e.target.value)}
              onKeyDown={(e) => {
                if (isComposed) return;

                if (e.key === "Enter") {
                  e.preventDefault();
                  setName(e.target.value);
                }
              }}
              onCompositionStart={() => setIsComposed(true)}
              onCompositionEnd={() => setIsComposed(false)}
            />
            <SubmitButton
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              disabled={disabled}
              onClick={() => setName(string)}
            >
              メッセージルームに入室
            </SubmitButton>
          </Form>

          <Box mt={8}>
            <Notes />
          </Box>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Paper>
      </Container>
    </Root>
  );
}
