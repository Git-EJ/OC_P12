import axios from "axios";

/**
 * 
 * @param {string} url 
 * @param {function} onData
 * @param {function} onLoading 
 * @param {function} onError 
 * @description This function is used to get data from back end
 */
const AxiosData = (url, onData, onLoading, onError) => {

  onLoading(c=>c+1)
  setTimeout(() => {
  axios.get(url)
    .then(response => {
      onData(response.data.data)
    })
    .catch(error => {
      onError(error)
    })
    .finally (() => {
      onLoading(c=>c-1)
    })
  }, 2000)
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
