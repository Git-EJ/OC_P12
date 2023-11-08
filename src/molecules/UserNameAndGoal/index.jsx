import PropTypes from 'prop-types';
import Root from './Styled'


const FirstNameAndGoal = ({ firstName, goal }) => {
  return (
      <Root className="username_and_goal_wrapper">
        <div className="username_and_goal_firstname">
          <p>{`Bonjour ${firstName}`}</p>
        </div>
        <div className="username_and_goal_goal">
          <p>{goal}</p> 
        </div>
      </Root> 
  )
}

FirstNameAndGoal.propTypes = {
  firstName: PropTypes.string,
  goal: PropTypes.string,
}

export default FirstNameAndGoal;