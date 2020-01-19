import React from 'react'
import PropTypes from 'prop-types'

import changeColor from '../../util/change-color'

import './style.scss'


const PercentageItem = ({
  duration, base, offset, depth, children,
}) => {
  const width = parseFloat((100 / base) * duration).toFixed(2)
  const marginLeft = parseFloat((100 / base) * offset).toFixed(2)

  const baseColor = '#2b445f'
  const background = depth > 0 ? changeColor(baseColor, depth * 10) : baseColor

  let position = 'inside'
  if (width < 20) {
    if (marginLeft < 20) position = 'right'
    else position = 'left'
  }

  return (
    <div
      className="percentage-item"
      style={{
        width: `${width}%`,
        marginLeft: `${marginLeft}%`,
        background,
      }}
    >
      <div className={`percentage-item__text ${position}`}>{children}</div>
    </div>
  )
}

PercentageItem.propTypes = {
  duration: PropTypes.number.isRequired,
  base: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default PercentageItem
