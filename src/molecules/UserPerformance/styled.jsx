import styled from "styled-components"


const Root = styled.div`
  &.user_performance_container {
    width: 100%;
    height: 100%;
    background: #282D30;
    // padding: 0 0.5rem;
  }

  .recharts-polar-angle-axis-ticks > .recharts-polar-angle-axis-tick:nth-child(1) > text > tspan,
  .recharts-polar-angle-axis-ticks > .recharts-polar-angle-axis-tick:nth-child(2) > text > tspan,
  .recharts-polar-angle-axis-ticks > .recharts-polar-angle-axis-tick:nth-child(4) > text > tspan,
  .recharts-polar-angle-axis-ticks > .recharts-polar-angle-axis-tick:nth-child(5) > text > tspan {
    text-anchor: middle;        // translate on X Axis
    dominant-baseline: middle;  // translate on Y Axis
  
  }

  .recharts-polar-angle-axis-ticks > .recharts-polar-angle-axis-tick:nth-child(3) > text > tspan {
    text-anchor: middle;
    dominant-baseline: end;
  }

  .recharts-polar-angle-axis-ticks > .recharts-polar-angle-axis-tick:nth-child(6) > text > tspan {
    text-anchor: middle;
    dominant-baseline: start;
  }

  & .recharts-polar-angle-axis-tick > text {
    font-size: clamp(0.6rem, 1vw, 12px);
    fill: #fff;
  }

  //TODO impossible de faire fonctionner ::first-letter
  // & .recharts-polar-angle-axis-tick > text::first-letter{
  //   text-transform: upperCase !important;
  // }
`

export default Root
