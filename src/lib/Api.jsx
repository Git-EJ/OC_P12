import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiContext from "../context/ApiContext"

const Api = () => {
  const { currentApi } = useContext(ApiContext)

  const { userId } = useParams()
  const [dataMain, setDataMain] = useState(null)
  const [dataActivity, setDataActivity] = useState(null)
  const [dataAverage, setDataAverage] = useState(null)
  const [dataPerformance, setDataPerformance] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [api, setApi] = useState(currentApi)

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
    console.log("currentApi", currentApi)
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