import React from "react";
import "./FranceSection.css";
import Container from "react-bootstrap/Container";
import FranceItem from "../../Assets/FranceItem";
import FranceSectionCard from "./FranceSectionCard";

function FranceSection() {
  return (
    <div className="france-section my-4 mysm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4">
          france
        </h2>
        <div className="row g-4">
          {FranceItem.map((item) => (
            <FranceSectionCard
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

export default FranceSection;
