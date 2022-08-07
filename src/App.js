import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import CatNew from "./pages/CatNew";
import CatEdit from "./pages/CatEdit";
import NotFound from "./pages/NotFound";
import cats from "./Rogdoll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: cats,
    };
  }

  componentDidMount() {
    this.readCat();
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => this.setState({ cats: payload }))
      .catch((errors) => console.log("Cat read errors: ", errors));
  };

  createNewCat = (theNewCatObject) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(theNewCatObject),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => this.readCat())
      .catch((errors) => console.log("Cat new errors: ", errors));
  };

  updateCat = (cat, id) => {
    fetch(`http://localhost:3000/catnew/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => this.readCat())
      .catch((errors) => console.log("Cat update errors: ", errors));
  };

  deleteCat = (id) => {
    console.log("deleted", id);
  };

  render() {
    console.log(this.state.cats);
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/CatEdit/:id"
            render={(props) => {
              let id = +props.match.params.id;
              let cat = this.state.cats.find(
                (catObject) => catObject.id === id
              );
              return <CatEdit cat={cat} updateCat={this.updateCat} />;
            }}
          />

          <Route
            path="/CatIndex"
            render={() => <CatIndex cats={this.state.cats} />}
          />
          <Route
            path="/CatNew"
            render={() => {
              return <CatNew createNewCat={this.createNewCat} />;
            }}
          />

          <Route
            path="/CatShow/:id"
            render={(props) => {
              let id = +props.match.params.id;
              let cat = this.state.cats.find(
                (catObject) => catObject.id === id
              );
              return <CatShow cat={cat} deleteCat={this.deleteCat} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
