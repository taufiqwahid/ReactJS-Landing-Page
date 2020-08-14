import React from "react"; //import content
import propTypes from "prop-types"; //membuat props pada componen

export default function Section(props) {
  //component dgn export
  const className = ["section "]; //variable
  className.push(props.className); //menambahkan array pada classname
  if (props.isCenteredContent) {
    //jika pada component section terdapat props
    className.push("center-content"); //maka isi array ini
  }

  return <section className={className.join(" ")}>{props.children}</section>; //menggi classname dgn nilai array classname dan mengambil props children dari componen
}

Section.propTypes = {
  //chek tipe data yang ada pada component
  isCenteredContent: propTypes.bool,
  className: propTypes.string,
};
