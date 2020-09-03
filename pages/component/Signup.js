import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  { Component, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import App_bar from './App_bar.js';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignUp() {
    const classes = useStyles();


 const Router = useRouter();

 const [fullName, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [passwordTwo, setPasswordTwo] = useState("");

 const [fullNameVal, setFullName] = useState();
 const [emailVal, setEmailVal] = useState();
 const [passVal, setPasswordVal] = useState();
 const [passValTwo, setPasswordValTwo] = useState();

 const inputName = (event) => {
   setName(event.target.value);
   return true;
 };

 const inputEmail = (event) => {
   setEmail(event.target.value);
   return true;
 };

 const passOne = (event) => {
   setPassword(event.target.value);
   return true;
 };

 const passTwo = (event) => {
   setPasswordTwo(event.target.value);
   return true;
 };

 const submitFunction = () => {
   setFullName(fullName);
   setEmailVal(email);
   setPasswordVal(password);
   setPasswordValTwo(passwordTwo);

   try {
     var letters = /^[A-Za-z ]+$/;
     if (fullName.match(letters)) {
       
     } else {
       alert("Wrong name formate ");
       return false;
     }
   } catch (err) {}

   try {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      
     } else {
       alert("You have entered an invalid email address!");
       return false;
     }
   } catch (err) {}

   try {
     if (password == passwordTwo) {
      
     } else {
       alert("Password did not match ");
       return false;
     }
   } catch (error) {}

   window.localStorage.setItem("fullNames", fullName);
   window.localStorage.setItem("emailIds", email);
   window.localStorage.setItem("psw", passwordTwo);

   if (fullName != null && email != null && passwordTwo != null) {
     Router.push("/component/Login");
  
     return true;
   } else {
     return false;
   }
 };
function signinPage(){
         Router.push("/component/Login");
}
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                  onChange={inputName}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={inputEmail}
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
                  onChange={passOne}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="RePassword"
                  label="Re-Password"
                  type="password"
                  id="RePassword"
                  autoComplete="current-password"
                  onChange={passTwo}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
             
              onClick={submitFunction}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                  <a onClick={signinPage}>
                    Already have an account? Sign in
                  </a>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </React.Fragment>
    );
}

export default dynamic(() => Promise.resolve(SignUp), {
  ssr: false,
});