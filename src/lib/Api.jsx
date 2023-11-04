import { useContext } from "react"
import Context from "../context"

const Api = () => {
  const { currentApi } = useContext(Context)

  const getUserMainData = () => {
    return currentApi.getUserMainData()
  }

  const getUserPerformance = () => {
    return currentApi.getUserProfile()
  }

  return (
    {
      getUserMainData,
      getUserPerformance
    }
  )
}

export default Api 