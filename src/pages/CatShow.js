import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class CatShow extends Component {
  render() {
    // console.log(this.props.cat)
    let { cat } = this.props;
    return (
      <div className="center">
        <Card>
          <CardImg className="cat-image" src={cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, my name is {cat.name}</CardTitle>
            <br />
            <CardSubtitle>Bio: {cat.bio}</CardSubtitle>

            <CardText>Age: {cat.age}</CardText>
            <CardText>Enjoys: {cat.enjoys}</CardText>
            <NavLink to={`/catedit/${this.props.cat.id}`}>
              <Button>Update Cat</Button>
            </NavLink>
            <Button onClick={() => this.props.deleteCat(cat.id)}>
              Delete Cat
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CatShow;
