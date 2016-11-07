import React from 'react';
export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="yllw-login-form">
        <div className="slds-container--center slds-size--1-of-4">
          <div className="slds-grid--vertical slds-text-align--center">
            <div className="slds-col">
              <form className="yllw-login-form__pane">
                <div className="slds-grid--vertical">
                  <div className="slds-col--padded">
                    <div className="yllw-login-form__input-has-icon">
                      <svg className="yllw-login-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#email"></use>
                      </svg>
                      <input id="email"
                        className="yllw-login-form__input"
                        type="email" placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <div className="yllw-login-form__input-has-icon">
                      <svg className="yllw-login-form__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                      </svg>
                      <input id="password"
                        className="yllw-login-form__input"
                        type="password" placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="slds-col--padded">
                    <button className="yllw-login-form__sign-in-button">Sign in</button>
                  </div>
                  <div className="slds-col--padded">
                    <span className="yllw-login-form__text"> Forgot password?</span>
                    <a>Reset it</a>
                  </div>
                </div>
              </form>
            </div>
            <div className="slds-col">
              <button className="yllw-login-form__button-on-focus">Sign up for an account</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
