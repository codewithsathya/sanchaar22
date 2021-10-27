import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mainHeading"
              style={{ fontSize: 70 }}
              className="mt-0 mb-6 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">Sanchaar</span>
            </h1>
          </div>
          <div className="container-xs">
            <p className="m-0 mb-0 reveal-from-bottom" data-reveal-delay="400">
              by
            </p>
          </div>

          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a href="https://wissenaire.org/" target="_blank">
              <Image
                // className="has-shadow"
                src={require("./../../assets/images/wissLogo2.png")}
                alt="Hero"
                width={348}
                height={252}
              />
            </a>
            <div className="container-xs">
              <p
                className="m-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                in association with
              </p>
            </div>
            <Image
              // className="has-shadow"
              src={require("./../../assets/images/eisystemslogo.jpg")}
              alt="Hero"
              width={348}
              height={252}
            />
            <br></br>
            <Image
              // className="has-shadow"
              src={require("./../../assets/images/Sanchaar2.jpg")}
              alt="Hero"
              width={600}
              height={252}
            />

            {/* </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
