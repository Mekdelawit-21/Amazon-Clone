import React, { useState,useContext } from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom';
import {auth} from '../../Utility/firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import { DataProvider} from '../../Components/DataProvider/DataProvider'


function Auth() {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [error, setError] = useState("");

     const [{user},dispatch] = useContext(DataProvider)

        console.log(user);

   const authHandled = async (e) =>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name == 'singin'){

      //firebase auth
      signInWithEmailAndPassword(auth, email, password).then((userInfo) =>{
        
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
      })
      .catch((error) =>{
        console.log(err);
      })

    }else{
       createUserWithEmailAndPassword(auth, email, password).then((userInfo) =>{
        
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
      })
      .catch((error) =>{
        console.log(err);
      })

    }
   };


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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandled} name='signin'
            className={classes.login_sigInButton}
          >
            Sign In
          </button>
        </form>

        {/*agreement*/}
        <p>
          By singing-in your agree to the AMAZON FAKE CLONE conditions of use &
          Sale. Please see our Privacy Notice, our Cooking Notice and
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          onClick={authHandled} name='signup'
          className={classes.login_registerButton}
        >
          Create Your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
