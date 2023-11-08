import PropTypes from 'prop-types';
import { PolarGrid, RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';


const UserPerformance = ({performanceKind, performanceData}) => {

  const kindNumberToKindword = (performanceKind)=> {

    return 
  }

  return (
    <div className='user_performance_container'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart  
          data={performanceData}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            // outerRadius={90}
          }}
          >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey={performanceKind}/>
          <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 'dataMax + 20']} />
          <Radar dataKey="value" stroke="" fill="#FF0101" fillOpacity={0.6} />
          {/* <Legend /> */}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

UserPerformance.propTypes = {
  performanceKind: PropTypes.object,
  performanceData: PropTypes.array,
}

export default UserPerformance
