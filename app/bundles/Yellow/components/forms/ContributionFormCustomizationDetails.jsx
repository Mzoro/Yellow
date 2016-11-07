import React from 'react';
export default class ContributionFormCustomizationDetails extends React.Component {
  render() {
    return (
      <div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
              <span className="yllw-contribution-form-essentials__text">YouTube URL</span>
            </div>
            <div className="slds-col slds-size--3-of-4">
              <input className="yllw-contribution-form-essentials__input" type="text"/>
              <label className="yllw-contribution-form-essentials__label--intended">
                Put a YouTube video right on your Contribution Form by pasting the link here.
                (e.g. http://www.youtube.com/watch?v=a1Y73sPHKxw)
              </label>
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
              <span className="yllw-contribution-form-essentials__text">
                Preset contribution amounts
              </span>
            </div>
            <div className="slds-col slds-size--3-of-4">
              <input className="yllw-contribution-form-essentials__input" type="text"/>
              <label className="yllw-contribution-form-essentials__label--intended">
                Please enter a maximum of seven comma-separated values (e.g.: 25,50,100,250,1000).
              </label>
              <label className="yllw-contribution-form-essentials__label--intended">
                Limits: Bernie Sanders: $5,400.00
              </label>
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
            </div>
            <div className="slds-col slds-size--3-of-4">
              <input className="yllw-contribution-form-essentials__checkbox"
                name="checkbox" type="checkbox"
              />
              <label className="yllw-contribution-form-essentials__label--intended">
                Allow recurring contributions?
              </label>
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--3-of-12 ">
              <span className="yllw-contribution-form-essentials__text">Email receipt text</span>
            </div>
            <div className="slds-col slds-size--8-of-12 ">
              <div>
                <button>
                  <svg aria-hidden="true"
                    className="yllw-contribution-form-essentials__textedit-toolbar"
                  >
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"></use>
                  </svg>
                </button>
                <button>
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"></use>
                  </svg>
                </button>
                <button>
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#list"></use>
                  </svg>
                </button>
                <button>
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"></use>
                  </svg>
                </button>
                <button>
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left_align_text"></use>
                  </svg>
                </button>
                <button>
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#center_align_text"></use>
                  </svg>
                </button>
                <button>
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#image"></use>
                  </svg>
                </button>
                <button>
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                  </svg>
                </button>
              </div>
              <div className="yllw-contribution-form-essentials__element-control">
                <textarea id="questions" className="yllw-contribution-form-essentials__textarea--intended"></textarea>
              </div>
              <label className="yllw-contribution-form-essentials__label--intended" htmlFor="questions">
                This content will appear at the top of donors' email receipts. Simple HTML is permitted. See our <a>HTML FAQ</a> for more information.
                Keep your formatting very simple, note that an email's formatting may vary widely depending on how your donors view it. <a>Preview</a>
              </label>
              <br></br>
              <button className="yllw-contribution-form-essentials__button-submit--blue">Save and proceed</button>
            </div>
            <div className="slds-col slds-size--1-of-12">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
