import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const CardContainer = ({
  color,
  cardName,
  expiry,
  cardLastFour,
  containerType,
  children,
}) => {
  console.log("COLOR::", color, cardName);
  const myStyle = {
    backgroundColor: color,
    color: "#fff",
    width: "300px",
    height: "180px",
    marginTop: "12px",
    borderRadius: "0.85em",
  };
  return (
    <Card style={myStyle}>
      <Card.Body>
        {containerType === "view" ? (
          <Fragment>
            <div className="brand-icon">
              <i className="fab fa-squarespace"></i>
            </div>
            <br />

            <div>{cardName}</div>

            <Card.Text className="card-text-wrapper">
              <div>**** **** **** {cardLastFour}</div>

              <span style={{ fontSize: "small" }}>EXPIRY</span>
              <div className="brand-icon">
                {expiry}

                <i className="fab fa-cc-visa"></i>
              </div>
            </Card.Text>
          </Fragment>
        ) : null}
        {children}
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
