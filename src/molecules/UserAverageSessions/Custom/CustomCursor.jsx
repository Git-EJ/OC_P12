import PropTypes from 'prop-types'

/**
 * 
 * @param {array} points
 * @returns {JSX.Element}
 * @description This component is used to display the opacity layer when the cursor is hover the chart.
 * 
**/

const CustomCursor = ({ points }) => {     // opacity layer
  const { x } = points[0]
  return (
    <rect  x={x} width={250} height={270} className='user_average_sessions_custom_cursor' /> 
  )
}


CustomCursor.propTypes = {
  points: PropTypes.array,
}


export default CustomCursor


