import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import Root from './styled';
import CustomXaxis from './Custom/CustomXaxis';
import CustomTooltip from './Custom/CustomToolTip';
import CustomLegend from './Custom/CustomLegend';
import CustomCursor from './Custom/CustomCursor';



const UserAverageSessions = ({ averageSessions }) => {

  if (!averageSessions) return(<> </>)

  return (
    <Root className='user_average_sessions_container'>
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
            tickFormatter={<CustomXaxis />}
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
            content={<CustomLegend />}
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
    </Root>
  ) 
}


UserAverageSessions.propTypes = {
  averageSessions: PropTypes.array
  //TODO
  // averageSessions: PropTypes.array.isRequired
}

export default UserAverageSessions