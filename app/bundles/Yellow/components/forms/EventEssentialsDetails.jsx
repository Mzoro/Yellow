import React from 'react';
export default class EventEssentialsDetails extends React.Component {
  render() {
    return (
      <div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
              <span className="yllw-contribution-form-essentials__text">Event name<span className="yllw-contribution-form-essentials__text--red">*</span></span>
            </div>
            <div className="slds-col slds-size--3-of-4">
              <input className="yllw-contribution-form-essentials__input" type="text"/>
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--3-of-12 ">
              <span className="yllw-contribution-form-essentials__text">Invitation and contribution form pitch</span>
            </div>
            <div className="slds-col slds-size--8-of-12 ">
              <div>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"></use>
                  </svg>
                </button>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"></use>
                  </svg>
                </button>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#list"></use>
                  </svg>
                </button>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"></use>
                  </svg>
                </button>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left_align_text"></use>
                  </svg>
                </button>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#center_align_text"></use>
                  </svg>
                </button>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#image"></use>
                  </svg>
                </button>
                <button href="#">
                  <svg aria-hidden="true" className="yllw-contribution-form-essentials__textedit-toolbar">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                  </svg>
                </button>
              </div>
              <div className="yllw-contribution-form-essentials__element-control">
                <textarea id="questions"
                  className="yllw-contribution-form-essentials__textarea"
                  placeholder="Please join us for an event to support Bernie Sanders * 8:00pm, June 25, 2005 * At the home of John & Jane Smith * 123 Main Street, Washington, DC, 20036 RSVP by ordering your tickets below."
                />
              </div>
              <label className="yllw-contribution-form-essentials__label" htmlFor="questions">
                Simple HTML is permitted. See our <a href="">HTML FAQ</a>
                for more information.YouTube embeds are NOT supported here, you will be able to add them later.
              </label>
            </div>
            <div className="slds-col slds-size--1-of-12">
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
              <span className="yllw-contribution-form-essentials__text">Web address<span className="yllw-contribution-form-essentials__text--red">*</span></span>
            </div>
            <div className="slds-col slds-size--3-of-4 ">
              <span>https://secure.actblue.com/contribute/page/</span>
              <input className="yllw-contribution-form-essentials__input-transparent" type="text"/><br></br>
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
              <input className="yllw-contribution-form-essentials__checkbox" name="checkbox" type="checkbox"/><br></br>
              <label className="yllw-contribution-form-essentials__label">Display my fundraising totals to promote my page</label><br></br>
              <button className="yllw-contribution-form-essentials__button-submit--green">Proceed to Ticket Prices</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
