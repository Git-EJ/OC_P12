import styled from "styled-components";

const Root = styled.div`
  &.user_average_sessions_container {
      width: 100%;
      height: 100%;
    }

    & .user_average_sessions_custom_tooltip {
      width:fit-content !important;
      padding: 0 !important;
      margin: 0 !important;
      background: #fff;
      border: none !important;
      color: black !important;
      font-size: 0.7rem;
      font-weight: 500 !important;
      padding: 0.5rem !important;
    }

    & .user_average_sessions_custom_legend {
      width:78%;
      text-align: start;
      font-size: 1rem;
      font-weight: 500;
      color:rgba(255, 255, 255, 0.504);
    }

    //TODO couvre le AxisX tick si opacity 1
    & .user_average_sessions_custom_cursor {
      opacity: 0.5;
      fill: #E60000;
    }
  }
`


export default Root
