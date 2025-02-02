import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Enchanted Single Gull</title>
        <meta property="og:title" content="Contact - Enchanted Single Gull" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="contact-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm3
        action={
          <Fragment>
            <span className="contact-text24">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text25">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text26">Get in touch with us</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text27">Contact us</span>
          </Fragment>
        }
      ></ContactForm3>
      <Contact14
        link1={
          <Fragment>
            <span className="contact-text28">Start new chat</span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="contact-text29">info@example.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text30">+123-456-7890</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text31">
              123 Main Street, City, Country
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text32">
              We are here to assist you. Reach out to us for any inquiries or
              support.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text33">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text34">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="contact-text35">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text36">Contact Us</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="contact-text37">Live Chat</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="contact-text38">Phone</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="contact-text39">Office</span>
          </Fragment>
        }
      ></Contact14>
      <Contact7
        content1={
          <Fragment>
            <span className="contact-text40">
              For inquiries or support, please contact our New York office.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text41">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="contact-text42">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="contact-text43">Los Angeles Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="contact-text44">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="contact-text45">
              456 Park Avenue, Los Angeles, CA 90012
            </span>
          </Fragment>
        }
      ></Contact7>
      <Footer4
        link1={
          <Fragment>
            <span className="contact-text46">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text47">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text48">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text49">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text50">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text51">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text52">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text53">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
