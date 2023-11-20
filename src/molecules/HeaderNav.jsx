import { NavLink } from "react-router-dom"


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