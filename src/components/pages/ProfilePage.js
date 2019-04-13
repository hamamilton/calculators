import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBSelect, } from 'mdbreact';
import GLAInputForm from "./sections/GLAInputForm";
import CalculationForm from "./sections/CalculationForm.js";
import Comparables from "./sections/ComparablesSection.js";

const ProfilePage = (props) => {
  return (
    <React.Fragment>
      <form>
        <MDBRow className="justify-content-center">
        <MDBCol md="6" lg="9">
        <section className="text-center pb-3">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="12" xl="12" className="mb-3">
              <MDBCard className="d-flex mb-5">
              <MDBCardBody>

              <MDBCardTitle className="font-bold mb-3">
                    <strong>Subject Information</strong>
                  </MDBCardTitle>
                  <GLAInputForm />
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="12" xl="12" className="mb-3">
              <MDBCard className="d-flex mb-5">
              <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-9">
                    <strong>Calculation of "Space Only" Adjustment (Price Per Square Foot)</strong>
                  </MDBCardTitle>
                  <CalculationForm />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="12" xl="12" className="mb-3">
              <MDBCard className="d-flex mb-12">
              <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-9">
                    <strong>Size Adjustments by Comparable</strong>
                  </MDBCardTitle>
                <MDBView>
                  <Comparables />
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBCol>
    </MDBRow>
    </form>
    </React.Fragment>
  );
}

export default ProfilePage;