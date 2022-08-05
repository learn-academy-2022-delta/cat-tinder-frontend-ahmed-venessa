

import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CatIndex from './pages/CatIndex'
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import CatNew from "./pages/CatNew"
import CatEdit from './pages/CatEdit'
import NotFound from "./pages/NotFound"
import cats from './Rogdoll'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: cats
    }
  } 

  createNewCat = (theNewCatObject) => {
    console.log (theNewCatObject);

  }

  render() {
    console.log(this.state.cats)
    return (
      <Router>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/CatEdit" component={CatEdit} />
          <Route path="/catindex" render={() => <CatIndex cats={this.state.cats} />} />
          <Route path="/CatNew"
            render={() => {
              return <CatNew createNewCat={this.createNewCat} />
            }} />
            
          <Route path="/CatShow" component={CatShow} />
          <Route component={NotFound} />

        </Switch>
        <Footer />
      </Router>

    )
  }
}
export default App
