import React from 'react';
import DashboardTitleBar from '../dashboard-title-bar';

function AddListingContent() {
  return (
    <div className="dashboard-content">
      <DashboardTitleBar title={'Add Listing'} />

      <div className="row">
        <div className="col-lg-12">
          <div id="add-listing">
            {/* Section */}
            <div className="add-listing-section">
              {/* Headline */}
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-doc" /> Basic Informations
                </h3>
              </div>
              {/* Title */}
              <div className="row with-forms">
                <div className="col-md-12">
                  <h5>
                    Listing Title{' '}
                    <i
                      className="tip"
                      data-tip-content="Name of your business"
                    />
                  </h5>
                  <input className="search-field" type="text" />
                </div>
              </div>
              {/* Row */}
              <div className="row with-forms">
                {/* Status */}
                <div className="col-md-6">
                  <h5>Category</h5>
                  <select className="chosen-select-no-single">
                    <option label="blank">Select Category</option>
                    <option>Eat &amp; Drink</option>
                    <option>Shops</option>
                    <option>Hotels</option>
                    <option>Restaurants</option>
                    <option>Fitness</option>
                    <option>Events</option>
                  </select>
                </div>
                {/* Type */}
                <div className="col-md-6">
                  <h5>
                    Keywords{' '}
                    <i
                      className="tip"
                      data-tip-content="Maximum of 15 keywords related with your business"
                    />
                  </h5>
                  <input
                    type="text"
                    placeholder="Keywords should be separated by commas"
                  />
                </div>
              </div>
              {/* Row / End */}
            </div>
            {/* Section / End */}
            {/* Section */}
            <div className="add-listing-section margin-top-45">
              {/* Headline */}
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-location" /> Location
                </h3>
              </div>
              <div className="submit-section">
                {/* Row */}
                <div className="row with-forms">
                  {/* City */}
                  <div className="col-md-6">
                    <h5>City</h5>
                    <select className="chosen-select-no-single">
                      <option label="blank">Select City</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                      <option>Chicago</option>
                      <option>Houston</option>
                      <option>Phoenix</option>
                      <option>San Diego</option>
                      <option>Austin</option>
                    </select>
                  </div>
                  {/* Address */}
                  <div className="col-md-6">
                    <h5>Address</h5>
                    <input type="text" placeholder="e.g. 964 School Street" />
                  </div>
                  {/* City */}
                  <div className="col-md-6">
                    <h5>State</h5>
                    <input type="text" />
                  </div>
                  {/* Zip-Code */}
                  <div className="col-md-6">
                    <h5>Zip-Code</h5>
                    <input type="text" />
                  </div>
                </div>
                {/* Row / End */}
              </div>
            </div>
            {/* Section / End */}
            {/* Section */}
            <div className="add-listing-section margin-top-45">
              {/* Headline */}
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-picture" /> Gallery
                </h3>
              </div>
              {/* Dropzone */}
              <div className="submit-section">
                <form action="/file-upload" className="dropzone" />
              </div>
            </div>
            {/* Section / End */}
            {/* Section */}
            <div className="add-listing-section margin-top-45">
              {/* Headline */}
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-docs" /> Details
                </h3>
              </div>
              {/* Description */}
              <div className="form">
                <h5>Description</h5>
                <textarea
                  className="WYSIWYG"
                  name="summary"
                  cols={40}
                  rows={3}
                  id="summary"
                  spellCheck="true"
                  defaultValue={''}
                />
              </div>
              {/* Row */}
              <div className="row with-forms">
                {/* Phone */}
                <div className="col-md-4">
                  <h5>
                    Phone <span>(optional)</span>
                  </h5>
                  <input type="text" />
                </div>
                {/* Website */}
                <div className="col-md-4">
                  <h5>
                    Website <span>(optional)</span>
                  </h5>
                  <input type="text" />
                </div>
                {/* Email Address */}
                <div className="col-md-4">
                  <h5>
                    E-mail <span>(optional)</span>
                  </h5>
                  <input type="text" />
                </div>
              </div>
              {/* Row / End */}
              {/* Row */}
              <div className="row with-forms">
                {/* Phone */}
                <div className="col-md-4">
                  <h5 className="fb-input">
                    <i className="fa fa-facebook-square" /> Facebook{' '}
                    <span>(optional)</span>
                  </h5>
                  <input type="text" placeholder="https://www.facebook.com/" />
                </div>
                {/* Website */}
                <div className="col-md-4">
                  <h5 className="twitter-input">
                    <i className="fa fa-twitter" /> Twitter{' '}
                    <span>(optional)</span>
                  </h5>
                  <input type="text" placeholder="https://www.twitter.com/" />
                </div>
                {/* Email Address */}
                <div className="col-md-4">
                  <h5 className="gplus-input">
                    <i className="fa fa-google-plus" /> Google Plus{' '}
                    <span>(optional)</span>
                  </h5>
                  <input type="text" placeholder="https://plus.google.com" />
                </div>
              </div>
              {/* Row / End */}
              {/* Checkboxes */}
              <h5 className="margin-top-30 margin-bottom-10">
                Amenities <span>(optional)</span>
              </h5>
              <div className="checkboxes in-row margin-bottom-20">
                <input id="check-a" type="checkbox" name="check" />
                <label htmlFor="check-a">Elevator in building</label>
                <input id="check-b" type="checkbox" name="check" />
                <label htmlFor="check-b">Friendly workspace</label>
                <input id="check-c" type="checkbox" name="check" />
                <label htmlFor="check-c">Instant Book</label>
                <input id="check-d" type="checkbox" name="check" />
                <label htmlFor="check-d">Wireless Internet</label>
                <input id="check-e" type="checkbox" name="check" />
                <label htmlFor="check-e">Free parking on premises</label>
                <input id="check-f" type="checkbox" name="check" />
                <label htmlFor="check-f">Free parking on street</label>
                <input id="check-g" type="checkbox" name="check" />
                <label htmlFor="check-g">Smoking allowed</label>
                <input id="check-h" type="checkbox" name="check" />
                <label htmlFor="check-h">Events</label>
              </div>
              {/* Checkboxes / End */}
            </div>
            {/* Section / End */}
            {/* Section */}
            <div className="add-listing-section margin-top-45">
              {/* Headline */}
              <div className="add-listing-headline">
                <h3>
                  <i className="fa fa-calendar-check-o" /> Availability
                </h3>
                {/* Switcher */}
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
              {/* Switcher ON-OFF Content */}
              <div className="switcher-content">
                {/* Availablity Slots */}
                {/* Set data-clock-type="24hr" to enable 24 hours clock type */}
                <div className="availability-slots" data-clock-type="24hr">
                  {/* Single Day Slots */}
                  <div className="day-slots">
                    <div className="day-slot-headline">Monday</div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    <div className="single-slot cloned">
                      <div className="single-slot-left">
                        <div className="single-slot-time" />
                        <button className="remove-slot">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                      <div className="single-slot-right">
                        <strong>Slots:</strong>
                        <div className="plusminus horiz">
                          <button />
                          <input
                            type="number"
                            name="slot-qty"
                            defaultValue={1}
                            min={1}
                            max={99}
                          />
                          <button />
                        </div>
                      </div>
                    </div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    {/* No slots */}
                    <div className="no-slots">No slots added</div>
                    {/* Slots Container */}
                    <div className="slots-container">
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            8:30 <i className="am-pm">am</i> - 9:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:00 <i className="am-pm">am</i> - 9:30{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:30 <i className="am-pm">am</i> - 10:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slots Container / End */}
                    {/* Add Slot */}
                    <div className="add-slot">
                      <div className="add-slot-inputs">
                        <input
                          type="time"
                          className="time-slot-start"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-start twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                        <span>-</span>
                        <input
                          type="time"
                          className="time-slot-end"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-end twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>
                      <div className="add-slot-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  {/* Single Day Slots / End */}
                  {/* Single Day Slots */}
                  <div className="day-slots">
                    <div className="day-slot-headline">Tuesday</div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    <div className="single-slot cloned">
                      <div className="single-slot-left">
                        <div className="single-slot-time" />
                        <button className="remove-slot">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                      <div className="single-slot-right">
                        <strong>Slots:</strong>
                        <div className="plusminus horiz">
                          <button />
                          <input
                            type="number"
                            name="slot-qty"
                            defaultValue={1}
                            min={1}
                            max={99}
                          />
                          <button />
                        </div>
                      </div>
                    </div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    {/* No slots */}
                    <div className="no-slots">No slots added</div>
                    {/* Slots Container */}
                    <div className="slots-container">
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            8:30 <i className="am-pm">am</i> - 9:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:00 <i className="am-pm">am</i> - 9:30{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:30 <i className="am-pm">am</i> - 10:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slots Container / End */}
                    {/* Add Slot */}
                    <div className="add-slot">
                      <div className="add-slot-inputs">
                        <input
                          type="time"
                          className="time-slot-start"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-start twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                        <span>-</span>
                        <input
                          type="time"
                          className="time-slot-end"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-end twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>
                      <div className="add-slot-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  {/* Single Day Slots / End */}
                  {/* Single Day Slots */}
                  <div className="day-slots">
                    <div className="day-slot-headline">Wednesday</div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    <div className="single-slot cloned">
                      <div className="single-slot-left">
                        <div className="single-slot-time" />
                        <button className="remove-slot">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                      <div className="single-slot-right">
                        <strong>Slots:</strong>
                        <div className="plusminus horiz">
                          <button />
                          <input
                            type="number"
                            name="slot-qty"
                            defaultValue={1}
                            min={1}
                            max={99}
                          />
                          <button />
                        </div>
                      </div>
                    </div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    {/* No slots */}
                    <div className="no-slots">No slots added</div>
                    {/* Slots Container */}
                    <div className="slots-container">
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            8:30 <i className="am-pm">am</i> - 9:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:00 <i className="am-pm">am</i> - 9:30{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:30 <i className="am-pm">am</i> - 10:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slots Container / End */}
                    {/* Add Slot */}
                    <div className="add-slot">
                      <div className="add-slot-inputs">
                        <input
                          type="time"
                          className="time-slot-start"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-start twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                        <span>-</span>
                        <input
                          type="time"
                          className="time-slot-end"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-end twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>
                      <div className="add-slot-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  {/* Single Day Slots / End */}
                  {/* Single Day Slots */}
                  <div className="day-slots">
                    <div className="day-slot-headline">Thursday</div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    <div className="single-slot cloned">
                      <div className="single-slot-left">
                        <div className="single-slot-time" />
                        <button className="remove-slot">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                      <div className="single-slot-right">
                        <strong>Slots:</strong>
                        <div className="plusminus horiz">
                          <button />
                          <input
                            type="number"
                            name="slot-qty"
                            defaultValue={1}
                            min={1}
                            max={99}
                          />
                          <button />
                        </div>
                      </div>
                    </div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    {/* No slots */}
                    <div className="no-slots">No slots added</div>
                    {/* Slots Container */}
                    <div className="slots-container">
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            8:30 <i className="am-pm">am</i> - 9:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:00 <i className="am-pm">am</i> - 9:30{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:30 <i className="am-pm">am</i> - 10:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slots Container / End */}
                    {/* Add Slot */}
                    <div className="add-slot">
                      <div className="add-slot-inputs">
                        <input
                          type="time"
                          className="time-slot-start"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-start twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                        <span>-</span>
                        <input
                          type="time"
                          className="time-slot-end"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-end twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>
                      <div className="add-slot-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  {/* Single Day Slots / End */}
                  {/* Single Day Slots */}
                  <div className="day-slots">
                    <div className="day-slot-headline">Friday</div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    <div className="single-slot cloned">
                      <div className="single-slot-left">
                        <div className="single-slot-time" />
                        <button className="remove-slot">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                      <div className="single-slot-right">
                        <strong>Slots:</strong>
                        <div className="plusminus horiz">
                          <button />
                          <input
                            type="number"
                            name="slot-qty"
                            defaultValue={1}
                            min={1}
                            max={99}
                          />
                          <button />
                        </div>
                      </div>
                    </div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    {/* No slots */}
                    <div className="no-slots">No slots added</div>
                    {/* Slots Container */}
                    <div className="slots-container">
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            8:30 <i className="am-pm">am</i> - 9:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:00 <i className="am-pm">am</i> - 9:30{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                      {/* Single Slot */}
                      <div className="single-slot">
                        <div className="single-slot-left">
                          <div className="single-slot-time">
                            9:30 <i className="am-pm">am</i> - 10:00{' '}
                            <i className="am-pm">am</i>
                          </div>
                          <button className="remove-slot">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                        <div className="single-slot-right">
                          <strong>Slots:</strong>
                          <div className="plusminus horiz">
                            <button />
                            <input
                              type="number"
                              name="slot-qty"
                              defaultValue={1}
                              min={1}
                              max={99}
                            />
                            <button />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slots Container / End */}
                    {/* Add Slot */}
                    <div className="add-slot">
                      <div className="add-slot-inputs">
                        <input
                          type="time"
                          className="time-slot-start"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-start twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                        <span>-</span>
                        <input
                          type="time"
                          className="time-slot-end"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-end twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>
                      <div className="add-slot-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  {/* Single Day Slots / End */}
                  {/* Single Day Slots */}
                  <div className="day-slots">
                    <div className="day-slot-headline">Saturday</div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    <div className="single-slot cloned">
                      <div className="single-slot-left">
                        <div className="single-slot-time" />
                        <button className="remove-slot">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                      <div className="single-slot-right">
                        <strong>Slots:</strong>
                        <div className="plusminus horiz">
                          <button />
                          <input
                            type="number"
                            name="slot-qty"
                            defaultValue={1}
                            min={1}
                            max={99}
                          />
                          <button />
                        </div>
                      </div>
                    </div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    {/* No slots */}
                    <div className="no-slots">No slots added</div>
                    {/* Slots Container */}
                    <div className="slots-container"></div>
                    {/* Slots Container / End */}
                    {/* Add Slot */}
                    <div className="add-slot">
                      <div className="add-slot-inputs">
                        <input
                          type="time"
                          className="time-slot-start"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-start twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                        <span>-</span>
                        <input
                          type="time"
                          className="time-slot-end"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-end twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>
                      <div className="add-slot-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  {/* Single Day Slots / End */}
                  {/* Single Day Slots */}
                  <div className="day-slots">
                    <div className="day-slot-headline">Sunday</div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    <div className="single-slot cloned">
                      <div className="single-slot-left">
                        <div className="single-slot-time" />
                        <button className="remove-slot">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                      <div className="single-slot-right">
                        <strong>Slots:</strong>
                        <div className="plusminus horiz">
                          <button />
                          <input
                            type="number"
                            name="slot-qty"
                            defaultValue={1}
                            min={1}
                            max={99}
                          />
                          <button />
                        </div>
                      </div>
                    </div>
                    {/* Slot For Cloning / Do NOT Remove*/}
                    {/* No slots */}
                    <div className="no-slots">No slots added</div>
                    {/* Slots Container */}
                    <div className="slots-container"></div>
                    {/* Slots Container / End */}
                    {/* Add Slot */}
                    <div className="add-slot">
                      <div className="add-slot-inputs">
                        <input
                          type="time"
                          className="time-slot-start"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-start twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                        <span>-</span>
                        <input
                          type="time"
                          className="time-slot-end"
                          min="00:00"
                          max="12:00"
                        />
                        <select className="time-slot-end twelve-hr">
                          <option>am</option>
                          <option>pm</option>
                        </select>
                      </div>
                      <div className="add-slot-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  {/* Single Day Slots / End */}
                </div>
                {/* Availablity Slots / End */}
              </div>
              {/* Switcher ON-OFF Content / End */}
            </div>
            {/* Section / End */}
            {/* Section */}
            <div className="add-listing-section margin-top-45">
              {/* Headline */}
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-clock" /> Opening Hours
                </h3>
                {/* Switcher */}
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
              {/* Switcher ON-OFF Content */}
              <div className="switcher-content">
                {/* Day */}
                <div className="row opening-day">
                  <div className="col-md-2">
                    <h5>Monday</h5>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Opening Time"
                    >
                      <option label="Opening Time" />
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Closing Time"
                    >
                      <option label="Closing Time" />
                      <option>Closed</option>
                      <option>1 AM</option>
                      <option>2 AM</option>
                      <option>3 AM</option>
                      <option>4 AM</option>
                      <option>5 AM</option>
                      <option>6 AM</option>
                      <option>7 AM</option>
                      <option>8 AM</option>
                      <option>9 AM</option>
                      <option>10 AM</option>
                      <option>11 AM</option>
                      <option>12 AM</option>
                      <option>1 PM</option>
                      <option>2 PM</option>
                      <option>3 PM</option>
                      <option>4 PM</option>
                      <option>5 PM</option>
                      <option>6 PM</option>
                      <option>7 PM</option>
                      <option>8 PM</option>
                      <option>9 PM</option>
                      <option>10 PM</option>
                      <option>11 PM</option>
                      <option>12 PM</option>
                    </select>
                  </div>
                </div>
                {/* Day / End */}
                {/* Day */}
                <div className="row opening-day js-demo-hours">
                  <div className="col-md-2">
                    <h5>Tuesday</h5>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Opening Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Closing Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                </div>
                {/* Day / End */}
                {/* Day */}
                <div className="row opening-day js-demo-hours">
                  <div className="col-md-2">
                    <h5>Wednesday</h5>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Opening Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Closing Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                </div>
                {/* Day / End */}
                {/* Day */}
                <div className="row opening-day js-demo-hours">
                  <div className="col-md-2">
                    <h5>Thursday</h5>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Opening Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Closing Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                </div>
                {/* Day / End */}
                {/* Day */}
                <div className="row opening-day js-demo-hours">
                  <div className="col-md-2">
                    <h5>Friday</h5>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Opening Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Closing Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                </div>
                {/* Day / End */}
                {/* Day */}
                <div className="row opening-day js-demo-hours">
                  <div className="col-md-2">
                    <h5>Saturday</h5>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Opening Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Closing Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                </div>
                {/* Day / End */}
                {/* Day */}
                <div className="row opening-day js-demo-hours">
                  <div className="col-md-2">
                    <h5>Sunday</h5>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Opening Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="chosen-select"
                      data-placeholder="Closing Time"
                    >
                      {/* Hours added via JS (this is only for demo purpose) */}
                    </select>
                  </div>
                </div>
                {/* Day / End */}
              </div>
              {/* Switcher ON-OFF Content / End */}
            </div>
            {/* Section / End */}
            {/* Section */}
            <div className="add-listing-section margin-top-45">
              {/* Headline */}
              <div className="add-listing-headline">
                <h3>
                  <i className="sl sl-icon-book-open" /> Pricing
                </h3>
                {/* Switcher */}
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
              {/* Switcher ON-OFF Content */}
              <div className="switcher-content">
                <div className="row">
                  <div className="col-md-12">
                    <table id="pricing-list-container">
                      <tbody>
                        <tr className="pricing-list-item pattern">
                          <td>
                            <div className="fm-move">
                              <i className="sl sl-icon-cursor-move" />
                            </div>
                            <div className="fm-input pricing-name">
                              <input type="text" placeholder="Title" />
                            </div>
                            <div className="fm-input pricing-ingredients">
                              <input type="text" placeholder="Description" />
                            </div>
                            <div className="fm-input pricing-price">
                              <input
                                type="text"
                                placeholder="Price"
                                data-unit="USD"
                              />
                            </div>
                            <div className="fm-close">
                              <a className="delete" href="#">
                                <i className="fa fa-remove" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="button add-pricing-list-item">
                      Add Item
                    </a>
                    <a href="#" className="button add-pricing-submenu">
                      Add Category
                    </a>
                  </div>
                </div>
              </div>
              {/* Switcher ON-OFF Content / End */}
            </div>
            {/* Section / End */}
            <a href="#" className="button preview">
              Preview <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListingContent;
