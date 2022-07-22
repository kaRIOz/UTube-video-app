import React from "react";
import "./navbar.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
// icons
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const { theme } = useGlobalContext();
  return (
    <nav className={`${theme ? "nav-light-mode" : "nav"}`}>
      <div className="nav-center">
        <div className="search-wrapper">
          <div className="form-container">
            <input type="text" placeholder="Search" className="input" />
            <SearchIcon
              className={`${theme ? "input-icon-light-mode" : "input-icon"}`}
            />
          </div>
          <KeyboardVoiceIcon
            className={`${theme ? "input-icon-light-mode" : "input-icon"}`}
          />
        </div>
        <Link to="/login">
          <button className="sing-in-btn">
            <AccountCircleIcon />
            SING_IN
          </button>
        </Link>
        <div className="icons">
          <AddIcon
            className={`${theme ? "input-icon-light-mode" : "input-icon"}`}
          />
          <NotificationsNoneIcon
            className={`${theme ? "input-icon-light-mode" : "input-icon"}`}
          />
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="user-photo"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
