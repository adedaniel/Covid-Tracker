import React from "react";
// import { Link } from "gatsby"
import DoctorImageBackground from "../ImageExports/DoctorImageBackground";
import { colors } from "../styles/styles";
import Typed from "react-typed";
import Link from "gatsby-plugin-transition-link";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import { DefaultButton } from "../button";
import FutureImage from "../ImageExports/FutureImage";
import LookingOutImage from "../ImageExports/LookingOutimage";
import ListImage from "../ImageExports/ListImage";
import SpreadImage from "../ImageExports/SpreadImage";
import PersonalizedImage from "../ImageExports/PersonalizedImage";
import ResultsImage from "../ImageExports/ResultsImage";
import RelevanceImage from "../ImageExports/RelevanceImage";
import NotificationImage from "../ImageExports/NotificationImage";
import TimeImage from "../ImageExports/TimeImage";
import AccessibleImage from "../ImageExports/AccessibleImage";
import WatchingImage from "../ImageExports/WatchingImage";
import TestedImage from "../ImageExports/TestedImage";
import ChillImage from "../ImageExports/ChillImage";
import FixedNews from "./fixedNews";

export default function Home() {
  return (
    <div>
      <div className=" scrollable" >

        <DoctorImageBackground>
          <div className="setResponse h90">
            <div className="container">
              <div className="row vh100">
                <div className="col-md-6 captionParent h90">
                  <div className="captionArea responsiveCenter">
                    <h1>
                      <span className="hoverEffect">
                        COVID-19
                    </span>
                    </h1>
                    <h5 className='respFont'>
                      Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2)
                      is the name given to the 2019 novel coronavirus. COVID-19 is
                      the name given to the disease associated with the virus.
<br />
                      <br />
                      In December 2019, It was detected in
                      three patients with pneumonia connected to the cluster of acute respiratory illness
                      cases from Wuhan, China. By the end of February 2020, several were experiencing sustained
                      local transmission of coronavirus disease.
                  <br /><br />
                   We have been able to collate realtime data
                    from different sources concerning the virus across different states in Nigeria and countries around the World.

                  </h5>
                  </div>
                </div>
                <div className="col-md-6 bgSpace captionParent h90 p-0" />
                <div className="text-center w-100">
                  <div className="animated infinite bounce slow">
                    <i className="fa fa-angle-down angles" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DoctorImageBackground>

        <div className="py-5 bgLight">
          <div className="container">
            <h1 className="colorPrimary">Trending Words</h1>
            <h4>We have been able to fetch the most used words related to the virus based on their numbers of appearance on social media</h4>
          </div>
        </div>
        <div className="py-4 bgLight">
          <div className="container">
            <div className="row">
              <div className="col-md-6 captionParent hImage">
                <div
                  className="captionArea"
                  data-sal="slide-right"
                  data-sal-delay="200"
                  data-sal-duration="400"
                >
                  <h1 className="colorPrimary">We're looking out for you</h1>
                  <h5>
                    Our job is to save you lots of productive time spent on job
                    seeking. In other words,
                  <br />
                    <br />
                  We'll do the <span className="hoverEffect">searching</span>,
                  you'll do the <span className="hoverEffect">choosing</span>
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <LookingOutImage />
              </div>
            </div>

          </div>
        </div>
        <div className="py-5 ">
          <div className="container text-center">
            <h1 className="hoverEffect d-inline ">What We Do</h1>
            <div className="row mt-5">
              <div
                className="col-sm-2"
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="400"
              >
                <ListImage />
                <p> Get your job preferences</p>
              </div>
              <div className="col-sm-1 p-0">
                <div className="line" />
              </div>

              <div
                className="col-sm-2"
                data-sal="slide-right"
                data-sal-delay="300"
                data-sal-duration="400"
              >
                <SpreadImage />
                <p>Spread out</p>
              </div>
              <div className="col-sm-1 p-0">
                <div className="line" />
              </div>

              <div
                className="col-sm-2"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sal-duration="400"
              >
                <PersonalizedImage />
                <p> Personalize the findings to your taste</p>
              </div>
              <div className="col-sm-1 p-0">
                <div className="line" />
              </div>
              <div
                className="col-sm-2"
                data-sal="slide-right"
                data-sal-delay="900"
                data-sal-duration="400"
              >
                <ResultsImage />
                <p> Dish out exactly what you need</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bgPrimary text-white text-center">
          <div className="container">
            <h1>We're everywhere, everytime...</h1>
            <div className="row">
              <div
                className="col-md-4 my-3"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="600"
              >
                <RelevanceImage />
                <h4>Relevant</h4>
                <p>Engineered to always find jobs perfect for you</p>
              </div>
              <div
                className="col-md-4 my-3 "
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="600"
              >
                <TimeImage />
                <h4>Timely</h4>
                <p>
                  Real-time job updates so you can grab every opportunity on the
                  spot
              </p>
              </div>
              <div
                className="col-md-4 my-3 "
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="600"
              >
                <NotificationImage />
                <h4>Informing</h4>
                <p>So you're always the first to get there</p>
              </div>
              <div
                className="col-md-4 my-3 "
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="600"
              >
                <AccessibleImage />
                <h4>Accessible</h4>
                <p>So you can use it anywhere and anytime</p>
              </div>
              <div
                className="col-md-4 my-3 "
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="600"
              >
                <WatchingImage />
                <h4>Present</h4>
                <p>We're watching everywhere so you don't miss a thing</p>
              </div>
              <div
                className="col-md-4 my-3 "
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="600"
              >
                <TestedImage />
                <h4>Detailed</h4>
                <p>Designed from spacebar to spacebar, with you in mind</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <div
              className="row"
              data-sal="fade"
              data-sal-delay="200"
              data-sal-duration="700"
            >
              <div className="col-md-6">
                <ChillImage />
              </div>
              <div className="col-md-6 hImage captionParent">
                <div className="captionArea">
                  <h1 className="colorPrimary">See?</h1>
                  <h5>
                    So why don't you sit back, sip some coffee, go on that date or
                    play that guitar while we dish the best job offers to your
                    table!
                </h5>
                </div>
              </div>
            </div>
            <div className="text-center my-5">
              <h2>
                We{" "}
                <span className="hoverEffect">
                  <strong> See Jobs</strong>
                </span>
              </h2>
              <p className="mt-3">
                and you should have clicked that button by now...{" "}
                <span role="img" aria-label="wink">
                  😉
              </span>
              </p>
              <Link
                to="/signup"
                exit={{
                  length: 1
                }}
                entry={{
                  delay: 0.6
                }}
              >
                <DefaultButton
                  color="primary"
                  padding="8px 15px"
                  width="50%"
                  font="larger"
                >
                  Get Started
              </DefaultButton>
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="fixed-news leftBorder py-4 px-3">
        <FixedNews />
      </div>

      <style jsx>
        {`
        .leftBorder{
          border-left-width: 1px;
          border-left-color: ${colors.lightgrey};
          border-left-style: solid;
        }
        .fixed-news{
          width: 25%;
          display: inline-block;
          position: fixed;
          height: 100vh;
          background-color: ${colors.offWhite}

        }
        .scrollable{
          width: 75%;
          display: inline-block
        }
          .hImage {
            height: 370px;
          }
          .bigText {
            font-weight: 600;
            font-size: -webkit-xxx-large;
          }

          .line {
            width: 100%;
            height: 5px;
            margin: 60px 0;
            border-radius: 5px;
            background: #70c185;
          }
          .bgLight {
            background-color: ${colors.offWhite};
          }
          .colorPrimary {
            color: ${colors.primary};
          }
          .bgPrimary {
            background-color: ${colors.primary};
          }
          .h50 {
            height: ;
          }

          .h90 {
            height: 94%;
          }
          .vh100 {
            height: calc(100vh - 60px);
          }
          .smallerText {
            font-weight: 600;
          }
      
          .angles {
            color: ${colors.primary};
            font-size: 40px;
          }
          .captionParent {
            display: table;
          }
          .captionArea {
            display: table-cell;
            vertical-align: middle;
          }
          .hoverEffect {
            background: linear-gradient(
              to bottom,
              ${colors.primary} 0%,
              ${colors.primary} 100%
            );
            background-position: 0 73%;
            background-repeat: repeat-x;
            background-size: 9px 9px;
            color: #000;
            text-decoration: none;
            transition: all 0.5s;
          }
          .hoverEffect:hover {
            background-size: 10px 50px;
            color: #fff;
          }
          .setResponse {
            background-color: white;
            opacity: 0.8
          }
          @media (max-width: 576px) {
            .responsiveCenter {
              text-align: center;
            }
            .line {
              -ms-transform: rotate(90deg);
              transform: rotate(90deg);
              width: 55px;
              margin: 30px auto;
            }
          }

          @media (min-width: 768px) and (max-width: 991px) {
            .break {
              display: block;
            }
          }
          @media (max-width: 539px) {
            .break {
              display: block;
            }

            .setResponse {
              background-color: white;
              opacity: 0.7
            }
          }
          @media (max-width: 767px) {
          
            .bgSpace {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .respFont{
          font-size: 19px
            }
            .setResponse {
              background-color: white;
              opacity: 0.8
            }
          }
        `}
      </style>
    </div>
  );
}
