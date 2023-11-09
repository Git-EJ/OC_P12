import PropTypes from 'prop-types'

const CustomCursor = ({ points }) => {     // opacity layer
  const { x } = points[0]
  return (
    <rect  x={x} width={250} height={250} className='user_average_sessions_custom_cursor' /> 
  )
}


CustomCursor.propTypes = {
  points: PropTypes.array,
}


export default CustomCursor


