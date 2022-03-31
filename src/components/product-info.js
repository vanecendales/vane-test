import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tab1 from "./Tab-1";
import Tab2 from "./Tab-2";
import "../styles/product-info.scss";

function ProductInfo() {
    return (
        <div className="prod-info dark">
            <div className="prod-info-header border-bottom border-light">
                <h1>PRODUCT INFORMATION</h1>
                 <div className="description border-light border-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse tortor at eros a vestibulum euismod leo.</div>
            </div>
          
          <Tabs>
            <TabList>
              <Tab> <p>Service 1</p> </Tab>
              <Tab> <p>Service 2</p> </Tab>
              <Tab> <p>Service 3</p> </Tab>
              <Tab> <p>Service 4</p> </Tab>
              <Tab> <p>Service 5</p> </Tab>
             </TabList>
    
          
             <TabPanel><Tab1/><Tab2/> </TabPanel>
             <TabPanel><Tab2/><Tab1/> </TabPanel>
             <TabPanel><Tab1/><Tab2/> </TabPanel>
             <TabPanel><Tab2/><Tab1/> </TabPanel>
             <TabPanel><Tab1/><Tab2/> </TabPanel>

          </Tabs>
        </div>
      );

  }
  
  export default ProductInfo;

