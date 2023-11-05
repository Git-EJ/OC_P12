import { useState } from "react"
import Logo from "../atoms/Logo.jsx"
import Api from "../lib/Api.jsx"


const HeaderLogo = () => {

  const [isFront, setIsFront] = useState(false)

  const handleClick = () => { 
    setIsFront(!isFront)
    console.log(isFront);
  }

  const logoRotate = isFront ? "header_logo_rotate" : ""


  // TOTO DEV REMOVE
  const mockedApiInstance = Api();
  const userMain = mockedApiInstance.getUserMainData();
  const userActivity = mockedApiInstance.getUserActivity();
  const userAverage = mockedApiInstance.getUserAverageSessions();
  const userPerf = mockedApiInstance.getUserPerformance();
  console.log('userMain', userMain);
  console.log('userActivity', userActivity);
  console.log('userAverage', userAverage);
  console.log('userPerf', userPerf);


  return (
    <div className= "header_logo_wrapper" >

      <div className="header_logo_container" onClick={ handleClick }>
        <div className={`header_logo_inner ${logoRotate}`}>
          <div className="header_logo_img_front">
              <Logo />
          </div>
          <div className="header_logo_img_back">
              <Logo />
          </div>
        </div>
      </div>

      < div className= "header_logo_text">
        <h1>SportSee</h1>
      </div>
    </div>
  )
}


export default HeaderLogo
