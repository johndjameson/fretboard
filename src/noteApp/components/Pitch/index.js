import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Pitch = ({ frequency, name, onClick, selected }) => {
  const classes = {
    base: classNames({ selected })
  }

  return (
    <div className={classes.base} onClick={onClick}>
      {name}, {frequency}
    </div>
  )
}

Pitch.propTypes = {
  frequency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
}

Pitch.defaultProps = {
  frequency: null,
  name: null,
  onClick: () => null,
  selected: false
}

export default Pitch
