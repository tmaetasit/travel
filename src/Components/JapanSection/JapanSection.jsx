import React from "react";
import "./JapanSection.css";
import Container from "react-bootstrap/Container";
import JapanItem from "../../Assets/JapanItem";
import JapanSectionCard from "./JapanSectionCard";

function JapanSection() {
  return (
    <div className="japan-section my-4 mysm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4">
          japan
        </h2>
        <div className="row g-4">
          {JapanItem.map((item) => (
            <JapanSectionCard
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

export default JapanSection;
