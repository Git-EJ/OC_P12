import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const dayNumberToDayLetter = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
  error : 'ER'
}  

const customXaxis = (day) => {
  console.log('DAY', day);
  if (dayNumberToDayLetter[day]) return dayNumberToDayLetter[day]
  
  console.log('UserAverageSessions => customXaxis ERROR')
  return dayNumberToDayLetter.error
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='user_average_sessions_custom_tooltip'>
        <p className="user_average_sessions_custom_tooltip_label">{`${payload[0].payload.sessionLength} min`}</p>
      </div>
    )
  }
  return null
}

const customLegend = () => {
  return (
    <div className="user_average_sessions_custom_legend">Durée moyenne des sessions</div>
  )
}

const CustomCursor = ({ points }) => {     // opacity layer
  const { x } = points[0]
  return (
    <rect  x={x} width={250} height={250} className='user_average_sessions_custom_cursor' /> 
  )
}


const UserAverageSessions = ({ averageSessions }) => {

  if (!averageSessions) return(<> </>)

  return (
    <div className='user_average_sessions_container'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={averageSessions}
          margin={{
            top: 80,
            right: 20,
            left: 20,
            bottom: 0,
          }}
          >
          
          <CartesianGrid vertical={false} horizontal={false} />
          
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false}
            tickMargin={20}
            tickFormatter={customXaxis}
            stroke='rgba(255, 255, 255, 0.504)'
            textAnchor='end'
          />
        
          <YAxis 
            hide
            // axisLine={false} 
            // tickLine={false} 
            // tick={false}
          />
        
          <Tooltip 
            content={<CustomTooltip/>}
            cursor={<CustomCursor />}
            // wrapperClassName=''
          />
          
          <Legend
            wrapperStyle={{ top:30 }}
            content={customLegend}
          />
          
          <Line 
            dataKey="sessionLength" 
            type="custom" // basis for round line
            stroke="url(#lineGradient)"
            strokeWidth={2}
            activeDot={{ 
              r: 4,
              fill:"#fff",
              strokeWidth: 8,
              strokeOpacity: 0.4,
            }} 
            dot={false}
          />

          <defs>
            <linearGradient 
              id="lineGradient" 
              x1="0%" y1="0" 
              x2="100%" y2="0" 
              gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="white" stopOpacity="0.25"/>
              <stop offset="0.5" stopColor="white" stopOpacity="0.625"/>
              <stop offset="1" stopColor="white" stopOpacity="1"/>
            </linearGradient>
          </defs>
        
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) 
}


UserAverageSessions.propTypes = {
  averageSessions: PropTypes.array
  //TODO
  // averageSessions: PropTypes.array.isRequired
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

CustomCursor.propTypes = {
  points: PropTypes.array,
}

export default UserAverageSessions