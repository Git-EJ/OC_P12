import KeyData from "../atoms/KeyData";
import Calories from "../atoms/Calories";
import Carbohydrates from "../atoms/Carbohydrates";
import Proteins from "../atoms/Proteins";
import Lipids from "../atoms/Lipids";

const UserKeysData = () => {
  return (
    <>
      <KeyData icon={<Calories />} color={'rgba(255, 1, 1, 0.1)'} itemCount={1930} unit={'kCal'} label={'Calories'} />
      <KeyData icon={<Proteins/>} color={'rgba(74, 184, 255, 0.2)'} itemCount={155} unit={'g'} label={'Proteines'} />
      <KeyData icon={<Carbohydrates />} color={'rgba(253, 204, 12, 0.1)'} itemCount={290} unit={'g'} label={'Glucides'} />
      <KeyData icon={<Lipids />} color={'rgba(253, 81, 129, 0.1)'} itemCount={50} unit={'g'} label={'Lipides'} />
    </>
  )
}

export default UserKeysData