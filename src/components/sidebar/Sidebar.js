import React, { useContext, useRef, useState } from "react";
import {
  SDrivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";
import { Logo } from "../../assets";
import SearchIcon from "@mui/icons-material/Search";
import { mainMenu, SecondaryMenu } from "../../data/menuData";
import { themeContext } from "./../../App";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(themeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus()
      // continue for Search Process
    } else {
      // show functionality only
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <ArrowForwardIosOutlinedIcon />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={Logo} alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <SearchIcon />
        </SSearchIcon>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDrivider />
      {mainMenu.map((item, index) => (
        <SLinkContainer key={item.label} isActive={pathname === item.to}>
          <SLink
            to={item.to}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <SLinkIcon>{item.icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{item.label}</SLinkLabel>
                {!!item.notification && (
                  <SLinkNotification>{item.notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDrivider />
      {SecondaryMenu.map((item, index) => (
        <SLinkContainer key={item.label}>
          <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{item.icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{item.label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDrivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

export default Sidebar;
