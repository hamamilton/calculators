import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdbreact';

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
              icon="dollar-sign"
              label="Subject Contract Price"
            />
            
            <p>Using the most basic table markup, here’s how .table-based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.</p>
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Indicated Value Spread (Comps 1-3)</th>
                  <th>Comp 1 (In Subject Project)</th>
                  <th>Comp 2 (In Subject Project)</th>
                  <th>Comp 3 (In Subject Project)</th>
                  <th>Comp 4 (In Competing Project)</th>
                  <th>Comp 5 (In Competing Project)</th>
                  <th>Indicated Value Spread (Comps 4-5)</th>
                  <th>Average (Subject Project)</th>
                  <th>Average (All Areas)</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td colspan="2">Actual Sales Price</td>
                  <td><MDBInput /></td>
                  <td><MDBInput /></td>
                  <td><MDBInput /></td>
                  <td><MDBInput /></td>
                  <td><MDBInput /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Actual Sales Price</td>
                  <td>Indicated Value Spread (Comps 1-3)</td>
                  <td>Comp 1 (In Subject Project)</td>
                  <td>Comp 2 (In Subject Project)</td>
                  <td>Comp 3 (In Subject Project)</td>
                  <td>Comp 4 (In Competing Project)</td>
                  <td>Comp 5 (In Competing Project)</td>
                  <td>Indicated Value Spread (Comps 4-5)</td>
                  <td>Average (Subject Project)</td>
                  <td>Average (All Areas)</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            <h3 className="mt-5 text-left"><strong>MDBTable head options</strong></h3>
            <p>To change a background-color of thead (or any other element) use our color classes. If you are going to use a dark background you should also consider white text (to provide a proper contrast) by adding .text-white class.</p>
            <MDBTable>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            <MDBTable>
              <MDBTableHead color="pink">
                <tr>
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
            <h3 className="mt-5 text-left"><strong>Striped rows.</strong></h3>
            <p>Use prop striped to add zebra-striping to any table row within the table body</p>
            <MDBTable striped>
              <MDBTableHead>
                <tr>
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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