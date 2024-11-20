import React from "react";
import "./SwitSection.css";
import Container from "react-bootstrap/Container";
import SwitItem from "../../Assets/SwitItems";
import SwitCard from "./SwitSectionCard";

function SwitSection() {
  return (
    <div className="swit-section my-4 mysm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4">
          switzerland
        </h2>
        <div className="row g-4">
          {SwitItem.map((item) => (
            <SwitCard
              key={item.id}
              itemImage={item.itemImage}
              itemTitle={item.itemTitle}
              itemDescription={item.itemDescription}
            />
          ))}
        </div>
      </Container>
    </div>
    
  );
}

export default SwitSection;
