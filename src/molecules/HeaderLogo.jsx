import { useContext, useEffect, useState } from "react"
import Logo from "../atoms/Logo.jsx"
import ApiContext from "../context/ApiContext.jsx"


const HeaderLogo = () => {

  const [isFront, setIsFront] = useState(false)
  const { toggleApi} = useContext(ApiContext)
  
  const logoRotate = isFront ? "header_logo_rotate" : ""


  const handleClick = () => { 
    setIsFront(!isFront)
    toggleApi()
  }

  //// TODO REMOVE
  // useEffect(() => {
  //   console.log(isFront);
  //   console.log(currentApi);
  // }, [isFront, currentApi])

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
