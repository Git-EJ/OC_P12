import { useParams } from "react-router-dom"
import DATA from "../../public/data_mocked/data.json"

const MockedApi = () => {
  const { userId } = useParams()
  console.log(userId)


  return {
    getUserMainData : () => {
      const toto =  DATA.USER_MAIN_DATA.find(user => user.id === userId)
      console.log(toto);
      return toto
    },
    
    getUserPerformance : () => {
      return DATA.USER_PERFORMANCE.find(user => user.id === userId)
    }
  }
}

export default MockedApi