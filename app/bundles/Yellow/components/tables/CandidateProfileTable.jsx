import React from 'react';
export default class CandidateProfileTable extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-size--1-of-2">
        <div className="yllw-candidate-profile-table">
          <div className="yllw-candidate-profile-table__heading">Who's supporting Bernie Sanders</div>
          <table className="slds-table slds-table--striped  slds-no-row-hover">
            <thead>
              <tr>
                <th><b>Title & Author</b></th>
                <th><b>Donors</b></th>
                <th><b>Total Raised</b></th>
              </tr>
            </thead>
            <tbody className="slds-table--bordered">
              <tr>
                <td><a href="">Contribute now to Daily Kos </a></td>
                <td>165,479</td>
                <td>$2,412,404.31</td>
              </tr>
              <tr>
                <td ><a href="">Donate now to help Democrats win!</a></td>
                <td>113,454</td>
                <td>$2,977,727.74</td>
              </tr>
              <tr>
                <td><a href="">Grassroots for Sanders - Stand with B...</a></td>
                <td>72,572</td>
                <td>$1,939,453.70</td>
              </tr>
              <tr>
                <td><a href="">Contribute now to Daily Kos </a></td>
                <td>165,479</td>
                <td>$2,412,404.31</td>
              </tr>
              <tr>
                <td><a href="">Grassroots for Sanders - Stand with B...</a></td>
                <td>72,572</td>
                <td>$1,939,453.70</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
