import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://twitter.com/yokoiwasaki6"
        target="_blank"
        rel="noopener"
      >
        yoko
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Paper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <Form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoComplete="name"
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
            onClick={() => {
              setName(string);
            }}
          >
            はじめる
          </SubmitButton>
        </Form>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
