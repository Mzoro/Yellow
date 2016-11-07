import React from 'react';
export default class EventCustomizationDetails extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-size--1-of-2">
        <div className="slds-grid slds-wrap">
          <div className="slds-col slds-size--1-of-4">
            <span className="yllw-contribution-form-essentials__text">Email receipt text</span>
          </div>
          <div className="slds-col slds-size--3-of-4">
            <div>
              <button>
                <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
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
              <textarea id="questions" className="yllw-contribution-form-essentials__textarea--intended" placeholder="hi bla bla"></textarea>
            </div>
            <label className="yllw-contribution-form-essentials__label--intended" forHtml="questions">
              This content will appear at the top of donors' email receipts. Simple HTML is permitted.
              See our <a>HTML FAQ</a> for more information. Keep your formatting very simple,
              note that an email's formatting may vary widely depending on how your donors view it.
              <a>Preview</a></label><br></br>
            <button className="yllw-contribution-form-essentials__button-submit--blue">Save and proceed</button>
          </div>
        </div>
      </div>
    );
  }
}
