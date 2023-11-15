import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const AxiosData = (url) => {
  // console.log('url', url);
  const navigate = useNavigate()
  const axiosData = useAxios(url)
  const {data, isLoading, error} = axiosData
  // console.log('DATA', data)
  // console.log('isLoading', isLoading)
  // console.log('error', error)

  
  if (isLoading) {
    console.log('Loading...')
  }
  
  if (error) {
    console.log('ERROR 404');
    navigate("/404", { replace: true })
  }
  
  if (!data) {
    console.log('No data')
    return null
  }

  return data.data
}


const DataApi = {
 
    getUserMainData : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}`) },
    
    getUserActivity : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/activity`)},
   
    getUserAverageSessions : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/average-sessions`) },

    getUserPerformance : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/performance`) },
}


export default DataApi;
