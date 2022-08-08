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
  constructor(props) {
    super(props);
    this.state = {
      cat: {},
    };
  }

  componentDidMount() {
    this.readCat();
  }

  readCat = () => {
    const { catId } = this.props;
    fetch("http://localhost:5000/cats/" + catId)
      .then((response) => response.json())
      .then((payload) => this.setState({ cat: payload }))
      .catch((errors) => console.log("Cat read errors: ", errors));
  };

  handleDeleteCat = (id) => {
    console.log("deleted", id);
    // fetch(`http://localhost:5000/cats/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .catch((errors) => console.log("Cat delete errors: ", errors));
  };

  render() {
    // console.log(this.props.cat)
    let { cat } = this.state;
    return (
      <div className="center">
        <Card>
          <CardImg className="cat-image" src={cat.image} alt="Card image cap" />
          <CardBody className="cat-detail-body">
            <CardTitle>Hi, my name is {cat.name}</CardTitle>
            <br />
            <CardSubtitle>Bio: {cat.bio}</CardSubtitle>

            <CardText>Age: {cat.age}</CardText>
            <CardText>Enjoys: {cat.enjoys}</CardText>
            <NavLink to={`/catedit/${cat.id}`}>
              <Button>Update Cat</Button>
            </NavLink>
            <Button onClick={() => this.handleDeleteCat(cat.id)}>
              Delete Cat
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CatShow;
