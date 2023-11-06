import { useParams } from "react-router-dom"
import { useContext } from "react"
import ApiContext from "../context/ApiContext"

const Api = () => {
  const { userId } = useParams()

  const { currentApi } = useContext(ApiContext)


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