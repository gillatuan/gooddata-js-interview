// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from "react"
import ReactDOM from "react-dom"

import Routes from "./Routes"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<Routes />, document.getElementById("root"))
registerServiceWorker()
