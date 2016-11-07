import React from 'react';
export default class ResetPasswordForm extends React.Component {
  render() {
    return (
      <div className="yllw-reset-password-form">
        <div className="slds-container--center slds-size--1-of-4">
          <div className="slds-grid--vertical slds-text-align--center">
            <div className="slds-col">
              <form className="yllw-reset-password-form__pane">
                <div className="slds-grid--vertical">
                  <div className="slds-col--padded">
                    <div className="yllw-reset-password-form__input-has-icon">
                      <svg className="yllw-reset-password-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#email"></use>
                      </svg>
                      <input id="email"
                        className="yllw-reset-password-form__input"
                        type="email" placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <span className="yllw-reset-password-form__text">
                      Enter your email address and we'll reset your password
                    </span>
                  </div>
                  <div className="slds-col--padded">
                    <button className="yllw-reset-password-form__reset-button">
                      Reset my password
                    </button>
                  </div>
                  <div className="slds-col--padded">
                    <span className="yllw-reset-password-form__text">
                      Already have an account?
                    </span>
                    <a>Sign in</a>
                  </div>
                </div>
              </form>
            </div>
            <div className="slds-col">
              <button className="yllw-reset-password-form__transparent-button">
                Sign up for an account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
