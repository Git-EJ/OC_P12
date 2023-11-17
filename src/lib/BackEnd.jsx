import axios from "axios";

const AxiosData = (url, onData, onLoading, onError) => {

  onLoading(true)
  setTimeout(() => {
  axios.get(url)
    .then(response => {
      onData(response.data.data)
    })
    .catch(error => {
      onError(error)
    })
    .finally (() => {
      onLoading(false)
    })
  }, 10000) //TODO set to 1000
}

const HOST = "http://localhost:3000"
const USER_API = HOST + "/user"

const DataApi = {
  name: "external",

  getUserMainData : (userId, onData, onLoading, onError) => { AxiosData(`${USER_API}/${userId}`, onData, onLoading, onError) },
  
  getUserActivity : (userId, onData, onLoading, onError) => { AxiosData(`${USER_API}/${userId}/activity`, onData, onLoading, onError)},
  
  getUserAverageSessions : (userId, onData, onLoading, onError) => { AxiosData(`${USER_API}/${userId}/average-sessions`, onData, onLoading, onError) },

  getUserPerformance : (userId, onData, onLoading, onError) => { AxiosData(`${USER_API}/${userId}/performance`, onData, onLoading, onError) },
}


export default DataApi;
