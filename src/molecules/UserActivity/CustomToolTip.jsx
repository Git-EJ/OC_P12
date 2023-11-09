import PropTypes from 'prop-types';

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