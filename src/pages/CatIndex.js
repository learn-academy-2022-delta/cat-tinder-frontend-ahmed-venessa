import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class CatIndex extends Component {
  render() {
    return (
      <div className="page-body">
        <h2 className="center-heading">Find your purrfect match</h2>
        <div className="index-cards">
          {this.props.cats &&
            this.props.cats.map((cat) => {
              return (
                <Card className="cat-card" key={cat.id}>
                  <CardImg
                    className="cat-image"
                    top
                    src={cat.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{cat.name}</CardTitle>
                    <CardSubtitle>{cat.age} years old </CardSubtitle>
                    <NavLink to={`/catshow/${cat.id}`}>
                      <Button>More info here</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              );
            })}
        </div>
      </div>
    );
  }
}

export default CatIndex;
