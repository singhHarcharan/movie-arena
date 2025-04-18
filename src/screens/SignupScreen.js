import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";

function SignupScreen() {
    const emailRef = useRef(null);      // Email for Reference
    const passwordRef = useRef(null);   // Password for Reference

    // For Registering new user.
    const register = (e) => {
        e.preventDefault(); // use to prevent from reloading page after clicking.

        // Registering new user using new Typed Email and Password by
        // picking its values from emailRef and PasswordRef.
        auth
        .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    // For Sign In Already existing user.
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        ).then((authUser) => {
          console.log(authUser)
        })
        .catch((error) => {
            alert(error.message);
        });
    };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
