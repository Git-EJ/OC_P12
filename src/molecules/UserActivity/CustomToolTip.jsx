import PropTypes from 'prop-types';

/**
  * 
  * @param {boolean} active
  * @param {object} payload
  * @returns {JSX.Element}
  * @description This component is used to display a custom tooltip.
  * 
 */

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom_tooltip'>
        <p className="custom_tooltip_label">{`${payload[0].payload.kilogram} Kg`}</p>
        <p className="custom_tooltip_label">{`${payload[1].payload.calories} KCal`}</p>
      </div>
    )
  }
  return null
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default CustomToolTip