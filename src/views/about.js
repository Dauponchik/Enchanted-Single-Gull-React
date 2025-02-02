import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Enchanted Single Gull</title>
        <meta property="og:title" content="About - Enchanted Single Gull" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="about-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        action1={
          <Fragment>
            <span className="about-text24">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text25">Register Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text26">
              Choose from different plans and features
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text27">
              Explore Our Products and Services
            </span>
          </Fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text28">Responsive Design</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text29">Customization Options</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text30">Loading Speed</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text31">Customer Satisfaction</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text32">Easy Customization</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text33">Fast Loading Speed</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text34">Key Stats</span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text35">
              Our products and services are designed to be fully responsive on
              all devices.
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text36">
              Users can easily customize their products and services to suit
              their needs.
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text37">
              Experience lightning-fast loading speeds for a seamless user
              experience.
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text38">
              Our satisfied customers testify to the quality of our products and
              services.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text39">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features1
        slogan={
          <Fragment>
            <span className="about-text40">Tailored to Suit Your Needs</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="about-text41">Easy Customization</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text42">Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text43">Responsive Design</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text44">Variety of Plans</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text45">Testimonials</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text46">Fast Loading Speed</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text47">
              Explore the key features that make our products and services stand
              out from the rest.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text48">
              Our products are designed to adapt seamlessly to any device,
              providing a consistent user experience.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text49">
              Choose from a range of plans and pricing options to find the
              perfect fit for your requirements.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text50">
              Read what our satisfied customers have to say about their
              experience with our products and services.
            </span>
          </Fragment>
        }
      ></Features1>
      <Team1
        member1={
          <Fragment>
            <span className="about-text51">John Doe</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text52">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text53">Michael Johnson</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text54">Emily Brown</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text55">Full name</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text56">Full name</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text57">Full name</span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text58">Full name</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text59">
              Meet the talented individuals who make it all happen.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text61">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text62">Our Amazing Team</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text63">We’re hiring!</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text64">CEO &amp; Founder</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text65">Marketing Director</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text66">Head of Operations</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text67">Customer Support Manager</span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text68">Job title</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text69">Job title</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text70">Job title</span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text71">Job title</span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text72">Open positions</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text73">
              John is the visionary behind our company, leading with passion and
              dedication.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text74">
              Jane is a creative genius who brings our brand to life with her
              innovative ideas.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text75">
              Michael ensures smooth operations and efficiency in everything we
              do.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text76">
              Emily goes above and beyond to ensure our customers are always
              happy.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="about-text77">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text78">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text79">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
      ></Team1>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text81">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text82">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text83">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text84">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text85">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text86">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text87">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text88">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
