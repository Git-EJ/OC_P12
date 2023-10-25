import Logo from "../atoms/Logo.jsx"

const HeaderLogo = () => {
  return (
    <div className="header_logo_container">
      <div className="header_logo_img">
          <Logo />
      </div>
      < div className="header_logo_text">
        <h1>SportSee</h1>
      </div>
    </div>
  )
}

export default HeaderLogo