import { NavLink } from "react-router-dom"

/**
 * 
 * @returns {JSX.Element}
 * @description This component is used to display the header navigation bar containing logo and navMenu.
 */


const HeaderNav = () => {
  
  return (
    <nav className="header_nav_container">
      <div className="header_nav_item">
        <NavLink className="navlink">Accueil</NavLink>
      </div>
      <div className="header_nav_item">
        <NavLink className="navlink">Profil</NavLink>
      </div>
      <div className="header_nav_item">
        <NavLink className="navlink">Réglage</NavLink>
      </div>
      <div className="header_nav_item">
        <NavLink className="navlink">Communauté</NavLink>
      </div>
    </nav>
  )
}

export default HeaderNav