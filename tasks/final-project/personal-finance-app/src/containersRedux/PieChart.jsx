import { connect } from 'react-redux'
import { mapStateToProps } from '../reducersRedux'

const _react = _interopRequireDefault(require('react'))

const _charts = require('@ant-design/charts')

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PieChartContainer = (props) => {
  let total = props.paymentMapState.reduce((sum, item) => {
    return sum + item.payment
  }, 0)

    const data = props.categoryMapState.map((category) => {
    let totalCategory = props.paymentMapState.reduce((sum, item) => {
      return sum + (item.category === category.id ? item.payment :0)
    }, 0)
    let totalSection = ((totalCategory * 100) / (total*100))*100
    let value = total > 0 ? Math.round(totalSection) : 0

    return {
      type: category.name,
      value: value
    }
  })

  const config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    color: ['#3f6a87', '#675477', '#b86881', '#ed6c78', '#f3a88f', '#e86b33'],
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}%',
      style: {
        textAlign: 'center',
        fontSize: 14
      }
    },
    interactions: [{
      type: 'element-selected'
    }, {
      type: 'element-active'
    }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
  return /*#__PURE__*/_react.default.createElement(_charts.Pie, config);
}

export const PieChartCmp = connect(
  mapStateToProps,
)(PieChartContainer)
