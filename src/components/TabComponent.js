/* eslint-disable no-undef */
import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import "../css/TabsNav.css";
// tabs Content
import TabConte from './TabContenTwo'
import TabContentThree from './TabContentThree'

import TabContentOne from './TabContentOne';

export default function TabComponent() {

 
    // const [activeTab, setActiveTab] = useState('1');
    const [tabIndex, settabIndex] = useState(0)
  return (
    <div>
      <Tabs className="tabs" selectedIndex={tabIndex}
       onSelect={(tabIndex) =>settabIndex(tabIndex)}
       >
        <TabList className="tab-nav-container">
          <Tab className={`${tabIndex === 0 ? 'tab-selected active' : null} ` } >
            <TabDoor />
            <p style={{ marginBottom: '1.875rem'}}>
              <strong>
                Np commitments <br />
                Cancel online at anytime
              </strong>
            </p>
          </Tab>
          <Tab className={`${tabIndex === 1 ? 'tab-selected active' : null}`}>
            <TabDevices />
            <p style={{ marginTop: "-5.3125rem" }}>
              <strong>Watch anywhere</strong>
            </p>
          </Tab>
          <Tab className={`${tabIndex === 2 ? 'tab-selected active' : null}`}>
            <TabPrices />
            <p>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>
        {/* แท็บ content */}
        <TabPanel>
          <TabContentOne />
        </TabPanel>
        <TabPanel>
          <TabConte />
        </TabPanel>
        <TabPanel>
          <TabContentThree />
        </TabPanel>
      </Tabs>
    </div>
  );
}
