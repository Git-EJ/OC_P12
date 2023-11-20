import Yoga from '../atoms/Yoga';
import Swimmer from '../atoms/Swimmer';
import Biker from '../atoms/Biker';
import Dumbbell from '../atoms/Dumbbell';
import { NavLink } from 'react-router-dom';


/**
 * 
 * @returns {JSX.Element}
 * @description Situated vertical, on the left. The NavBar component contains the 4 icons of the sport types and the text at the bottom of navbar.
 */
const NavBar = () => { 
  return (
    <nav className="navbar_wrapper">
      <div className="navbar_icons_container">
        <NavLink className="navbar_icon_container navlink">
          <Yoga />
        </NavLink>
        <NavLink className="navbar_icon_container navlink">
          <Swimmer/>
        </NavLink>
        <NavLink className="navbar_icon_container navlink">
          <Biker />
        </NavLink>
        <NavLink className="navbar_icon_container navlink">
          <Dumbbell />
        </NavLink>
      </div>

      <div className="navbar_text_container">
        <p>Copyright, SportSee 2020</p>
      </div>
    </nav>
  )
}

export default NavBar