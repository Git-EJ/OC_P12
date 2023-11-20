import PropTypes from 'prop-types';
import Root from './Styled'

/**
 * 
 * @param {string} firstName
 * @param {string} goal
 * @returns {JSX.Element}
 * @description This component is used to display the username and goal.
 */

const FirstNameAndGoal = ({ firstName, goal }) => {

  if (!firstName && ! goal) return (<> </>)

  
  return (
      <Root className="username_and_goal_wrapper">
        <div className="username_and_goal_container">
          {/* TODO good practice???? */}
          <span className='sername_and_goal_hello'>Bonjour </span>
          <span className='username_and_goal_firstname'>{firstName}</span>
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