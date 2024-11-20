import React from 'react';
import CardTitle from 'react-bootstrap/CardTitle';
import Card  from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function JapanCard(props) {
  const linkPath =
    props.linkPath || `/${props.itemTitle.replace(/\s+/g, "").toLowerCase()}`;
  return (
    <div className='col-lg-4'>
      <Card className='shadow h-100 overflow-hidden'>
        <Card.Img className='img-hover' variant='top' src={props.itemImage} />
        <Card.Body className='p-4'>
          <Card.Title className='text-start text-uppercase fw-bold'>
            {props.itemTitle}
          </Card.Title>
          <Card.Text className='text-start'>
            {props.itemDescription}
          </Card.Text>
          <a href={linkPath} className="text-green text-capitalize fw-semibold">Read more</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JapanCard;