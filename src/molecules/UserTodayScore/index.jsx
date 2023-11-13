import {RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import Root from './styled';

const UserTodayScore = ({ todayScore }) => {

  if (!todayScore || todayScore > 1) return (<> </>)
  // console.log('TD',todayScore)

  const score = todayScore * 100
  const scoreData = [{value : todayScore}]
  const scoreDataToAngle = (todayScore * 360)
  const x = (-720 * todayScore + 90)

  // console.log('SD', scoreData);
  // console.log('EA', scoreDataToAngle);
  // console.log('X', x);



  if (!scoreData || !scoreDataToAngle || !x) return (<> </>)

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
                        startAngle={90} 
                        endAngle={scoreDataToAngle + x}
                        // endAngle={-270}                    // TODO REMOVE ALL
                        // endAngle={scoreDataToAngle + 90}   // total= +90    EA= 0
                        // endAngle={scoreDataToAngle - 90}   // total= 0      EA= 0.25
                        // endAngle={scoreDataToAngle - 270}  // total= -90    EA= 0.5
                        // endAngle={scoreDataToAngle - 450}  // total= -180   EA= 0.75
                        // endAngle={scoreDataToAngle - 630}  // total= -270   EA= 1
                        fill = "#FF0101"
                        isAnimationActive={true} 
                        animationBegin={0}        
                        animationDuration={2000} 
                        animationEasing="ease-out"
          >

          <RadialBar  dataKey= 'value'
                      cornerRadius="50%" 
                      minAngle={15} 
                      // label={{ fill: 'lime', position: 'insideStart' }} 
                      isAnimationActive={false} 
                      clockWise={true} 
                     
          />
        
        </RadialBarChart>
      </ResponsiveContainer>
    </Root>
  )
}

UserTodayScore.propTypes = {
 todayScore: PropTypes.number
//  todayScore: PropTypes.object
}

export default UserTodayScore