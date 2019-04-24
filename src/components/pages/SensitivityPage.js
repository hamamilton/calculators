import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, spinner } from '@fortawesome/free-solid-svg-icons'

const Sensitivity =  () => {
  return (
    <>
      <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-5">
          <MDBView className="gradient-card-header blue darken-2">
            <h4 className="h4-responsive text-white">GLA Adjustment Sensitivity Analysis</h4>
          </MDBView>
          <MDBCardBody>
            <MDBInput
              name="subjectContractPrice"
              type="number"
              label="Subject Contract Price"
            />
            <MDBTable striped hover>
              <MDBTableHead color="secondary-color" textWhite>
                <tr>
                  <th>&nbsp;</th>
                  <th>Indicated Value Spread (Comps 1-3)</th>
                  <th>Comp 1 (In Subject Project)
                    </th>
                  <th>Comp 2 (In Subject Project)
                    
                    </th>
                  <th>Comp 3 (In Subject Project)
                    
                    </th>
                  <th>Comp 4 (In Competing Project)
                    
                    </th>
                  <th>Comp 5 (In Competing Project)
                    
                    </th>
                  <th>Indicated Value Spread (All Comps)</th>
                  <th>Average (Subject Project)</th>
                  <th>Average (All Areas)</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>Actual Sales Price</td>
                  <td></td>
                  <td><MDBInput 
                    name="comp1GLA"
                    type="number"
                    label="Comp 1 GLA"
                    /></td>
                  <td><MDBInput 
                    name="comp2GLA"
                    type="number"
                    label="Comp 2 GLA"
                    /></td>
                  <td><MDBInput 
                    name="comp3GLA"
                    type="number"
                    label="Comp 3 GLA"
                    /></td>
                  <td><MDBInput 
                    name="comp4GLA"
                    type="number"
                    label="Comp 4 GLA"
                    /></td>
                  <td><MDBInput 
                    name="comp5GLA"
                    type="number"
                    label="Comp 5 GLA"
                    /></td>
                  <td></td>
                  <td id="avgSubjectProject1Actual"></td>
                  <td id="avgAllAreasActual"></td>
                </tr>
                <tr>
                  <td>Actual Sales Price</td>
                  <td></td>
                  <td><MDBInput
                    name="comp1ActualSalePrice"
                    type="number"
                    label="Comp 1 Actual" /></td>
                  <td><MDBInput
                    name="comp2ActualSalePrice"
                    type="number"
                    label="Comp 2 Actual" /></td>
                  <td><MDBInput
                    name="comp3ActualSalePrice"
                    type="number"
                    label="Comp 3 Actual" /></td>
                  <td><MDBInput
                    name="comp4ActualSalePrice"
                    type="number"
                    label="Comp 4 Actual" /></td>
                  <td><MDBInput
                    name="comp5ActualSalePrice"
                    type="number"
                    label="Comp 5 Actual" /></td>
                  <td></td>
                  <td id="avgSubjectProject1Actual"></td>
                  <td id="avgAllAreasActual"></td>
                </tr>
                <tr>
                  <td>Indicated Value $25/sf</td>
                  <td id="subProjectSpread1"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td id="compProjectSpread1"></td>
                  <td id="avgSubjectProject1"></td>
                  <td id="avgAllAreas1"></td>
                </tr>
                <tr>
                  <td>Indicated Value $35/sf</td>
                  <td id="subProjectSpread2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td id="compProjectSpread2"></td>
                  <td id="avgSubjectProject2"></td>
                  <td id="avgAllAreas2"></td>
                </tr>
                <tr>
                  <td>Indicated Value $40/sf</td>
                  <td id="subProjectSpread3"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td id="compProjectSpread3"></td>
                  <td id="avgSubjectProject3"></td>
                  <td id="avgAllAreas3"></td>
                </tr>
                <tr>
                  <td>Indicated Value $45/sf</td>
                  <td id="subProjectSpread4"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td id="compProjectSpread4"></td>
                  <td id="avgSubjectProject4"></td>
                  <td id="avgAllAreas4"></td>
                </tr>
                <tr>
                  <td>Indicated Value $50/sf</td>
                  <td id="subProjectSpread5"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td id="compProjectSpread5"></td>
                  <td id="avgSubjectProject5"></td>
                  <td id="avgAllAreas5"></td>
                </tr>
                <tr>
                  <td colspan="3">Value Spread Range</td>
                  <td id="indicatedValueSubjectProject" colspan="3"></td>
                  <td id="indicatedAllComps" colspan="3"></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="">Value Spread Ratio</td>
                  <td id="indicatedRatioSubjectProject" colspan="3"></td>
                  <td id="indicatedRatioComps" colspan="3"></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  )
}

export default Sensitivity;