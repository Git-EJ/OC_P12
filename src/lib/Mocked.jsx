
let DATA = null

const getData = async () => {
  if (DATA) return DATA
  try {
    const DATA = await fetch('/data_mocked/data.json')
    .then(response => response.json())
    console.log(DATA)
    return DATA
  } catch(err) {
    console.log(err)
    return null
  }
}

const findData = (data, userId, onData, onLoading, onError) => {
  try {
    onLoading(true)
    const result= data.find(user => +user.id === +userId || +user.userId === +userId);
    onLoading(false)
    onData(result)
  } catch(err) {
    onError(err)
    return null
  }
}

const MockedApi = {
  name: "mocked",
    getUserMainData : async (userId, onData, onLoading, onError) => {
      const data = await getData();
      if (data)
        findData(data.USER_MAIN_DATA, userId, onData, onLoading, onError)
    },
    
    getUserActivity : async (userId, onData, onLoading, onError) => {
      const data = await getData();
      if (data)
        findData(data.USER_ACTIVITY, userId, onData, onLoading, onError)
    },

    getUserAverageSessions : async (userId, onData, onLoading, onError) => {
      const data = await getData();
      if (data)
        findData(data.USER_AVERAGE_SESSIONS, userId, onData, onLoading, onError)
    },

    getUserPerformance : async (userId, onData, onLoading, onError) => {
      const data = await getData();
      if (data)
        findData(data.USER_PERFORMANCE, userId, onData, onLoading, onError)
    },
}


export default MockedApi