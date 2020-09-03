import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import App_bar from './App_bar.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function Login()   {

      const classes = useStyles();

      const Router = useRouter();
    var getEmail;
    var getPassword;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmailfn = (event) => {
      setEmail(event.target.value);
      return true;
    };

    const getPass = (event) => {
      setPassword(event.target.value);
      return true;
    };

    const loginFn = () => {
      getEmail = localStorage.getItem("emailIds");
      getPassword = localStorage.getItem("psw");

      if (getEmail == email && getPassword == password) {
                 Router.push("/component/DashBoard");

        return true;
      } else {
        return false;
      }
    };

    return ( 
      <React.Fragment>
    <App_bar/>


      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={getEmailfn}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={getPass}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={loginFn}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
      </React.Fragment>
    );
  };

export default dynamic(() => Promise.resolve(Login), {
  ssr: false,
});
