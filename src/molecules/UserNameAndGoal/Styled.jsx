import styled from 'styled-components';

// TODO STYLED COMPONENT ET SASS IMBRIQUE???
const Root = styled.div`
  &.username_and_goal_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    border:  1px solid red; //DEV
  }

  & .username_and_goal_container {
    font-size: 3rem;
    font-weight: 500;
  }

  & .username_and_goal_firstname {
    color: #FF0101;
  }

  & .username_and_goal_goal {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
`


export default Root