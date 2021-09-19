import React from "react";
import {
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CLabel,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInputGroupAppend,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import Select from "react-select";
import EventItem from "../components/EventItem";
const options = [
  { value: "chocolate", label: "Recently used" },
  { value: "strawberry", label: "Favorite" },
  { value: "vanilla", label: "Table" },
];

const SidebarObject = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard color="gradient-secondary">
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CRow>
                      <CCol xs="3">
                        <CLabel htmlFor="name">View</CLabel>
                      </CCol>
                      <CCol xs="9">
                        <Select
                          className="sidebar-select"
                          classNamePrefix="sidebar-select"
                          options={options}
                        />
                      </CCol>
                    </CRow>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CRow>
                      <CCol xs="3">
                        <CLabel htmlFor="name">Category</CLabel>
                      </CCol>
                      <CCol xs="9">
                        <Select
                          className="sidebar-select"
                          classNamePrefix="sidebar-select"
                          options={options}
                        />
                      </CCol>
                    </CRow>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CRow>
                      <CCol xs="3">
                        <CLabel htmlFor="name">Type</CLabel>
                      </CCol>

                      <CCol xs="9 ">
                        <Select
                          className="sidebar-select"
                          classNamePrefix="sidebar-select"
                          options={options}
                        />
                      </CCol>
                    </CRow>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="sidebar__search">
        <CCol xs="12" sm="12">
          <CInputGroup>
            <CInput type="text" id="username3" placeholder="Search" />
            <CInputGroupAppend>
              <CInputGroupText>
                <CIcon content={freeSet.cilSearch} />
              </CInputGroupText>
            </CInputGroupAppend>
          </CInputGroup>
          {/* <CLabel htmlFor="vat">Search</CLabel>
          <CInput id="search" placeholder="Search" /> */}
        </CCol>
      </CRow>
      <CRow className="sidebar__list">
        <CCol xs="12" sm="12">
          <CCard>
            <CCardBody color="gradient-secondary">
              {[...Array(19).keys()].map((el) => (
                <EventItem />
              ))}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default SidebarObject;
