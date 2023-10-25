import PropTypes from 'prop-types';


const FirstNameAndGoal = ({ firstName, goal }) => {
  return (
    <div className="username_and_goal_wrapper">
      <div className="username_and_goal_firstname">
        <p>{`Bonjour ${firstName}`}</p>
      </div>
      <div className="username_and_goal_goal">
        {/*TODO: remove Votre objectif*/}
        <p>{`Votre objectif : ${goal}`}</p> 
      </div>
    </div>
  )
}

FirstNameAndGoal.propTypes = {
  firstName: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
}

export default FirstNameAndGoal;