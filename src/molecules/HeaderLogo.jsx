import { useContext, useState } from "react"
import Logo from "../atoms/Logo.jsx"
import ApiContext from "../context/ApiContext.jsx"

/**
 * 
 * @returns {JSX.Element}
 * @description This component is used to display the header logo and text. The logo is clickable and toggle the api.
 * 
 */


const HeaderLogo = () => {

  const [isFront, setIsFront] = useState(false)
  const { toggleApi } = useContext(ApiContext)
  
  const logoRotate = isFront ? "header_logo_rotate" : ""

  const handleClick = () => { 
    setIsFront(!isFront)
    toggleApi()
  }

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
