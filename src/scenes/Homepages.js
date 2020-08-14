import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Section from "elements/Section";
import HeroImage from "assets/images/hero-image.png";

import Header from "parts/Header";
import Clients from "parts/Clients";

import Feature from "parts/Features";
import FeaturesImg01 from "assets/images/feature-tile-icon-01.svg";
import FeaturesImg02 from "assets/images/feature-tile-icon-02.svg";
import FeaturesImg03 from "assets/images/feature-tile-icon-03.svg";

import List from "elements/Lists";
import Card from "elements/Card";
import Button from "elements/Button";

import Footer from "parts/Footer";

export default function Homepages() {
  const dataFeatures = [
    {
      imgSrc: FeaturesImg01,
      imgAlt: " FeaturesImg01",
      title: "lETS GET STARTED",
      description:
        "let Get Started Lorem JS is an easy to use Javascript library which helps include Lorem Ipsum text. All of this done just by using just the Class Names.",
    },
    {
      imgSrc: FeaturesImg02,
      imgAlt: " FeaturesImg02",
      title: "BWA JOIN",
      description:
        "Lorem JS is an easy to use Javascript library which helps include Lorem Ipsum text. All of this done just by using just the Class Names.",
    },
    {
      imgSrc: FeaturesImg03,
      imgAlt: " FeaturesImg03",
      title: "BWA JIEWWW",
      description:
        "Javascript library which helps include Lorem Ipsum text. All of this done just by using just the Class Names.",
    },
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ipsum bla bla bla",
      features: [
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: false,
          content: "bla bla bla bla",
        },
        {
          isChecked: false,
          content: "bla bla bla bla",
        },
      ],
    },
    {
      price: 17,
      currencySymbol: "$",
      description: "Lorem ipsum bla bla bla",
      features: [
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: false,
          content: "bla bla bla bla",
        },
      ],
    },
    {
      price: 67,
      currencySymbol: "$",
      description: "Lorem ipsum bla bla bla",
      features: [
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
        {
          isChecked: true,
          content: "bla bla bla bla",
        },
      ],
    },
  ];

  return (
    <div className="body-wrap">
      <Fade bottom delay={300}>
        <Header></Header>
      </Fade>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Zoom delay={500}>
                  <h1 className="mt-0 mb-16 asd">
                    Landing template for startups
                  </h1>
                </Zoom>
                <Fade bottom delay={800}>
                  <div className="container-xs">
                    <p className="mt-0 mb-32 asd">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </div>
                </Fade>
              </div>

              <Fade bottom delay={1000}>
                <div className="hero-figure illustration-element-01">
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt=""
                    width="896"
                    height="504"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </Section>
        <Fade bottom delay={1200}>
          <Clients></Clients>
        </Fade>
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {dataFeatures.map((data, index) => (
                  <Feature
                    key={index}
                    delayInMs={1300 * (index + 1)}
                    data={data}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Fade left delay={2000}>
          <Section className="pricing">
            <div className="container">
              <div className="pricing-inner section-inner has-top-divider">
                <div className="section-header center-content">
                  <div className="container-xs">
                    <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                    <p className="m-0">
                      Lorem ipsum is common placeholder text used to demonstrate
                      the graphic elements of a document or visual presentation.
                    </p>
                  </div>
                </div>
                <div className="tiles-wrap">
                  {listPricing.map((data, index) => {
                    return (
                      <Card hasShadow key={index}>
                        <div className="pricing-item-content">
                          <div className="pricing-item-header pb-24 mb-24">
                            <div className="pricing-item-price mb-4">
                              <span className="pricing-item-price-currency h2">
                                {data.currencySymbol}
                              </span>
                              <span
                                className="pricing-item-price-amount h1 pricing-switchable"
                                data-pricing-monthly="34"
                                data-pricing-yearly="27"
                              >
                                {data.price}
                              </span>
                            </div>
                            <div className="text-xs text-color-low">
                              {data.description}
                            </div>
                          </div>
                          <div className="pricing-item-features mb-40">
                            <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                              What’s included
                            </div>

                            <List
                              data={data.features}
                              isSmall
                              className="pricing-item-features-list mb-32"
                            ></List>
                          </div>
                        </div>
                        <div className="pricing-item-cta mb-8">
                          <Button isPrimary isSmall isWideMobile isBlock>
                            Start free trial
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </Section>
        </Fade>
      </main>
      <Footer></Footer>
    </div>
  );
}
