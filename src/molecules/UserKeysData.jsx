import KeyData from "../atoms/KeyData";
import Calories from "../atoms/Calories";
import Carbohydrates from "../atoms/Carbohydrates";
import Proteins from "../atoms/Proteins";
import Lipids from "../atoms/Lipids";
import PropTypes from 'prop-types'


const UserKeysData = ({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) => {
  
  return (
    <>
      <KeyData icon={<Calories />} color={'rgba(255, 1, 1, 0.1)'} itemCount={calorieCount} unit={'kCal'} label={'Calories'} />
      <KeyData icon={<Proteins/>} color={'rgba(74, 184, 255, 0.2)'} itemCount={proteinCount} unit={'g'} label={'Proteines'} />
      <KeyData icon={<Carbohydrates />} color={'rgba(253, 204, 12, 0.1)'} itemCount={carbohydrateCount} unit={'g'} label={'Glucides'} />
      <KeyData icon={<Lipids />} color={'rgba(253, 81, 129, 0.1)'} itemCount={lipidCount} unit={'g'} label={'Lipides'} />
    </>
  )
}

UserKeysData.propTypes = {
  calorieCount: PropTypes.number.isRequired,
  proteinCount: PropTypes.number.isRequired,
  carbohydrateCount: PropTypes.number.isRequired,
  lipidCount: PropTypes.number.isRequired
}

export default UserKeysData