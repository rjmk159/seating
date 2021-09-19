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
  CSelect,
} from "@coreui/react";
import Select from "react-select";
import EventItem from '../components/EventItem';
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
          <CCard>
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
          <CLabel htmlFor="vat">Search</CLabel>
          <CInput id="search" placeholder="Search" />
        </CCol>
      </CRow>
      <CRow className="sidebar__list">
        <CCol xs="12" sm="12">
          <CCard>
            <CCardBody>
            {[...Array(19).keys()].map((el) => (<EventItem /> ))}
              
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default SidebarObject;
