import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" footer">
        <h3 id="contact" className="heading">
          contact
        </h3>
        <p>
          Mobile:<a href="tel:7484858289">7484858289</a>
        </p>

        <p>
          {" "}
          Gmail:{" "}
          <a href="mailto:indrajeetyadav932001@gmail.com">
            indrajeetyadav932001@gmail.com
          </a>
        </p>

        <h5>&copy;Copyright 2021.Indrajeet MANIT All rights reserved</h5>

        <a> Privacy policy </a>
        <a>Cookies seting</a>
        <a>Term </a>
      </div>
    </>
  );
};

export default Footer;
