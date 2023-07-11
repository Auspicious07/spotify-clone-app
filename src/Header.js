import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

function Header({  }) {
  const [{ user }, dispatch] = useStateValue();
  const User_Image= user?.images[0]?.url ? user?.images[0]?.url : "https://static.thenounproject.com/png/17241-200.png";

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
         <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;