// *************************************
//
//   Root
//   -> Entry component
//
// *************************************

// ----- Packages ----- //

import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'

// ----- Local ----- //

import App from 'noteApp/components/App'

// -------------------------------------
//   Component
// -------------------------------------

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

// -------------------------------------
//   Props
// -------------------------------------

Root.propTypes = {
  store: PropTypes.object.isRequired
}

// -------------------------------------
//   Export
// -------------------------------------

export default Root
