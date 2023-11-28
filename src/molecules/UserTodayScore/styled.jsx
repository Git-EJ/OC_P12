import styled from 'styled-components'

const Root = styled.div`

  &.user_todayscore_container {
    width:100%;
    height:100%;
    position: relative;
  }

  & .user_today_score_title {
    position: absolute;
    top: 7%;
    left: 5%;
    font-size = clamp(0.7rem, 0.9vw, 0.9rem);
    font-weight: 500;
  }


  & .user_todayscore_center_container {
    width:69%;
    height: 0;
    padding-top: 69%; //same value as width
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
  }

  & .user_todayscore_center_score {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: clamp(1.3rem, 1.7vw, 1.7rem);
    font-weight: 700;
  }

  & .user_todayscore_center_text {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: clamp(0.8rem, 1vw, 1rem);
    font-weight: 500;
    color: #74798C;
  }


`

export default Root