import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCardTitle, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBMask, MDBCardText, MDBIcon } from 'mdbreact';

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
                <th></th>
                  <th>GLA</th>
                  <th>Actual Sale Price
                    </th>
                  <th>Indicated Value $25/sf
                    
                    </th>
                  <th>Indicated Value $30/sf
                    
                    </th>
                  <th>Indicated Value $35/sf</th>
                  <th>Indicated Value $40/sf
                    
                    </th>
                  <th>Indicated Value $50/sf
                    
                    </th>
                  
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>Subject</td>
                  <td>
                  <MDBInput 
                    name="subjGLA"
                    type="number"
                    label="Subject GLA"
                    /></td>
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
                    <td></td>
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
                  
                </tr>
                <tr>
                  <td>Comp 1</td>
                  <td><MDBInput 
                    name="comp1GLA"
                    type="number"
                    label="Comp 1 GLA"
                    /></td>
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
                    <td></td>
                  <td><MDBInput
                    name="comp4ActualSalePrice"
                    type="number"
                    label="Comp 4 Actual" /></td>
                  <td><MDBInput
                    name="comp5ActualSalePrice"
                    type="number"
                    label="Comp 5 Actual" /></td>
                  
                </tr>
                <tr>
                  <td>Comp 2</td>
                  <td id="subProjectSpread1"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>
                <tr>
                  <td>Comp 3</td>
                  <td id="subProjectSpread2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>
                <tr>
                  <td>Value Spread (Comps 1-3)</td>
                  <td id="subProjectSpread3"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>
                <tr>
                  <td>Avg Sale Price Comps (1-3)</td>
                  <td id="subProjectSpread4"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>
                <tr>
                  <td>Comp 4</td>
                  <td id="subProjectSpread5"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>

                <tr>
                  <td>Comp 5</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>
                
                <tr>
                  <td>Indicated Value Spread (All Comps)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
                </tr>

                <tr>
                  <td>Avg All Areas</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  
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