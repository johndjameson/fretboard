import React from 'react'
import PropTypes from 'prop-types'

const Pitch = ({ frequency, name }) => (
  <div>
    {name}, {frequency}
  </div>
)

Pitch.propTypes = {
  frequency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Pitch.defaultProps = {
  frequency: null,
  name: null
}

export default Pitch
