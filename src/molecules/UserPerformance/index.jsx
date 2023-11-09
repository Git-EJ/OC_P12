import PropTypes from 'prop-types';
import { PolarGrid, RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Root from './styled';

const convertDataKind = (performanceData, performanceKind) => {

  //TODO object or array ?
  const upperKind = {}
  Object.keys(performanceKind).forEach(key => {
    upperKind[key] = performanceKind[key].charAt(0).toUpperCase() + performanceKind[key].slice(1)
  })

  // const upperKind= Object.values(performanceKind).map(el => el.charAt(0).toUpperCase() + el.slice(1))
  
  return performanceData.map((el) => ({
    value: el.value,
    kind: upperKind[el.kind] //for upperKind object
    // kind: upperKind[el.kind -1] //-1 for index zero of the map upperKind array
  }))
}


const UserPerformance = ({performanceKind, performanceData}) => {
  if (!performanceKind && !performanceData) return (<> </>)

  const dataKindConvert = convertDataKind(performanceData, performanceKind)
    console.log('DK', dataKindConvert);
  return (
    <Root className='user_performance_container'>
      <ResponsiveContainer width="100%" height="100%">

        <RadarChart  
          data={dataKindConvert}
          outerRadius={'70%'}
          startAngle={30} // radar right 1 tick rotation 
          endAngle={-330}
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

          {/* <Legend /> */}
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
