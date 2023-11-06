import PropTypes from 'prop-types'

const KeyData = ({ icon, color, itemCount, unit, label }) => {


  return (
    <div className="key_data_container">
      <div className="key_data_container_icon" style={{ background: `${color}`}}> 
        <div className='key_data_icon'>
          {icon}
        </div>
      </div>
      <div className="key_data_container_text">
        <div className="key_data_container_text_counter">
          {itemCount && itemCount.toLocaleString('en-US')}{unit}
        </div>
        <div className="key_data_container_text_label">
          {label}
        </div>
      </div>
    </div>
  )
}

KeyData.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.element.isRequired,
  itemCount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
export default KeyData