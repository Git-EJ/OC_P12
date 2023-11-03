import KeyData from "../atoms/KeyData";
import Calories from "../atoms/Calories";
import Carbohydrates from "../atoms/Carbohydrates";
import Proteins from "../atoms/Proteins";
import Lipids from "../atoms/Lipids";
import Data from "../../public/data_mocked/data.json"

const UserKeysData = () => {
  return (
    <>
      <KeyData icon={<Calories />} color={'rgba(255, 1, 1, 0.1)'} itemCount={Data.USER_MAIN_DATA[0].keyData.calorieCount} unit={'kCal'} label={'Calories'} />
      <KeyData icon={<Proteins/>} color={'rgba(74, 184, 255, 0.2)'} itemCount={Data.USER_MAIN_DATA[0].keyData.proteinCount} unit={'g'} label={'Proteines'} />
      <KeyData icon={<Carbohydrates />} color={'rgba(253, 204, 12, 0.1)'} itemCount={Data.USER_MAIN_DATA[0].keyData.carbohydrateCount} unit={'g'} label={'Glucides'} />
      <KeyData icon={<Lipids />} color={'rgba(253, 81, 129, 0.1)'} itemCount={Data.USER_MAIN_DATA[0].keyData.lipidCount} unit={'g'} label={'Lipides'} />
    </>
  )
}

export default UserKeysData