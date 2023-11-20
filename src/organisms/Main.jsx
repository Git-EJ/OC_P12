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


const Main = () => {

  const [refresh, setRefresh] = useState(false)
  const [errorProps, setErrorProps] = useState(null)

  const goal = "Félicitation ! Vous avez explosé vos objectifs hier 👏"

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

  useEffect(()=> {
    console.log("UE_MAIN--MAIN")
    if (!dataMain || refresh) getUserMainData()
    if (!dataActivity || refresh) getUserActivity()
    if (!dataAverage || refresh) getUserAverageSessions()
    if (!dataPerformance || refresh) getUserPerformance()
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

  useEffect(() => {
    console.log('UE_MAIN--REFRESH')
    setRefresh(true)
  }, [api])

  useEffect(() => {
    if (error && error.response) {
      const { status, statusText, data } = error.response
      setErrorProps({ status, statusText, message: data ? data : null})
    }
  }, [error, setErrorProps])


  // useEffect(() => {
  //   if(error) {
  //     console.log('errorMain', error)
  //     console.log('errorPropsMain', errorProps)
  //   }
  // }, [error, errorProps])

  
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

        {loading ? (
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