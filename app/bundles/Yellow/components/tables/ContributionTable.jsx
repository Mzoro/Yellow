import React from 'react';
export default class ContributionTable extends React.Component {
  render() {
    return (
      <div className="slds-m-left--medium slds-size--8-of-12">
        <div className="yllw-contribution-table__heading">Top Contribution Forms</div>
        <table className="slds-table slds-table--striped slds-no-row-hover">
          <thead>
            <tr>
              <th><p className="yllw-contribution-table__text--bold">Title Author</p></th>
              <th><p className="yllw-contribution-table__text--bold">Donors</p></th>
              <th><p className="yllw-contribution-table__text--bold">Total Raised</p></th>
            </tr>
          </thead>
          <tbody className="slds-table--bordered">
            <tr className="slds-table slds-table--striped">
              <td><a className="yllw-contribution-table__text--blue" href="">Contribute now to Daily Kos </a></td>
              <td >165,479</td>
              <td >$2,412,404.31</td>
            </tr>
            <tr className="slds-table slds-table--striped">
              <td ><a className="yllw-contribution-table__text--blue" href="">Donate now to help Democrats win!</a></td>
              <td >113,454</td>
              <td >$2,977,727.74</td>
            </tr>
            <tr className="slds-table slds-table--striped">
              <td><a className="yllw-contribution-table__text--blue" href="">Grassroots for Sanders - Stand with B...</a></td>
              <td >72,572</td>
              <td >$1,939,453.70</td>
            </tr>
            <tr className="slds-table slds-table--striped">
              <td><a className="yllw-contribution-table__text--blue" href="">Contribute now to Daily Kos </a></td>
              <td >165,479</td>
              <td >$2,412,404.31</td>
            </tr>
            <tr className="slds-table slds-table--striped">
              <td><a className="yllw-contribution-table__text--blue" href="">Grassroots for Sanders - Stand with B...</a></td>
              <td >72,572</td>
              <td >$1,939,453.70</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
