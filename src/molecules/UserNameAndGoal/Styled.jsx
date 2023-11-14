import styled from 'styled-components';

// TODO STYLED COMPONENT ET SASS IMBRIQUE???
const Root = styled.div`
  &.username_and_goal_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 2rem;
  }

  & .username_and_goal_container {
    font-size: clamp(2.2rem, 3vw, 3rem);
    font-weight: 500;
  }

  & .username_and_goal_firstname {
    color: #FF0101;
  }

  & .username_and_goal_goal {
    font-size: clamp(1rem, 1.1vw, 1.1rem);
    margin-top: 1rem;
  }
`


export default Root