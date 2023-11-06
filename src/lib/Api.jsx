import { useParams } from "react-router-dom"
// import MockedApi from "./Mocked"
// import DataApi from "./BackEnd"
import { useContext } from "react"
import ApiContext from "../context/ApiContext"

const Api = () => {
  const { userId } = useParams()
  // console.log(userId)

  const { currentApi } = useContext(ApiContext)
  // const currentApi = MockedApi()
  // const currentApi = DataApi()


  const getUserMainData = () => { return currentApi.getUserMainData(userId) }
  
  const getUserActivity = () => { return currentApi.getUserActivity(userId) }
  
  const getUserAverageSessions = () => { return currentApi.getUserAverageSessions(userId) }

  const getUserPerformance = () => { return currentApi.getUserPerformance(userId) }

  return (
    {
      getUserMainData,
      getUserActivity,
      getUserAverageSessions,
      getUserPerformance
    }
  )
}

export default Api 