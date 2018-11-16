import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Pitch = ({ frequency, name, onClick, position, selected }) => {
  const classes = {
    span: classNames({ selected })
  }

  return (
    <div onClick={onClick}>
      <span className={classes.span}>
        {position}. {name}, {frequency}
      </span>
    </div>
  )
}

Pitch.propTypes = {
  frequency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired
}

Pitch.defaultProps = {
  frequency: null,
  name: null,
  onClick: () => null,
  position: null,
  selected: false
}

export default Pitch
