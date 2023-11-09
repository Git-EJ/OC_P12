import {RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import Root from './styled';

const UserTodayScore = ({ todayScore }) => {

  if (!todayScore) return (<> </>)
  console.log(todayScore)

  const scoreData = [{value : todayScore*100}]
  const endAngle = (0.25 * 100) * 3.6
  console.log(endAngle);


  if (!scoreData) return (<> </>)

  return (
    <Root className='user_todayscore_container'>
      <ResponsiveContainer width='100%' height='100%'>
      
        <RadialBarChart 
            // width={730} 
            // height={250} 
            innerRadius="60%" 
            outerRadius="80%" 
            data={scoreData} 
            startAngle={90} 
            // endAngle={endAngle + 90}   // total= +90    EA= 0
            endAngle={endAngle - 90}   // total= 0      EA= 0.25
            // endAngle={endAngle - 270}  // total= -90    EA= 0.5
            // endAngle={endAngle - 450}  // total= -180   EA= 0.75
            // endAngle={endAngle - 630}  // total= -270   EA= 1
            fill = "#FF0101"
            radius={[10, 10, 0, 0]} 
            
          >

          <RadialBar minAngle={15} label={{ fill: 'lime', position: 'insideStart' }} background clockWise={true} dataKey= 'value'/>
        
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