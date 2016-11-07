import React from 'react';
export default class EventTicketsDetails extends React.Component {
  render() {
    return (
  <div className="slds-container--center slds-container--medium">
    <div className="slds-size--7-of-12">
      <table className="yllw-contribution-form-essentials__table">
        <thead className="yllw-contribution-form-essentials__table-head">
          <tr className="yllw-contribution-form-essentials__table-row">
            <th></th>
            <th>Ticket Description</th>
            <th>Price</th>
            <th>Limit</th>
            <th className="slds-cell-shrink">Sold</th>
            <th className="slds-cell-shrink"></th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="yllw-contribution-form-essentials__table-row">
            <td className="slds-cell-shrink">
              <svg aria-hidden="true" className="yllw-contribution-form-essentials__icon-move">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#move"></use>
              </svg>
            </td>
            <td className="slds-cell-shrink">
              <input className="yllw-contribution-form-essentials__input-table--medium" type="text"/>
            </td>
            <td className="slds-cell-shrink">$<input className="yllw-contribution-form-essentials__input-table--small" type="text"/>
            </td>
            <td>
              <input className="yllw-contribution-form-essentials__checkbox-table" name="checkbox" type="checkbox"/>
            </td>
            <td>0</td>
            <td ><a>disable</a></td>
          </tr>
          <tr className="yllw-contribution-form-essentials__table-row">
            <td></td>
            <td>
              <input className="yllw-contribution-form-essentials__input-table--medium" type="text" placeholder="Ticket Name" />
            </td>
            <td>$<input className="yllw-contribution-form-essentials__input-table--small" type="text"/></td>
            <td>
              <input className="yllw-contribution-form-essentials__checkbox-table" name="checkbox" type="checkbox"/>
            </td>
            <td>0
            </td>
            <td><button className="yllw-contribution-form-essentials__button-submit--blue">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="yllw-contribution-form-essentials__text-helper">
        To change the order that these items appear on your page, drag them using the arrows on the left.
      </p>
      <div className="slds-grid slds-grid--align-center">
        <button className="yllw-contribution-form-essentials__button-submit--blue">Proceed to Customizations</button>
      </div>
    </div>
  </div>
    );
  }
}
