import NavBar from "../molecules/NavBar";
import UserNameAndGoal from "../molecules/UserNameAndGoal";
import UserActivity from "../molecules/UserActivity";
import UserKeysData from "../molecules/UserKeysData";
// import Api from "../lib/Api";

const Main = () => {
const firstName = 'toto'
  
  return (
    <>
      <main className="main_wrapper">
        <NavBar />

        <div className="main_content_wrapper">
          <UserNameAndGoal firstName={ firstName } goal="perdre du poids 👏" />
          
          <div className="main_content_left_right_block_container">
            <div className="main_content_left_block">
              <div className="main_content_left_block_up">
                <UserActivity />
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
              <UserKeysData /> 
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default Main