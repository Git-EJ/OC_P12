import Api from "../lib/Api";
import NavBar from "../molecules/NavBar";
import UserNameAndGoal from "../molecules/UserNameAndGoal";
import UserActivity from "../molecules/UserActivity";
import UserKeysData from "../molecules/UserKeysData";
import UserAverageSessions from "../molecules/UserAverageSessions";
import UserPerformance from "../molecules/UserPerformance"
import UserTodayScore from "../molecules/UserTodayScore";


const Main = () => {

const api = Api()
const userMainData = api.getUserMainData() 
const userActivity = api.getUserActivity()
const userAverageSessions = api.getUserAverageSessions()
const userPerformance = api.getUserPerformance()

const firstName = userMainData?.userInfos?.firstName

const goal = "Félicitation ! Vous avez explosé vos objectifs hier 👏"

const activitySessions = userActivity?.sessions

const keyData = userMainData?.keyData

const averageSessions = userAverageSessions?.sessions 

const performanceKind =  userPerformance?.kind

const performanceData = userPerformance?.data

const todayScore = userMainData?.todayScore ?? userMainData?.score


  return (
    <>
      <main className="main_wrapper">
        <NavBar />

        <div className="main_content_wrapper">
          <UserNameAndGoal firstName={ firstName } goal= { goal } />
          
          <div className="main_content_left_right_block_container">
            <div className="main_content_left_block">
              <div className="main_content_left_block_up">
                <UserActivity activitySessions={ activitySessions}  />
              </div>

              <div className="main_content_left_block_down">
                <div className="main_content_left_block_down_left">
                  <UserAverageSessions averageSessions={ averageSessions } />
                </div>
                <div className="main_content_left_block_down_center">
                  <UserPerformance performanceKind={ performanceKind } performanceData={ performanceData } />
                </div>
                <div className="main_content_left_block_down_right">
                  <UserTodayScore todayScore={ todayScore } /> 
                </div>
              </div>

            </div>

            <div className="main_content_right_block"> 
              <UserKeysData 
                calorieCount = {keyData?.calorieCount}
                proteinCount={keyData?.proteinCount}
                carbohydrateCount={keyData?.carbohydrateCount}
                lipidCount={keyData?.lipidCount}
              /> 
            </div>
          </div>

        </div>
      </main>
    </>
  )
}




export default Main