import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { store }  from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import  App  from '../src/template/app'


  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')

)



