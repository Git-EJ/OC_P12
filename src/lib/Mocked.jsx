import DATA from "../../public/data_mocked/data.json"

const MockedApi = () => {

  const findData = (data, userId) => {
    return data.find(user => user.id === +userId || user.userId === +userId);
  }


  return {
    getUserMainData : (userId) => { return findData(DATA.USER_MAIN_DATA, userId) },
    
    getUserActivity : (userId) => { return findData(DATA.USER_ACTIVITY, userId) },

    getUserAverageSessions : (userId) => { return findData(DATA.USER_AVERAGE_SESSIONS, userId) },

    getUserPerformance : (userId) => { return findData(DATA.USER_PERFORMANCE, userId) },
  }
}


export default MockedApi