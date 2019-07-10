import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCardTitle, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBMask, MDBCardText, MDBIcon } from 'mdbreact';

const Sensitivity = () => {
  return (
    <>
    <MDBRow>
        <MDBCol md="1">
          <MDBView className="gradient-card-header blue darken-2">
            <h4 className="h4-responsive text-white">GLA Adjustment Sensitivity Analysis</h4>
          </MDBView>
        </MDBCol>
    </MDBRow>
    <MDBRow>
      
      <MDBCol md="2">
        <MDBCard className="mt-">
          <MDBCardBody>
            <MDBTable striped hover>
              <MDBTableHead color="secondary-color" textWhite>
                <tr>
                <th>Subject</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                  </div>
                  <MDBInput 
                    name="subjSale"
                    type="number"
                    label="Sale Price"
                    /></td>
                  </tr>
                <tr>
                  <td>
                  <MDBInput 
                    name="subjSize"
                    type="number"
                    label="Size"
                    /></td>
                </tr>
                <tr>
                  
                  <td>
                  <MDBInput 
                    name="subjPriceSqFt"
                    type="number"
                    label="Price/SqFt"
                    /></td>
                </tr>
                <tr>
                  <td></td>
                  
                </tr>
                <tr>
                  <td></td>
                  
                </tr>
                <tr>
                  <td></td>
                  
                </tr>
                <tr>
                  <td></td>
                  
                </tr>

                <tr>
                  <td></td>
                  
                </tr>
                
                <tr>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
      <MDBCol md="2">
        <MDBCard className="mt-5">
          <MDBCardBody>
            <MDBTable striped hover>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                <th>Comp 1</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>
                  <MDBInput 
                    name="Comp1Sale"
                    type="number"
                    label="Sale Price"
                    /></td>
                  </tr>
                <tr>
                  <td>
                  <MDBInput 
                    name="Comp1Size"
                    type="number"
                    label="Size"
                    /></td>
                </tr>
                <tr>
                  
                  <td>
                  <MDBInput 
                    name="Comp1PriceSqFt"
                    type="number"
                    label="Price/SqFt"
                    /></td>
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp1SizeFactor"
                    type="number"
                    label="Size Factor"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp1FactorPer"
                    type="number"
                    label="Factor %"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp1SizeAdj"
                    type="number"
                    label="Size Adjustment"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp1AdjPer"
                    type="number"
                    label="Adjustment %"
                    /></td>
                  
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp1NetAdj"
                    type="number"
                    label="Net Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp1NetAdjPer"
                    type="number"
                    label="Net Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp1GrossAdj"
                    type="number"
                    label="Gross Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp1GrossAdjPer"
                    type="number"
                    label="Gross Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp1IndValue"
                    type="number"
                    label="Indicated Value"
                    /></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
      <MDBCol md="2">
        <MDBCard className="mt-5">
          <MDBCardBody>
            <MDBTable striped hover>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                <th>Comp 2</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>
                  <MDBInput 
                    name="Comp2Sale"
                    type="number"
                    label="Sale Price"
                    /></td>
                  </tr>
                <tr>
                  <td>
                  <MDBInput 
                    name="Comp2Size"
                    type="number"
                    label="Size"
                    /></td>
                </tr>
                <tr>
                  
                  <td>
                  <MDBInput 
                    name="Comp2PriceSqFt"
                    type="number"
                    label="Price/SqFt"
                    /></td>
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp2SizeFactor"
                    type="number"
                    label="Size Factor"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp2FactorPer"
                    type="number"
                    label="Factor %"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp2SizeAdj"
                    type="number"
                    label="Size Adjustment"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp2AdjPer"
                    type="number"
                    label="Adjustment %"
                    /></td>
                  
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp2NetAdj"
                    type="number"
                    label="Net Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp2NetAdjPer"
                    type="number"
                    label="Net Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp2GrossAdj"
                    type="number"
                    label="Gross Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp2GrossAdjPer"
                    type="number"
                    label="Gross Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp2IndValue"
                    type="number"
                    label="Indicated Value"
                    /></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            
          </MDBCardBody>
          
        </MDBCard>
        </MDBCol>
        <MDBCol md="2">
        <MDBCard className="mt-5">
          <MDBCardBody>
            <MDBTable striped hover>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                <th>Comp 3</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>
                  <MDBInput 
                    name="Comp3Sale"
                    type="number"
                    label="Sale Price"
                    /></td>
                  </tr>
                <tr>
                  <td>
                  <MDBInput 
                    name="Comp3Size"
                    type="number"
                    label="Size"
                    /></td>
                </tr>
                <tr>
                  
                  <td>
                  <MDBInput 
                    name="Comp3PriceSqFt"
                    type="number"
                    label="Price/SqFt"
                    /></td>
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp3SizeFactor"
                    type="number"
                    label="Size Factor"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp3FactorPer"
                    type="number"
                    label="Factor %"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp3SizeAdj"
                    type="number"
                    label="Size Adjustment"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp3AdjPer"
                    type="number"
                    label="Adjustment %"
                    /></td>
                  
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp3NetAdj"
                    type="number"
                    label="Net Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp3NetAdjPer"
                    type="number"
                    label="Net Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp3GrossAdj"
                    type="number"
                    label="Gross Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp3GrossAdjPer"
                    type="number"
                    label="Gross Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp3IndValue"
                    type="number"
                    label="Indicated Value"
                    /></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            
          </MDBCardBody>
          
        </MDBCard>
        </MDBCol>
        <MDBCol md="2">
        <MDBCard className="mt-5">
          <MDBCardBody>
            <MDBTable striped hover>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                <th>Comp 4</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>
                  <MDBInput 
                    name="Comp4Sale"
                    type="number"
                    label="Sale Price"
                    /></td>
                  </tr>
                <tr>
                  <td>
                  <MDBInput 
                    name="Comp4Size"
                    type="number"
                    label="Size"
                    /></td>
                </tr>
                <tr>
                  
                  <td>
                  <MDBInput 
                    name="Comp4PriceSqFt"
                    type="number"
                    label="Price/SqFt"
                    /></td>
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp4SizeFactor"
                    type="number"
                    label="Size Factor"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp4FactorPer"
                    type="number"
                    label="Factor %"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp4SizeAdj"
                    type="number"
                    label="Size Adjustment"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp4AdjPer"
                    type="number"
                    label="Adjustment %"
                    /></td>
                  
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp4NetAdj"
                    type="number"
                    label="Net Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp4NetAdjPer"
                    type="number"
                    label="Net Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp4GrossAdj"
                    type="number"
                    label="Gross Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp4GrossAdjPer"
                    type="number"
                    label="Gross Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp4IndValue"
                    type="number"
                    label="Indicated Value"
                    /></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            
          </MDBCardBody>
          
        </MDBCard>
        </MDBCol>
        <MDBCol md="2">
        <MDBCard className="mt-5">
          <MDBCardBody>
            <MDBTable striped hover>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                <th>Comp 5</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>
                  <MDBInput 
                    name="Comp5Sale"
                    type="number"
                    label="Sale Price"
                    /></td>
                  </tr>
                <tr>
                  <td>
                  <MDBInput 
                    name="Comp5Size"
                    type="number"
                    label="Size"
                    /></td>
                </tr>
                <tr>
                  
                  <td>
                  <MDBInput 
                    name="Comp5PriceSqFt"
                    type="number"
                    label="Price/SqFt"
                    /></td>
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp5SizeFactor"
                    type="number"
                    label="Size Factor"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp5FactorPer"
                    type="number"
                    label="Factor %"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp5SizeAdj"
                    type="number"
                    label="Size Adjustment"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp5AdjPer"
                    type="number"
                    label="Adjustment %"
                    /></td>
                  
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp5NetAdj"
                    type="number"
                    label="Net Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp5NetAdjPer"
                    type="number"
                    label="Net Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp5GrossAdj"
                    type="number"
                    label="Gross Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp5GrossAdjPer"
                    type="number"
                    label="Gross Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp5IndValue"
                    type="number"
                    label="Indicated Value"
                    /></td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            
          </MDBCardBody>
          
        </MDBCard>
        </MDBCol>
        <MDBCol md="2">
        <MDBCard className="mt-5">
          <MDBCardBody>
            <MDBTable striped hover>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                <th>Comp 6</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                  <td>
                  <MDBInput 
                    name="Comp6Sale"
                    type="number"
                    label="Sale Price"
                    /></td>
                  </tr>
                <tr>
                  <td>
                  <MDBInput 
                    name="Comp6Size"
                    type="number"
                    label="Size"
                    /></td>
                </tr>
                <tr>
                  
                  <td>
                  <MDBInput 
                    name="Comp6PriceSqFt"
                    type="number"
                    label="Price/SqFt"
                    /></td>
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp6SizeFactor"
                    type="number"
                    label="Size Factor"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp6FactorPer"
                    type="number"
                    label="Factor %"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp6SizeAdj"
                    type="number"
                    label="Size Adjustment"
                    /></td>
                  
                </tr>
                <tr>
                  <td><MDBInput 
                    name="Comp6AdjPer"
                    type="number"
                    label="Adjustment %"
                    /></td>
                  
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp6NetAdj"
                    type="number"
                    label="Net Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp6NetAdjPer"
                    type="number"
                    label="Net Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp6GrossAdj"
                    type="number"
                    label="Gross Adjustment"
                    /></td>
                  
                </tr>
                
                <tr>
                  <td><MDBInput 
                    name="Comp6GrossAdjPer"
                    type="number"
                    label="Gross Adjustment %"
                    /></td>
                </tr>

                <tr>
                  <td><MDBInput 
                    name="Comp6IndValue"
                    type="number"
                    label="Indicated Value"
                    /></td>
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