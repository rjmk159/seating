import React from "react";
import {
  CTabs,
  CNav,
  CTabPane,
  CNavItem,
  CNavLink,
  CTabContent,
} from "@coreui/react";
import FloorPlan from  './containers/FloorPlan';
import SidebarObject from  './containers/SidebarObject';
import './styles/style.scss';

const SideBar = () => {
  return (
    <CTabs activeTab="home">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink data-tab="floor_plan">Floor Plan</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink data-tab="object">Object</CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane data-tab="floor_plan">
          <FloorPlan />
        </CTabPane>
        <CTabPane data-tab="object">
          <SidebarObject />
        </CTabPane>
      </CTabContent>
    </CTabs>
  );
};

export default SideBar;
