import React from 'react';
export default class EmailAlerts extends React.Component {
  render() {
    return (
      <div className="container">
        <hr></hr>
        <div className="slds-container--center slds-container--medium">
          <div className="yllw-email-alerts">
            <div className="yllw-email-alerts__heading">Email alerts for contributions and refunds</div>
            <div className="slds-container--right slds-size--11-of-12">
              <div className="yllw-email-alerts__box">
                <div className="yllw-email-alerts__text">
                  This page is used to configure alerts related to your fundraising.<a href="#"> Click here to start fundraising for your favorite campaigns!</a>
                </div>
              </div>
            </div>
            <table className="yllw-email-alerts__table">
              <thead>
                <tr className="yllw-email-alerts__heading--label">
                  <th className="yllw-email-alerts__sort">
                    <div className="yllw-email-alerts__truncate">Alert for
                      <button className="yllw-email-alerts__button">
                        <svg aria-hidden="true" className="yllw-email-alerts__icon">
                          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th className="yllw-email-alerts__sort">
                    <div className="yllw-email-alerts__truncate">Alerting on
                      <button className="yllw-email-alerts__button">
                        <svg aria-hidden="true" className="yllw-email-alerts__icon">
                          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th className="yllw-email-alerts__sort">
                    <div className="yllw-email-alerts__truncate">Greater than
                      <button className="yllw-email-alerts__button">
                        <svg aria-hidden="true" className="yllw-email-alerts__icon">
                          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="yllw-email-alerts__text">No alerts configured</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
