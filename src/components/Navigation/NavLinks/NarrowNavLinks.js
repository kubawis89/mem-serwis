import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import "./NarrowNavLinks.scss";

const LinkContainer = styled.div`
  list-style-type: none;
  font-size: 18px;
  height: 35px;
  line-height: 200%;
  display: flex;
  align-items: center;
  background-color: #1c74b2;
`;

const LinkWrapper = styled.ul`
  list-style-type: none;
  font-size: 18px;
  height: 35px;
  line-height: 200%;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: #1c74b2;
  position: relative;
  top: 45px;
  left: 0;
  .active {
    color: #0a2b42;
    background-color: #196499;
    li {
      background-color: #196499;
      text-transform: uppercase;
      font-weight: 700;
      border-top: 2px solid #0a2b42;
      border-bottom: 2px solid #0a2b42;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const LinkItem = styled.li`
  display: inline-block;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100vw;
  background-color: #1c74b2;
  transition: all 220ms ease-in-out;
  border-top: 1px dashed rgba(10, 43, 66, 0.4);
  &:hover {
    background-color: #196499;
    font-size: 19px;
  }
`;

function NarrowNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <LinkContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <div className={isOpen ? "nav-menu active" : "nav-menu"}>
        <LinkWrapper>
          <NavLink to="/home">
            <LinkItem
              onClick={() => {
                setOpen(!isOpen);
                props.sendToggle(!isOpen);
              }}
            >
              Home
            </LinkItem>
          </NavLink>
          <NavLink to="/hot">
            <LinkItem
              onClick={() => {
                setOpen(!isOpen);
                props.sendToggle(!isOpen);
              }}
            >
              Hot
            </LinkItem>
          </NavLink>
          <NavLink to="/regular">
            <LinkItem
              onClick={() => {
                setOpen(!isOpen);
                props.sendToggle(!isOpen);
              }}
            >
              Regular
            </LinkItem>
          </NavLink>
          <NavLink to="/poor">
            <LinkItem
              onClick={() => {
                setOpen(!isOpen);
                props.sendToggle(!isOpen);
              }}
            >
              Poor
            </LinkItem>
          </NavLink>
          <NavLink to="/favorite">
            <LinkItem
              onClick={() => {
                setOpen(!isOpen);
                props.sendToggle(!isOpen);
              }}
            >
              Favorite
            </LinkItem>
          </NavLink>
          <NavLink to="/add">
            <LinkItem
              onClick={() => {
                setOpen(!isOpen);
                props.sendToggle(!isOpen);
              }}
            >
              Add
            </LinkItem>
          </NavLink>
        </LinkWrapper>
      </div>
    </LinkContainer>
  );
}

export default NarrowNavLinks;
