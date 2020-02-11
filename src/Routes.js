// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from "./modules/App/components/Homepage"

import "@gooddata/react-components/styles/css/main.css"

class Routes extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} history={history} />
            {/* <Route path="/*" component={NotFound} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Routes
