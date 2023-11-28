import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Api from "../lib/Api";
import NavBar from "../molecules/NavBar";
import LoadingSpinner from "../molecules/LoadingSpinner";
import UserNameAndGoal from "../molecules/UserNameAndGoal";
import UserActivity from "../molecules/UserActivity";
import UserKeysData from "../molecules/UserKeysData";
import UserAverageSessions from "../molecules/UserAverageSessions";
import UserPerformance from "../molecules/UserPerformance"
import UserTodayScore from "../molecules/UserTodayScore";


/**
 * 
 * @description This component is used to display the main page. Main === Navbar && firstame and goal && all charts 
 * @returns {JSX.Element}
 */

const Main = () => {

  const [refresh, setRefresh] = useState(false) //used to refresh the data when the api is changed (mocked or backEnd)
  const [errorProps, setErrorProps] = useState(null) //error stored in state, able to use it in the Navigate component

  const goal = "Félicitation ! Vous avez explosé vos objectifs hier 👏"


  /**
   * @description This component is used to retrieve the data from the API (mocked or backEnd).
   * @param {function} getUserMainData - get the main data of the user (name, goal, todayScore, keyData)
   * @param {function} getUserActivity - get the user activity (sessions)
   * @param {function} getUserAverageSessions - get the user average sessions (sessions)
   * @param {function} getUserPerformance - get the user performance (kind, data)
   * 
   * @param {object} dataMain - main data of the user (name, goal, todayScore, keyData) stored in state
   * @param {object} dataActivity - user activity (sessions) stored in state
   * @param {object} dataAverage - user average sessions (sessions) stored in state
   * @param {object} dataPerformance - user performance (kind, data) stored in state
   * @param {number} loading - loading state
   * @param {object} error - error state
   * @param {string} api - api state (mocked or backEnd)
   * 
   */
  const {
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
  } = Api()
  
/**
 * @description This useEffect is used to "recall" the data if data change or refresh is true
 */
  useEffect(()=> {
    if (!dataMain || refresh) getUserMainData();
    if (!dataActivity || refresh) getUserActivity();
    if (!dataAverage || refresh) getUserAverageSessions();
    if (!dataPerformance || refresh) getUserPerformance();
    setRefresh(false)
  }, [dataMain,
    dataActivity,
    dataAverage,
    dataPerformance,
    getUserMainData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
    refresh
  ])

  /**
   *
   * @description This useEffect is used to refresh the data when the api is changed (mocked or backEnd)
   * @param {boolean} refresh - refresh state
   */
  useEffect(() => {
    setRefresh(true)
  }, [api])

  /**
   * @description This useEffect is used to set the errorProps when the error is changed
   * @param {object} errorProps - errorProps state
   * @param {object} error - error state
   * @param {number} status - status of the error
   * @param {string} statusText - statusText of the error
   * @param {object} data - data of the error
   *  
  */
  useEffect(() => {
    if (error && error.response) {
      const { status, statusText, data } = error.response
      setErrorProps({ status, statusText, message: data ? data : null})
    }
  }, [error])


  return (
    <>
      {errorProps && ( 
        <Navigate
          to={`/error/${errorProps.status}`}
          state={{ errorProps }}
          replace={true}
        />
      )}

      <main className="main_content_wrapper">
      <NavBar />

        {loading>0 ? (
          <LoadingSpinner />
        ) : (

          <>
            {dataMain && dataMain.userInfos && (
              <UserNameAndGoal firstName={ dataMain.userInfos.firstName } goal= { goal } />
            )}
            
            <div className="main_content_left_right_block_container">
              <div className="main_content_left_block">
                {dataActivity && (
                  <div className="main_content_left_block_up">
                    <UserActivity activitySessions={ dataActivity.sessions }  />
                  </div>
                )}

                <div className="main_content_left_block_down">
                  {dataAverage && ( 
                    <div className="main_content_left_block_down_left">
                      <UserAverageSessions averageSessions={ dataAverage.sessions } />
                    </div>
                  )}

                  {dataPerformance && (
                    <div className="main_content_left_block_down_center">
                      <UserPerformance
                        performanceKind={ dataPerformance.kind }
                        performanceData={ dataPerformance.data }
                      />
                    </div>
                  )}
                  
                  {dataMain && (
                    <div className="main_content_left_block_down_right">
                      <UserTodayScore todayScore={ dataMain.todayScore || dataMain.score } /> 
                    </div>
                  )}
                </div>
              </div>

              {dataMain && dataMain.keyData && (
                <div className="main_content_right_block"> 
                  <UserKeysData 
                    calorieCount = {dataMain.keyData.calorieCount}
                    proteinCount={dataMain.keyData.proteinCount}
                    carbohydrateCount={dataMain.keyData.carbohydrateCount}
                    lipidCount={dataMain.keyData.lipidCount}
                  /> 
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </>
  )
}


export default Main