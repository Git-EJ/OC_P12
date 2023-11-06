import NavBar from "../molecules/NavBar";
import UserNameAndGoal from "../molecules/UserNameAndGoal";
import UserActivity from "../molecules/UserActivity";
import UserKeysData from "../molecules/UserKeysData";
import Api from "../lib/Api";

const Main = () => {

const api = Api()

const userMainData = api.getUserMainData().data
const userActivity = api.getUserActivity().data

const firstName = userMainData?.userInfos?.firstName

const goal = "Félicitation ! Vous avez explosé vos objectifs hier 👏"

const activitySessions = userActivity?.sessions

const keyData = userMainData?.keyData
  


  return (
    <>
      <main className="main_wrapper">
        <NavBar />

        <div className="main_content_wrapper">
          <UserNameAndGoal firstName={ firstName } goal= { goal } />
          
          <div className="main_content_left_right_block_container">
            <div className="main_content_left_block">
              <div className="main_content_left_block_up">
                <UserActivity activitySessions={ activitySessions} />
              </div>

              <div className="main_content_left_block_down">
                <div className="main_content_left_block_down_left">
                  <p>AVERAGE SESSION</p>
                </div>
                <div className="main_content_left_block_down_center">
                  <p>PERFORMANCE</p>
                </div>
                <div className="main_content_left_block_down_right">
                  <p>TODAY SCORE</p>
                </div>
              </div>

            </div>

            <div className="main_content_right_block"> 
              <UserKeysData calorieCount = {keyData?.calorieCount} /> 
            </div>
          </div>

        </div>
      </main>
    </>
  )
}




export default Main