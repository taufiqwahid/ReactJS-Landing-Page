import React from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";

export default function Features(props) {
  console.log(props);
  return (
    <Fade bottom delay={props.delayInMs}>
      <div className="tiles-item">
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <img
                src={props.data.imgSrc}
                alt={props.data.alt}
                width="64"
                height="64"
              />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">{props.data.title}</h4>
            <p className="m-0 text-sm">{props.data.description}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

Features.prototype = {
  delayInMs: propTypes.number,
  data: propTypes.object,
};
