import React from "react";
import "./menu.css";
import Logo from "../../images/logo.png";
import { useGlobalContext } from "../../context";

// icons
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsIcon from "@mui/icons-material/Sports";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Menu() {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <div className={`${theme ? "sidebar-light-mode" : "sidebar-menu"}`}>
      <div className="items">
        <div className="logo-container">
          <img src={Logo} alt="youtube-logo" className="logo" />
          <p className="logo-text">YouTube</p>
        </div>
        <div className="links">
          <ul className={`${theme ? "ul-light-mode" : "ul-menu"}`}>
            <li>
              <HomeIcon /> Home
            </li>
            <li>
              <ExploreIcon /> Explore
            </li>
            <li>
              <SubscriptionsIcon /> Subscriptions
            </li>
            <hr className={`${theme ? "hr-light-mode" : "hr"}`} />
            <li>
              <LibraryAddIcon /> Library
            </li>
            <li>
              <HistoryIcon /> History
            </li>
            <hr className={`${theme ? "hr-light-mode" : "hr"}`} />
            <div className="login">
              Sing in to like videos, comment,and subscribe
              <button className="sing-in-btn">
                <AccountCircleIcon />
                SING_IN
              </button>
            </div>
            <hr className={`${theme ? "hr-light-mode" : "hr"}`} />
            <li>
              <LibraryMusicIcon /> Music
            </li>
            <li>
              <SportsIcon /> Sport
            </li>
            <li>
              <SportsEsportsIcon /> Gaming
            </li>
            <li>
              <LocalMoviesIcon /> Movies
            </li>
            <li>
              <NewspaperIcon /> News
            </li>
            <li>
              <LiveTvIcon /> Lvie
            </li>
            <hr className={`${theme ? "hr-light-mode" : "hr"}`} />
            <li>
              <SettingsIcon /> Settings
            </li>
            <li>
              <FlagIcon /> Report
            </li>
            <li>
              <HelpIcon /> Help
            </li>
            <li onClick={toggleTheme}>
              <LightModeIcon /> {theme ? "DarkMode" : "LightMode"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
