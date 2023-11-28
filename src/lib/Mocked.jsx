let DATA = null

/**
 * 
 *  @description This component is used to retrieve the data from the public/data_mocked/data.json.
 */
const getData = async (onError) => {
  if (DATA) return DATA

  return (await fetch('/data_mocked/data.json')
  .then(response => {
    if (!response.ok) throw ({...response, status: response.status, statusText: response.statusText, data: "Mocked data not found"})
    return response.json()
  })
  .then(data => {DATA=data; return data})
  .catch(err => {
    console.log('%cmocked_getData_error', 'color:red', err);
    if (err.status) {
      onError({response: err})
    } else {
      onError({response: {status: 500, statusText: "Unknwon error : contact the administrator", data: "Mocked data failed"}})
    }
    return null
  }))
}

/**
 * 
 * @param {object} data from getData in called in mockedApi
 * @param {number} userId from useParams
 * @param {function} onData from Api component (data setter)
 * @param {function} onLoading from Api component (loading setter)
 * @param {function} onError from Api component (error setter)
 * @returns {object} result
 * @description  This function is used to find user from getDATA. Used in MockedApi. 
 *               If no user is found, return null and set error to true.
 *
 */

const findData = (data, userId, onData, onLoading, onError) => {
  try {
    onLoading(c=>c+1)
    const result= data.find(user => +user.id === +userId || +user.userId === +userId);
    onLoading(c=>c-1)
    onData(result)
  } catch(err) {
    console.log('%cmocked_findData_error', 'color:orange', err);
    onError(err)
  }
}

/**
 * @param {number} userId from useParams
 * @param {function} onData from Api component (data setter)
 * @param {function} onLoading from Api component (loading setter)
 * @param {function} onError from Api component (error setter)
 * @returns {object} MockedApi.getMainData - get the main data of the user
 * @returns {object} MockedApi.getUserActivity - get the user activity
 * @returns {object} MockedApi.getUserAverageSessions - get the user average sessions
 * @returns {object} MockedApi.getUserPerformance - get the user performance
 * 
**/

const MockedApi = {
  name: "mocked",
    getUserMainData : async (userId, onData, onLoading, onError) => {
      const data = await getData(onError);
      if (data)
        findData(data.USER_MAIN_DATA, userId, onData, onLoading, onError)
    },
    
    getUserActivity : async (userId, onData, onLoading, onError) => {
      const data = await getData(onError);
      if (data)
        findData(data.USER_ACTIVITY, userId, onData, onLoading, onError)
    },

    getUserAverageSessions : async (userId, onData, onLoading, onError) => {
      const data = await getData(onError);
      if (data)
        findData(data.USER_AVERAGE_SESSIONS, userId, onData, onLoading, onError)
    },

    getUserPerformance : async (userId, onData, onLoading, onError) => {
      const data = await getData(onError);
      if (data)
        findData(data.USER_PERFORMANCE, userId, onData, onLoading, onError)
    },
}


export default MockedApi