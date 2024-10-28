import React, { useEffect, useState } from "react";
import "./Nav.css";
import { createBrowserHistory } from "history";

function Nav() {
  const [show, handleShow] = useState(false);
  /*
      useHistory();
      When using React Router, useHistory allows you to access the history object. In return, it makes it possible to 
      access and change the state of browser history. useHistory is one of the react hooks that help you make the navigation 
      of your applications robust and efficient.
  */
  const history = createBrowserHistory({forceRefresh:true});

  const transitionNavBar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">

        {/* 
            On Clicking Netflix logo on top-left, it will route you to original page.
        */}
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />

        {/* 
          On Clicking avatar of user on top-right it is going to open profile page.
          to get know about user's Information.
        */}
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbMogdPslbZaa9Th1hRvCCtzveStfagjWjw&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
