import React from "react"
import * as CONSTANT_CONFIG from '../const'

const ColumnChartHoc = Component => {
  return class extends React.Component {
    getMeasures() {
      return [
        {
          measure: {
            localIdentifier: CONSTANT_CONFIG.column_chart.LOCAL_IDENTIFIER,
            definition: {
              measureDefinition: {
                item: {
                  uri: CONSTANT_CONFIG.column_chart.GROSS_PROFIT_MEASURE
                }
              }
            },
            alias: CONSTANT_CONFIG.column_chart.GROSS_PROFIT_ALIAS
          }
        }
      ]
    }

    render() {
      return (
        <Component
          {...this.prop}
          measures={this.getMeasures()}
          projectId={CONSTANT_CONFIG.column_chart.PROJECT_ID}
          dateAttrInMonths={CONSTANT_CONFIG.column_chart.DATE_ATTR_IN_MONTHS}
          dateAttr={CONSTANT_CONFIG.column_chart.DATE_ATTR}
        />
      )
    }
  }
}

export { ColumnChartHoc }
