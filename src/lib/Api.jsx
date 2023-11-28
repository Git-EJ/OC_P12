import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiContext from "../context/ApiContext"

/**
  *
  * @description This component is used to retrieve the data from mocked or backEnd
  * @description The switch between mocked and backEnd is done with the HeaderLogo component, and the logic is in the ApiContextProvider.
  *
**/
const Api = () => {

  const { userId } = useParams()
  const { currentApi } = useContext(ApiContext)

  const [api, setApi] = useState(currentApi)
  const [loading, setLoading] = useState(0)
  const [error, setError] = useState(null)

  const [dataMain, setDataMain] = useState(null)
  const [dataActivity, setDataActivity] = useState(null)
  const [dataAverage, setDataAverage] = useState(null)
  const [dataPerformance, setDataPerformance] = useState(null)

  
  const getUserMainData = useCallback(() => {
    return currentApi.getUserMainData(userId, setDataMain, setLoading, setError)
  }, [setDataMain, setLoading, setError, currentApi, userId])
  
  const getUserActivity = useCallback(() => {
    return currentApi.getUserActivity(userId, setDataActivity, setLoading, setError)
  }, [setDataActivity, setLoading, setError, currentApi, userId])
  
  const getUserAverageSessions = useCallback(() => {
    return currentApi.getUserAverageSessions(userId, setDataAverage, setLoading, setError)
  }, [setDataAverage, setLoading, setError, currentApi, userId])

  const getUserPerformance = useCallback(() => {
    return currentApi.getUserPerformance(userId, setDataPerformance, setLoading, setError)
  }, [setDataPerformance, setLoading, setError, currentApi, userId])

  useEffect(() =>{
    setApi(currentApi)
  }, [currentApi])

  return (
    {
      getUserMainData,
      getUserActivity,
      getUserAverageSessions,
      getUserPerformance,
      dataMain,
      dataActivity,
      dataAverage,
      dataPerformance,
      loading,
      error,
      api
    }
  )
}

export default Api 