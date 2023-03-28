import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Navigation from "./navigation";
import Leftcontent from "./left-content";
import Rightcontent from "./right-content";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



class Header2 extends React.Component {
  state = {
    selectedIndex: 0
  };

  handleSelect = index => {
    this.setState({ selectedIndex: index });
  };

  handleButtonClick = () => {
    this.setState({ selectedIndex: 0 });
  };

  render() {
    return (
      <Tabs
        selectedIndex={this.state.selectedIndex}
        onSelect={this.handleSelect}
      >
        <TabList>
            <Tab>
                <span className='header-title'>Chae Noran <i>!</i> </span>
                <span className='header-x-button'><FontAwesomeIcon icon="fa-solid fa-xmark" /></span>
            </Tab>
            <Tab>
                <span className='header-title'>My Works <i>!</i> </span>
                <span className='header-x-button'><FontAwesomeIcon icon="fa-solid fa-xmark" /></span>
            </Tab>
            <div className="header-close">
                <div className="square">
                <FontAwesomeIcon icon="fa-solid fa-minus" />
                </div>
                <div className="square">
                <FontAwesomeIcon icon={icon({name: 'window-maximize', style: 'regular'})}/>
                </div>
                <div className="square-exit">
                <FontAwesomeIcon icon="fa-solid fa-x" />
                </div>    
            </div>     
        </TabList>
        <TabPanel>
            <Navigation />
            <div className="flex-between main-content">
                <Leftcontent />
                <Rightcontent />
            </div>
        </TabPanel>       
        <TabPanel>
            <Navigation />
            <div className="main-content">
                
            </div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Header2