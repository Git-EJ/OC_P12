import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import CustomTooltip from "./CustomToolTip"
import Root from './Styled';


/**
 * 
 * @param {array} activitySessions
 * @returns {JSX.Element}
 * @description This component is used to display the user activity sessions with Bar Chart.
 * 
**/

const UserActivity = ({ activitySessions }) => {

  //FOR RIGHT Y AXIS VALUE SET IT TO MIN/AVERAGE/MAX
  const [kgMinValue, setKgMinValue] = useState(0)
  const [kgAverageValue, setKgAverageValue] = useState(0)
  const [kgMaxValue, setKgMaxValue] = useState(0)

  useEffect(() => {
    if (activitySessions) {

      const minValue = activitySessions.reduce((acc, curr) => acc < curr?.kilogram ? acc : curr?.kilogram, activitySessions?.kilogram)
      
      const averageValue = Math.round(activitySessions.reduce((acc, curr) => acc + curr.kilogram, 0) / activitySessions.length)

      const maxValue = activitySessions.reduce((acc, curr) => acc > curr?.kilogram ? acc : curr?.kilogram, 0)
  
      setKgMinValue(Math.round(minValue)-1)
      setKgAverageValue(Math.round(averageValue))
      setKgMaxValue(Math.round(maxValue))
    }
  }, [activitySessions])



  if (!activitySessions) return(<> </>)

  return (
    <Root className="user_activity_container">
      <ResponsiveContainer width="100%" height="100%">
       
        <BarChart data = {activitySessions}
                  margin={{
                    top: 80,
                    right: 5,
                    left: 20,
                    bottom: 10,
                  }}
          >

          <CartesianGrid  vertical={false} strokeDasharray="1 2"  /> {/*1px de trait, 2px d'espace */}

          <XAxis  dataKey="day" 
                  tickLine={false}  
                  tick={{ fill: '#74798C' }} 
                  tickMargin={15}
                  tickFormatter={(day) => new Date(day).getDate()}
                  stroke= {'#DEDEDE'}
                  strokeWidth={2}
                  padding={{ left: 12, right: 12 }}
                  scale={'point'}   
          />
          
          <YAxis  yAxisId="left"
                  orientation="right"
                  stroke="rgba(40, 45, 48, 1)"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#74798C' }}
                  tickMargin={15}
                  domain={[kgMinValue, kgMaxValue]}
                  ticks={[kgMinValue, kgAverageValue, kgMaxValue]}
                  tickCount={3}
          />

          <YAxis  hide yAxisId="right"/>
          
          <Tooltip  content={<CustomTooltip/>}
                    contentStyle={{background : '#E60000', border: 'none'}}
                    itemStyle={{color: '#fff'}}
                    labelStyle={{display: 'none'}}
          />

          <Legend   wrapperStyle={{top : '0', margin: '1rem 0 0 0', fontSize: '0.8rem' }} 
                    iconSize= {6}
                    payload={[
                      { value: 'Activité quotidienne', color: 'rgba(40, 45, 48, 1)' },
                      { value: 'Poids (kg)', type:'round', color: 'rgba(40, 45, 48, 1)' },
                      { value: 'Calories brûlées (kCal)', type:'round', color: '#E60000' }
                    ]}
          />

          <Bar  dataKey="kilogram"
                yAxisId="left"  
                fill="rgba(40, 45, 48, 1)" 
                barSize={10} 
                radius={[10, 10, 0, 0]} 
          />
          
          <Bar  dataKey="calories" 
                yAxisId="right" 
                fill="#E60000" 
                barSize={10} 
                radius={[10, 10, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </Root>
  )
}

UserActivity.propTypes = {
  activitySessions: PropTypes.array.isRequired
}


export default UserActivity