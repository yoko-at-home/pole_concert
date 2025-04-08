import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color='inherit' href='https://twitter.com/yokoiwasaki6'
        target='_blank'
        rel='noopener'>
        yoko
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = string === '';
    setDisabled(disabled);
  }, [string]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          【Qinの国民に告ぐ】
          <br />
          ニックネームを入力して入室し、鬨の声をあげよ！！
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='ニックネーム'
            name='name'
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              if (isComposed) return;

              if (e.key === 'Enter') {
                setName(e.target.value);
                e.preventDefault();
              }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={disabled}
            onClick={() => {
              setName(string);
            }}
          >
            Lightinig Talk会に参加する
          </Button>
        </form>
        <Typography component='p' variant='p'>
          <br />
          鬨の声（ときのこえ）とは
          <br />
          戦国時代の合戦において、開戦直前に士気を高める意味合いで「エイエイオー！」などと全軍で発する叫び声のことである
        </Typography>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
