import React from 'react';

export default class NewPasswordForm extends React.Component {
  render() {
    return (
      <div className="yllw-new-password-form">
        <div className="slds-container--center slds-size--1-of-4">
          <div className="slds-grid--vertical slds-text-align--center">
            <div className="slds-col">
              <form className="yllw-new-password-form__pane">
                <div className="slds-grid--vertical">
                  <div className="slds-col--padded">
                    <div className="yllw-new-password-form__input-has-icon">
                      <svg className="yllw-new-password-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                      </svg>
                      <input id="password"
                        className="yllw-new-password-form__input"
                        type="password" placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <div className="yllw-new-password-form__input-has-icon">
                      <svg className="yllw-new-password-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                      </svg>
                      <input id="password"
                        className="yllw-new-password-form__input"
                        type="password" placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <button className="yllw-new-password-form__change-button">
                      Change my password
                    </button>
                  </div>
                  <div className="slds-col--padded">
                    <span className="yllw-new-password-form__text">Already have an account?</span>
                    <a>Sign in</a>
                  </div>
                </div>
              </form>
            </div>
            <div className="slds-col">
              <button className="yllw-new-password-form__transparent-button">
                Sign up for an account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
