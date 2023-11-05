import useAxios from "../hooks/useAxios";


const AxiosData = (url) => {
  console.log('url', url);
  const axiosData = useAxios(url);
  const {data, isLoading, error} = axiosData;
  console.log('DATA', data);
  if (isLoading || error || !data) {
    return {isLoading :'LOADING DAMN!!!!!', error : 'ERROR DAMN!!!!!', noData : 'NO DATA DAMN!!!!!'};
  }
  return data;
}


const DataApi = () => {

  // const findData = (data, userId) => {
  //   console.log('UID', userId);
  //   return data.find(user => user.id === +userId || user.userId === +userId);
  // }

  return {
    // getUserMainData : (userId) => { return findData(DATA.USER_ACTIVITY, userId) },
    getUserMainData : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}`) },
    
    getUserActivity : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/activity`)},
   
    getUserAverageSessions : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/average-sessions`) },

    getUserPerformance : (userId) => { return AxiosData(`http://localhost:3000/user/${userId}/performance`) },
  }
}


export default DataApi;
