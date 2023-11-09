import styled from 'styled-components';


const Root = styled.div`
  &.user_activity_container {
    width: 100%;
    height: 100%;
  }

  & .recharts-legend-wrapper > .recharts-default-legend {
    width: 100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // for the legend text on left (first legend paylod value
  & .recharts-legend-wrapper {
    li:first-child {
      flex: 1;
      text-align: start;

      //font item o
      font-size: 0.9rem;
      font-weight: 500;
    
      //remove icon before text
      svg {
        display: none !important;
      }
    }

    li:nth-child(2),
    li:nth-child(3) {
    & .recharts-legend-item-text {
        color:#282D30 !important;
        font-weight: 500;
      }
    }
  }

  & .custom_tooltip {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #E60000;
    color: #fff;
    fontweight: 400;
    font-size: 0.6rem;
    width:fit-content;
    height:4rem;
    padding: 0 0.5rem; 
  }

  //icon before item
  & .recharts-legend-item.legend-item-1, 
  & .recharts-legend-item.legend-item-2 {
    display: flex !important;
    align-items: center;
  }
`


export default Root