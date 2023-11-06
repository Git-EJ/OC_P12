import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

// // styled-components
// const ToolTipWrapper = styled('div')`
//   background: rgba(230, 0, 0, 1);
// `

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.kilogram} Kg`}</p>
        <p className="label">{`${payload[1].payload.calories} KCal`}</p>
      </div>
    );
  }

  return null
}


const UserActivity = ({ activitySessions }) => {

  // const kgMinValue = userData.reduce((acc, curr) => acc < curr.kilogram ? acc : curr.kilogram, userData[0].kilogram)
  // // console.log('minV', kgMinValue);

  // const kgAverageValue = Math.round(userData.reduce((acc, curr) => acc + curr.kilogram, 0) / userData.length)
  // // console.log('medV', kgAverageValue);

  // const kgMaxValue = userData.reduce((acc, curr) => acc > curr.kilogram ? acc : curr.kilogram, 0)
  // // console.log('maxV', kgMaxValue);



  return (
    <div className="user_activity_container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data = {activitySessions}
          
          margin={{
            top: 30,
            right: 5,
            left: 5,
            bottom: 30,
          }}
          >

          <CartesianGrid vertical={false} strokeDasharray="3 3"  /> {/*3px de trait, 3px d'espace */}
          <XAxis dataKey="day"  />
          {/* <YAxis yAxisId="left" orientation="left" stroke="rgba(40, 45, 48, 1)" ticks={[kgMinValue, kgAverageValue, kgMaxValue]} /> */}
          <YAxis yAxisId="left" orientation="left" stroke="rgba(40, 45, 48, 1)" domain={['dataMin - 2', 'dataMax + 2']}/>
          <YAxis yAxisId="right" orientation="right" stroke="rgba(230, 0, 0, 1)" />
          
          <Tooltip 
            contentStyle={{background : 'rgba(230, 0, 0, 1)', border: 'none'}}
            itemStyle={{color: '#fff'}}
            labelStyle={{display: 'none'}}
            content={<CustomTooltip/>}
          />

          <Legend 
            verticalAlign="top" 
            align="right" 
            wrapperStyle={{top : '0', margin: '1rem 0 0 0', fontSize: '0.8rem' }} 
            iconSize= {6}
            payload={[
              { value: 'Poids (kg)', type:'round', color: 'rgba(40, 45, 48, 1)' },
              { value: 'Calories brûlées (kCal)', type:'round', color: 'rgba(230, 0, 0, 1)', textColor: 'blue' }
            ]}
          />

          <Bar yAxisId="left" dataKey="kilogram" fill="rgba(40, 45, 48, 1)" barSize={10} radius={[10, 10, 0, 0]} />
          <Bar yAxisId="right" dataKey="calories" fill="rgba(230, 0, 0, 1)" barSize={10} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

UserActivity.propTypes = {
  activitySessions: PropTypes.array.isRequired
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default UserActivity