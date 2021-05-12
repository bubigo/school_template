import React from 'react'
import PropTypes from 'prop-types'

const CategorySum = ({categorySum}) => (
  <>
    <p className="spend">{categorySum/100} $</p>
  </>
)
CategorySum.propTypes = {
  categorySum: PropTypes.number.isRequired
}

export default CategorySum
