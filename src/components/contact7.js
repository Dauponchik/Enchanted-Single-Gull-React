import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact7-text19">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact7-text16">
                    For inquiries or support, please contact our New York
                    office.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact7-text20">New York Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact7-text18">
                    123 Main Street, New York, NY 10001
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact7-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact7-text21">Los Angeles Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact7-text17">
                    456 Park Avenue, Los Angeles, CA 90012
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  content1: undefined,
  location2ImgAlt: 'Los Angeles Office Image',
  location2Description: undefined,
  location1Description: undefined,
  location2ImgSrc:
    'https://images.unsplash.com/photo-1612188842101-f976582906fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM5NDQ4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  location1ImgAlt: 'New York Office Image',
  location1ImgSrc:
    'https://images.unsplash.com/photo-1543248939-ff40856f65d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM5NDQ4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1: undefined,
  location2: undefined,
}

Contact7.propTypes = {
  content1: PropTypes.element,
  location2ImgAlt: PropTypes.string,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  heading1: PropTypes.element,
  location1ImgAlt: PropTypes.string,
  location1ImgSrc: PropTypes.string,
  location1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact7
