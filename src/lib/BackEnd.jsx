import useAxios from "../hooks/useAxios";


const AxiosData = (url) => {
  // console.log('url', url);
  const axiosData = useAxios(url);
  const {data, isLoading, error} = axiosData;
  // console.log('DATA', data);
  if (isLoading || error || !data) {
    return {isLoading :'LOADING DAMN!!!!!', error : 'ERROR DAMN!!!!!', noData : 'NO DATA DAMN!!!!!'};
  }
  return data.data;
}


const DataApi = {
 
    getUserMainData : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}`) },
    
    getUserActivity : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/activity`)},
   
    getUserAverageSessions : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/average-sessions`) },

    getUserPerformance : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/performance`) },
}


export default DataApi;
