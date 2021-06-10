import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  list-style-type: none;
  font-size: 18px;
  height: 35px;
  line-height: 200%;
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.ul`
  list-style-type: none;
  font-size: 18px;
  height: 35px;
  line-height: 200%;
  display: flex;
  align-items: center;
  &:first-child {
    border-left: 1px dashed #0a2b42;
  }
  .active {
    color: #0a2b42;
    background-color: #196499;
    li {
      background-color: #196499;
      text-transform: uppercase;
      font-weight: 700;
      border-top: 2px solid #0a2b42;
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
  border-right: 1px dashed #0a2b42;
  width: 100px;
  &:hover {
    background-color: #196499;
    font-size: 19px;
    border-top: 2px solid #0a2b42;
  }
`;

function NavLinks() {
  return (
    <LinkContainer>
      <LinkWrapper>
        <NavLink to="/home">
          <LinkItem>Home</LinkItem>
        </NavLink>
        <NavLink to="/hot">
          <LinkItem>Hot</LinkItem>
        </NavLink>
        <NavLink to="/regular">
          <LinkItem>Regular</LinkItem>
        </NavLink>
        <NavLink to="/poor">
          <LinkItem>Poor</LinkItem>
        </NavLink>
        <NavLink to="/favorite">
          <LinkItem>Favorite</LinkItem>
        </NavLink>
        <NavLink to="/add">
          <LinkItem>Add</LinkItem>
        </NavLink>
      </LinkWrapper>
    </LinkContainer>
  );
}

export default NavLinks;
