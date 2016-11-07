import React from 'react';
export default class ChangePasswordForm extends React.Component {
  render() {
    return (
      <div className="yllw-change-password-form">
        <div className="slds-container--center slds-size--1-of-4">
          <div className="slds-grid--vertical slds-text-align--center">
            <div className="slds-col">
              <form className="yllw-change-password-form__pane">
                <div className="slds-grid--vertical">
                  <div className="slds-col--padded">
                    <div className="yllw-change-password-form__input-has-icon">
                      <svg className="yllw-change-password-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                      </svg>
                      <input id="password"
                        className="yllw-change-password-form__input"
                        type="password" placeholder="Current password"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <div className="yllw-change-password-form__input-has-icon">
                      <svg className="yllw-change-password-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                      </svg>
                      <input id="password"
                        className="yllw-change-password-form__input"
                        type="password" placeholder="New password"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <span className="yllw-change-password-form__text">
                      Must include at least one number and one letter and be at least 7 characters long
                    </span>
                  </div>
                  <div className="slds-col--padded">
                    <div className="yllw-change-password-form__input-has-icon">
                      <svg className="yllw-change-password-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                      </svg>
                      <input id="password"
                        className="yllw-change-password-form__input"
                        type="password" placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <button className="yllw-change-password-form__update-button">Update</button>
                  </div>
                  <div className="slds-col--padded">
                    <span className="yllw-change-password-form__text">Forgot password?</span>
                    <a>Reset it</a>
                  </div>
                  <div className="slds-col--padded">
                    <span className="yllw-change-password-form__text">Already have an account?</span>
                    <a>Sign in</a>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
