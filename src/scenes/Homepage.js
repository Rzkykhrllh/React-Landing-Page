import React from "react";

import Header from "parts/Header";
import Section from "elements/Section";
import HeroImage from "assets/images/hero-image.png";
import Fade from "react-reveal/Fade";
import Client from "parts/Client";
import Feature from "parts/Feature";

import ImageFeature1 from "assets/images/feature-tile-icon-01.svg";
import ImageFeature2 from "assets/images/feature-tile-icon-02.svg";
import ImageFeature3 from "assets/images/feature-tile-icon-03.svg";
import ImageFeature4 from "assets/images/feature-tile-icon-04.svg";
import ImageFeature5 from "assets/images/feature-tile-icon-05.svg";
import ImageFeature6 from "assets/images/feature-tile-icon-06.svg";
import Card from "elements/Card";
import Lists from "elements/Lists";
import Button from "elements/Button";
import Footer from "parts/Footer";

function Homepage() {
  const features = [
    {
      imgSrc: ImageFeature1,
      imgAlt: "Feature Title Icon 01",
      title: "Join BWA",
      description: `A pseudo-Latin text used in web
      design, layout, and printing in
      place of things to emphasise
      design.`,
    },
    {
      imgSrc: ImageFeature2,
      imgAlt: "Feature Title Icon 02",
      title: "Join BWA",
      description: `A pseudo-Latin text used in web
      design, layout, and printing in
      place of things to emphasise
      design.`,
    },
    {
      imgSrc: ImageFeature3,
      imgAlt: "Feature Title Icon 03",
      title: "Join BWA",
      description: `A pseudo-Latin text used in web
      design, layout, and printing in
      place of things to emphasise
      design.`,
    },
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ipsum is common text",
      features: [
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: false,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: false,
          content: "Deus volt is our spirit",
        },
      ],
    },
    {
      price: 50,
      currencySymbol: "$",
      description: "Lorem ipsum is common text",
      features: [
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: false,
          content: "Deus volt is our spirit",
        },
      ],
    },
    {
      price: 200,
      currencySymbol: "$",
      description: "Lorem ipsum is common text",
      features: [
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
        {
          isChecked: true,
          content: "Deus volt is our spirit",
        },
      ],
    },
  ];

  return (
    <div classNameName="body-wrap">
      <Header />
      <main classNameName="site-content">
        <Section classNameName="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={1000}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom delay={1500}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Client />
        <Section className="features-title ">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMs={2500 + index * 500}
                    data={feature}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section className="pricing">
          <Fade delay={4000} bottom>
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
              </div>
            </div>
          </Fade>

          <div className="tiles-wrap">
            {listPricing.map((list, index) => {
              return (
                <Fade bottom delay={4500 + index * 500}>
                  <Card hasShadow>
                    <div className="pricing-item-content">
                      <div className="pricing-item-header pb-24 mb-24">
                        <div className="pricing-item-price mb-4">
                          <span className="pricing-item-price-currency h2">
                            {list.currencySymbol}
                          </span>
                          <span
                            className="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="34"
                            data-pricing-yearly="27"
                          >
                            {list.price}
                          </span>
                        </div>
                        <div className="text-xs text-color-low">
                          {list.description}
                        </div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <Lists
                          data={list.features}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        ></Lists>
                      </div>
                    </div>
                    <div className="pricing-item-cta mb-8">
                      <Button isPrimary isWide>
                        Start free trial
                      </Button>
                    </div>
                  </Card>
                </Fade>
              );
            })}
          </div>
        </Section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Homepage;
