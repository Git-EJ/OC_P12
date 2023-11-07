import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

// import styled from 'styled-components';
// // styled-components
// const ToolTipWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   background: #E60000;
//   color: #fff;
//   font-weight: 400;
//   font-size: 0.6rem;
//   width:fit-content;
//   height:4rem;
//   padding: 0 0.5rem; ;
// `;

// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     return (
//       <ToolTipWrapper>
//         <p className="custom_tooltip_label">{`${payload[0].payload.kilogram} Kg`}</p>
//         <p className="custom_tooltip_label">{`${payload[1].payload.calories} KCal`}</p>
//       </ToolTipWrapper>
//     )
//   }
//   return null
// }

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom_tooltip'>
        <p className="custom_tooltip_label">{`${payload[0].payload.kilogram} Kg`}</p>
        <p className="custom_tooltip_label">{`${payload[1].payload.calories} KCal`}</p>
      </div>
    )
  }
  return null
}





const UserActivity = ({ activitySessions }) => {
  
  const customLegend = () => {
    const item1 =  document.querySelector('.recharts-legend-item.legend-item-1')
    const item2 =  document.querySelector('.recharts-legend-item.legend-item-2')
    const wrapper = document.querySelector('.recharts-legend-wrapper > ul')
    
    if (item1 && item2 && wrapper) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('legend_item_1_2_container');
      wrapper.appendChild(newDiv);
      newDiv.appendChild(item1);
      newDiv.appendChild(item2);
      console.log(item1, item2, newDiv, wrapper);
    }
  }

  useEffect(() => {
    //TODO obligé de sauvegarder le code pour prendre en compte les appenchilds
    const timer = setTimeout(() => {
      customLegend()
    }, 1);
    return () => clearTimeout(timer);
  }, [])


  // const kgMinValue = activitySessions && activitySessions.reduce((acc, curr) => acc < curr?.kilogram ? acc : curr?.kilogram, activitySessions?.kilogram)
  // console.log('minV', kgMinValue);

  // const kgAverageValue = Math.round(activitySessions && activitySessions.reduce((acc, curr) => acc + curr.kilogram, 0) / activitySessions.length)
  // console.log('medV', kgAverageValue);

  // const kgMaxValue = activitySessions && activitySessions.reduce((acc, curr) => acc > curr?.kilogram ? acc : curr?.kilogram, 0)
  // console.log('maxV', kgMaxValue);


  return (
    <div className="user_activity_container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data = {activitySessions}
          margin={{
            top: 80,
            right: 5,
            left: 20,
            bottom: 10,
          }}
          >

          <CartesianGrid vertical={false} strokeDasharray="1 2"  /> {/*3px de trait, 3px d'espace */}

          <XAxis  dataKey="day" 
                  tickLine={false}  
                  tick={{ fill: '#74798C' }} tickFormatter={(day) => new Date(day).getDate()}
                  stroke= {'#DEDEDE'}
                  strokeWidth={2}
                  tickMargin={15}
                  padding={{ left: 12, right: 12 }}
                  scale={'point'}   
          />
          
          {/* <YAxis yAxisId="left" orientation="right" stroke="rgba(40, 45, 48, 1)" ticks={[kgMinValue, kgAverageValue, kgMaxValue]} tickCount={3} /> */}
          <YAxis  yAxisId="left" 
                  orientation="right" 
                  stroke="rgba(40, 45, 48, 1)" 
                  domain={['dataMin - 2', 'dataMax + 2']}
                  tickLine={false} 
                  axisLine={false}
                  tick={{ fill: '#74798C' }}
                  tickMargin={15}
          />

          <YAxis hide yAxisId="right"/>
          
          <Tooltip 
            contentStyle={{background : '#E60000', border: 'none'}}
            itemStyle={{color: '#fff'}}
            labelStyle={{display: 'none'}}
            content={<CustomTooltip/>}
          />

          <Legend 
            // verticalAlign="top" 
            // align="right" 
            wrapperStyle={{top : '0', margin: '1rem 0 0 0', fontSize: '0.8rem' }} 
            iconSize= {6}
            payload={[
              { value: 'Activité quotidienne', color: 'rgba(40, 45, 48, 1)' },
              { value: 'Poids (kg)', type:'round', color: 'rgba(40, 45, 48, 1)' },
              { value: 'Calories brûlées (kCal)', type:'round', color: '#E60000' }
            ]}
          />

          <Bar yAxisId="left" dataKey="kilogram" fill="rgba(40, 45, 48, 1)" barSize={10} radius={[10, 10, 0, 0]} />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

UserActivity.propTypes = {
  activitySessions: PropTypes.array
  //TODO
  // activitySessions: PropTypes.array.isRequired
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default UserActivity