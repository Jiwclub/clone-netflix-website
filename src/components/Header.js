/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import {Button} from './Button'
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";

export default function Header() {
  
  return (
    <HeaderComponent className="header-container">
      <div className="header-top">
        <Logo src={logo} />
        <NavLink to="/login" className="signIn-btn">
          Sign In
        </NavLink>
      </div>
      {/* Header Content */}
      <div className="header-content">
        <Title>See what's next.</Title>
        <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
        <Button className="main-offer-btn" primary>
          try it now
          <Icon icon={ic_keyboard_arrow_right} size={37} />
        </Button>
      </div>
    </HeaderComponent>
  );
}
// logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Header Container

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-wight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }
  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  // Header Content
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
  }
 
  Icon svg {
      vertical-align: bottom;
      margin-left: 1.5rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-height: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transtorm: uppercase;
`;
