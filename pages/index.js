import Head from 'next/head';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import {Button, Link} from '@material-ui/core';
import App_bar from './component/App_bar';
import dynamic from "next/dynamic";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
    },
  },
 
}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
     <App_bar/>
     
    <div className="row " id="Body">
        <div className="medium-12 columns">
          <h2 id="welcomeText">Welcome to Mysite</h2>

          <div className={classes.root}>
            <Link href="/component/Login">
            <Button variant="contained" color="primary">
         
              <a className={classes.btnStyle}>Login</a>
        </Button>
          </Link>
          <Link href="/component/Signup">
        <Button variant="contained" color="primary">
        
         <a className={classes.btnStyle}>Register</a>
        </Button>
        </Link>
      </div>
      </div>
     </div>
      </React.Fragment>
      
  );
}
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});