import {RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import Root from './styled';

/**
 * 
 * @param {number} todayScore
 * @param {number} startAngle
 * @returns {JSX.Element}
 * @description This component is used to display the radial bar chart of the user today score.
 * 
 */

const UserTodayScore = ({ todayScore , startAngle = 90}) => {

  if (!todayScore || todayScore > 1) return (<> </>)

  const score = todayScore * 100
  const scoreData = [{value : todayScore}]
  const scoreDataToAngle = (-todayScore * 360)

  if (!scoreData || !scoreDataToAngle ) return (<> </>)

  return (
    <Root className='user_todayscore_container'>

      <span className='user_today_score_title'>Score</span>

      <div className='user_todayscore_center_container'>
        <div className='user_todayscore_center_score'>{`${score}%`}</div>
        <div className='user_todayscore_center_text'>de votre objectif</div>
      </div>
      

      <ResponsiveContainer width='100%' height='100%'>
      
        <RadialBarChart data={scoreData}
                        innerRadius="77%" 
                        outerRadius="90%" 
                        startAngle={startAngle} 
                        endAngle={scoreDataToAngle + startAngle}
                        fill = "#FF0101"
          >

          <RadialBar  dataKey= 'value'
                      cornerRadius="50%" 
                      minAngle={15} 
                      isAnimationActive={true} 
                      animationBegin={200}        
                      animationDuration={1700} 
                      animationEasing="ease-out"
                      clockWise={true} 
                      // label={{ fill: 'lime', position: 'insideStart' }}  //DEV
                     
          />
        
        </RadialBarChart>
      </ResponsiveContainer>
    </Root>
  )
}

UserTodayScore.propTypes = {
 todayScore: PropTypes.number,
 startAngle: PropTypes.number 
}

export default UserTodayScore