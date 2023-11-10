import {RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import Root from './styled';

const UserTodayScore = ({ todayScore }) => {

  if (!todayScore || todayScore > 1) return (<> </>)
  console.log('TD',todayScore)

  const scoreData = [{value : todayScore}]
  const scoreDataToAngle = (todayScore * 360)
  const x = (-720 * todayScore + 90)

  console.log('SD', scoreData);
  console.log('EA', scoreDataToAngle);
  console.log('X', x);


  if (!scoreData || !scoreDataToAngle || !x) return (<> </>)

  return (
    <Root className='user_todayscore_container'>
      <ResponsiveContainer width='100%' height='100%'>
      
        <RadialBarChart data={scoreData}
                        // width={730} 
                        // height={250} 
                        innerRadius="60%" 
                        outerRadius="80%" 
                        startAngle={90} 
                        // endAngle={-270}
                        endAngle={scoreDataToAngle + x}
                        // endAngle={scoreDataToAngle + 90}   // total= +90    EA= 0
                        // endAngle={scoreDataToAngle - 90}   // total= 0      EA= 0.25
                        // endAngle={scoreDataToAngle - 270}  // total= -90    EA= 0.5
                        // endAngle={scoreDataToAngle - 450}  // total= -180   EA= 0.75
                        // endAngle={scoreDataToAngle - 630}  // total= -270   EA= 1
                        fill = "#FF0101"
                        radius={[10, 10, 0, 0]} 
          >

          <RadialBar  dataKey= 'value'
                      cornerRadius="50%" 
                      minAngle={15} 
                      label={{ fill: 'lime', position: 'insideStart' }} 
                      isAnimationActive={true} 
                      // animationEasing='ease-out'
                      background clockWise={true} 
            />
        
          {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
        
          {/* <Tooltip /> */}

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