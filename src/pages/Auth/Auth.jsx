import React from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom';


function Auth() {
  return (
    <section className={classes.login}>
      {/*logo*/}
      <Link>
        <img
          src="https://commons.wikimedia.org/wiki/File:Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/*form*/}

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login_sigInButton}>
            Sign In
          </button>
        </form>
      
          {/*agreement*/}
          <p>
            By singing-in your agree to the AMAZON FAKE CLONE conditions of use & Sale. Please see our Privacy Notice, our Cooking Notice and Interest-Based Ads Notice. 
          </p>

          {/* create account btn */}
          <button className={classes.login_registerButton}>Create Your Amazon Account</button>

      </div>
    </section>
  );
}

export default Auth;
