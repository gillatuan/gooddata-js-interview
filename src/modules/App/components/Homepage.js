// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from "react"

import * as Utils from "../../../utils/index"
import { ColumnChartHoc } from "../../../hoc/ColumnChartHoc"

import "@gooddata/react-components/styles/css/main.css"

import { ColumnChart } from "@gooddata/react-components"
import { FullContentLayout } from "../../../layouts"

class Homepage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currMonth: 1
    }
  }

  getMonthFilter() {
    const rangeDays = Utils.commons.rangeDaysInMonth(2016, this.state.currMonth)

    return {
      absoluteDateFilter: {
        dataSet: {
          uri: this.props.dateAttr
        },
        ...rangeDays
      }
    }
  }

  getViewBy() {
    return {
      visualizationAttribute: {
        displayForm: {
          uri: this.props.dateAttrInMonths
        },
        localIdentifier: "a1"
      }
    }
  }

  renderDropdown() {
    return (
      <select defaultValue="1" onChange={this.onChangeMonth.bind(this)}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    )
  }

  onChangeMonth(e) {
    this.setState({
      currMonth: e.target.value
    })
  }

  render() {
    const { measures, projectId } = this.props
    const filters = [this.getMonthFilter()]
    const viewBy = this.getViewBy()

    return (
      <FullContentLayout className="App">
        <h1>$ Gross Profit in month {this.renderDropdown()} 2016</h1>
        <div>
          <ColumnChart
            measures={measures}
            filters={filters}
            projectId={projectId}
          />
        </div>
        <h1>$ Gross Profit - All months</h1>
        <div>
          <ColumnChart
            measures={measures}
            viewBy={viewBy}
            projectId={projectId}
          />
        </div>
      </FullContentLayout>
    )
  }
}

export default ColumnChartHoc(Homepage)
