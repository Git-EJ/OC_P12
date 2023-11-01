import propTypes from 'prop-types'

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
          {itemCount.toLocaleString('en-US')}{unit}
        </div>
        <div className="key_data_container_text_label">
          {label}
        </div>
      </div>
    </div>
  )
}

KeyData.propTypes = {
  color: propTypes.string,
  icon: propTypes.element.isRequired,  // element for react component
  itemCount: propTypes.number.isRequired,
  unit: propTypes.string.isRequired,
  label: propTypes.string.isRequired
}
export default KeyData