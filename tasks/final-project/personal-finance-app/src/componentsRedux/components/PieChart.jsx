Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'))

const _charts = require('@ant-design/charts')

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PieChart = () => {
  const data = [{
    type: 'Cat 1',
    value: 27
  }, {
    type: 'Cat 2',
    value: 25
  }, {
    type: 'Cat 3',
    value: 18
  }, {
    type: 'Cat 4',
    value: 15
  }, {
    type: 'Cat 5',
    value: 10
  }, {
    type: 'Other',
    value: 5
  }]
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
      content: '{value}',
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
};

const _default = PieChart;
exports.default = _default;
