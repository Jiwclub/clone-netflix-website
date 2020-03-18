import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { cross } from "react-icons-kit/icomoon/cross";

export default function TabContentThree() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Choose one plan and watch everything on Netflix.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        {/* Tabbutton Content */}
        <div className="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>Hd available</td>
                <td>
                    <Icon icon={cross} size={10}/>

                </td>
                <td >
                    <Icon icon={checkmark} size={10} />
                </td>
                <td>
                    <Icon icon={cross} size={10} />
                </td>
              </tr>
              <tr>
                <td>Hd available</td>
                <td>
                    <Icon icon={cross} size={10}/>

                </td>
                <td >
                    <Icon icon={checkmark} size={10} />
                </td>
                <td>
                    <Icon icon={cross} size={10} />
                </td>
              </tr>
              <tr>
                <td>Hd available</td>
                <td>
                    <Icon icon={cross} size={10}/>

                </td>
                <td >
                    <Icon icon={checkmark} size={10} />
                </td>
                <td>
                    <Icon icon={cross} size={10} />
                </td>
              </tr>
              <tr>
                <td>Hd available</td>
                <td>
                    <Icon icon={cross} size={10}/>

                </td>
                <td >
                    <Icon icon={checkmark} size={10} />
                </td>
                <td>
                    <Icon icon={cross} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  );
}

// Main container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
    padding-bottom: 1%;
  }

  .tab-top-content {
    ddisplay: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 3rem 0 0;
  }

  span {
    grid-column: 3/9;
  }

  .btn {
    grid-column: 9 / 12;
    margin-left: 3rem;
    margin-right: 5.1rem;
  }
  //tab bottom content

  .tab-bottom-content {
      margin: 2rem auto;
  }
  // Table
  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }

  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  
`;
