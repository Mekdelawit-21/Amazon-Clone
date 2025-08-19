import React, { useState,useContext } from 'react'
import classes from './Signup.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {auth} from '../../Utility/firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import { ClipLoader} from "react-spinners";
import { DataProvider} from '../../Components/DataProvider/DataProvider'


function Auth() {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const [loading, setLoading] = useState({
      singIn: false,
      signUp: false
     })

     const [{user},dispatch] = useContext(DataProvider)
     const navigate = useNavigate()

        console.log(user);

   const authHandled = async (e) =>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name == 'singin'){

      //firebase auth
      setLoading({ ...loading, singIn: true})
      signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) =>{
        
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        })
        setLoading({ ...loading, signIn:false})
        navigate('/')
      })
      .catch((err) =>{
        setError(err.message);
         setLoading({ ...loading, signIn: false });
      })

    }else{
      setLoading({ ...loading, signUp:true})
       createUserWithEmailAndPassword(auth, email, password)
       .then((userInfo) =>{
        
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUp: false });
        navigate('/')
      })
      .catch((error) =>{
         setError(err.message);
         setLoading({ ...loading, signUp: false });
      })

    }
   };


  return (
    <section className={classes.login}>
      {/*logo*/}
      <Link to="/">
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
            onClick={authHandled}
            name="signin"
            className={classes.login_sigInButton}
          >
            {loading.singIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
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
          name="signup"
          onClick={authHandled}
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            " Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
