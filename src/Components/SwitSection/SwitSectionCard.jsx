import React from "react";
import { Link } from "react-router-dom";

function SwitCard(props) {
  const linkPath =
    props.linkPath || `/${props.itemTitle.replace(/\s+/g, "").toLowerCase()}`;

  return (
    <div className="col-lg-4">
      <div className="card shadow h-100 overflow-hidden">
        <img
          className="card-img-top img-hover"
          src={props.itemImage}
          alt={props.itemTitle}
        />
        <div className="card-body p-4">
          <h5 className="card-title text-start text-uppercase fw-bold">
            {props.itemTitle}
          </h5>
          <p className="card-text text-start">{props.itemDescription}</p>
          <a href={linkPath} className="text-green text-capitalize fw-semibold">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default SwitCard;
