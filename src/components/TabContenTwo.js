/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";

export default function TabContenTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere — personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-botton-content">
          {/* Tv Image Container 3 เมนูย้อยในแท็บ */}
          <div>
            <img src={ImgTv} style={{width: '18.75rem'}} />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          {/* Tablet Image Container 3 เมนูย้อยในแท็บ */}
          <div>
            <img src={ImgTablet} style={{width: '18.75rem',paddingTop:'0.625rem'}} />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          {/* Macbook Image Container 3 เมนูย้อยในแท็บ */}
          <div>
            <img src={ImgMacbook} style={{width: '18.75rem',paddingTop: '0.625rem', paddingBottom:'0.625rem'}} />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

// Main Tab Content Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  // Tab Top Content ส่วนคอนเท็น
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 1/8;
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10/12;
  }
  // Tab Bottom Content
  .tab-botton-content {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-grey);
  }
`;
