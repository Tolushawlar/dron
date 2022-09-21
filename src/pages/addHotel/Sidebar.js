import React from "react";

import { styled, useStyletron } from "baseui";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import SideNavListItem from "./SidebarNavItem";
import {
  FaBook,
  FaChartPie,
  FaTicketAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

const menuData = [
  {
    title: "Overview",
    icon: <FaChartPie style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Hotels",
    icon: <FaTicketAlt style={{ marginRight: "0.5rem" }} />,
    active: true,
  },
  {
    title: "Contacts",
    icon: <FaUsers style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Agents",
    icon: <FaUserTie style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Docuemnts",
    icon: <FaBook style={{ marginRight: "0.5rem" }} />,
  },
];

const Sidebar = ({ open, setOpen }) => {
  const [css] = useStyletron();

  return (
    <SidebarWrapper
      className={css({
        "@media (max-width: 768px)": {
          display: open ? "block" : "none",
        },
      })}
    >
      <div
        className={css({
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          background: "rgba(0, 0, 0, 0.5)",
          height: "100vh",
          zIndex: "-1",
          display: "none",

          "@media (max-width: 768px)": {
            display: open ? "block" : "none",
          },
        })}
        onClick={() => setOpen(false)}
      />
      <Logo>
        <img
          className={css({
            width: "2rem",
            height: "2rem",
            marginRight: "0.5rem",
          })}
          src={logo}
          alt="logo"
        />
        CMS Dashboard
      </Logo>

      {menuData.map(({ icon, title, active }, index) => (
        <SideNavListItem key={index} active={active} title={title}>
          <Link to={title}>{icon}</Link>
        </SideNavListItem>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled("section", {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  maxWidth: "255px",
  height: "100vh",
  background: "#363740",
  zIndex: "1",
  overflowX: "hidden",
});

const Logo = styled("div", {
  padding: "2.5rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.25rem",
  color: "#f2f2f2",
  fontWeight: "bold",
  boxSizing: "border-box",
  background: "none",
});
