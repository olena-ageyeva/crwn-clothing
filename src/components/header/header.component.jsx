import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

import { auth } from "../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../crown.svg";

const Header = ({ user }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {user ? (
        <div className="option"  onClick={()=> auth.signOut()} >SIGN OUT</div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;