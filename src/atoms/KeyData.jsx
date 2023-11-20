import PropTypes from 'prop-types'

/**
 * 
 * @param {element} icon
 * @param {string} color
 * @param {number} itemCount
 * @param {string} unit
 * @param {string} label
 * @returns {JSX.Element}
 * @description This component is used to display the key data.
 * 
**/

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
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
export default KeyData