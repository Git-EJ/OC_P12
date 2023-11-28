import PropTypes from 'prop-types';
import { PolarGrid, RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Root from './styled';

/**
 * 
 * @param {object} performanceKind
 * @param {array} performanceData
 * @returns {JSX.Element}
 * @description This component is used to display the radar chart of the user performance.
 * 
 **/


const convertDataKind = (performanceData, performanceKind) => {

  const upperKind = new Map()
  Object.keys(performanceKind).forEach(key => {
    upperKind.set(""+key, performanceKind[key].charAt(0).toUpperCase() + performanceKind[key].slice(1).toLowerCase())
  })
  
  return performanceData.map((el) => ({
    value: el.value,
    kind: upperKind.get(""+el.kind) // "" for changing number key to string key
  }))
}


const UserPerformance = ({performanceKind, performanceData}) => {
  if (!performanceKind && !performanceData) return (<> </>)

  const dataKindConvert = convertDataKind(performanceData, performanceKind)

  return (
    <Root className='user_performance_container'>
      <ResponsiveContainer width="100%" height="100%">

        <RadarChart data={dataKindConvert}
                    outerRadius={'70%'}
                    startAngle={30} // radar right 1 tick rotation 
                    endAngle={-330}
                    className="radar-perf"
          >

          <PolarGrid  gridType='polygon'
                      radialLines={false}                             
                      stroke='#fff' 
                      strokeWidth={1.5}
          />

          <PolarAngleAxis   dataKey= {"kind"}
                            tickLine={false}
                            dy={2} //translate ticks on Yaxis
                            dx={0}
                            tickSize={20} //spacing from radar
          />

          <PolarRadiusAxis  tick={false}
                            axisLine={false}  
                            domain={[0, 'dataMax + 20']}
          />

          <Radar  dataKey="value" 
                  stroke="" fill="#FF0101" 
                  fillOpacity={0.6} 
          />
        </RadarChart>
      </ResponsiveContainer>
    </Root>
  )
}

UserPerformance.propTypes = {
  performanceKind: PropTypes.object,
  performanceData: PropTypes.array,
}

export default UserPerformance
