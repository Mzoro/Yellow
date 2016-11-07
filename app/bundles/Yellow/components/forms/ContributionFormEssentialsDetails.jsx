import React from 'react';
export default class ContributionFormEssentialsDetails extends React.Component {
  render() {
    return (
    <div>
      <div className="slds-container--center slds-size--1-of-2">
        <div className="slds-grid slds-wrap">
          <div className="slds-col slds-size--1-of-4 ">
            <span className="yllw-contribution-form-essentials__text">
              Page title
              <span className="yllw-contribution-form-essentials__text--red">*</span>
            </span>
          </div>
          <div className="slds-col slds-size--3-of-4">
            <input className="yllw-contribution-form-essentials__input" type="text"/>
          </div>
        </div>
      </div>
      <div className="slds-container--center slds-size--1-of-2">
        <div className="slds-grid slds-wrap">
          <div className="slds-col slds-size--3-of-12 ">
            <span className="yllw-contribution-form-essentials__text">Contribution form pitch</span>
          </div>
          <div className="slds-col slds-size--8-of-12 ">
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
              <textarea id="questions" className="yllw-contribution-form-essentials__textarea"></textarea>
            </div>
            <label className="yllw-contribution-form-essentials__label" forHtml="questions">
              Simple HTML is permitted. See our <a>HTML FAQ</a> for more information.
              YouTube embeds are NOT supported here, you will be able to add them later.
            </label>
          </div>
          <div className="slds-col slds-size--1-of-12">
          </div>
        </div>
      </div>
      <div className="slds-container--center slds-size--1-of-2">
        <div className="slds-grid slds-wrap">
          <div className="slds-col slds-size--1-of-4 ">
            <span className="yllw-contribution-form-essentials__text">
              Web address
              <span className="yllw-contribution-form-essentials__text--red">*</span>
            </span>
          </div>
          <div className="slds-col slds-size--3-of-4 ">
            <span>https://secure.actblue.com/contribute/page/</span>

            <input className="yllw-contribution-form-essentials__input-transparent" type="text"/>
            <br></br>
            <label className="yllw-contribution-form-essentials__label">Choose something short, simple and memorable.</label>
          </div>
        </div>
      </div>
      <div className="slds-container--center slds-size--1-of-2">
        <div className="slds-grid slds-wrap">
          <div className="slds-col slds-size--1-of-4 ">
            <span className="yllw-contribution-form-essentials__text">Public</span>
          </div>
          <div className="slds-col slds-size--3-of-4 ">
            <input className="yllw-contribution-form-essentials__checkbox" name="checkbox" type="checkbox"/>
            <br></br>
            <label className="yllw-contribution-form-essentials__label">Display my fundraising totals to promote my page</label>
            <br></br>
            <button className="yllw-contribution-form-essentials__button-submit--green">Save and proceed to Goal</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
