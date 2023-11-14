import Yoga from '../atoms/Yoga';
import Swimmer from '../atoms/Swimmer';
import Biker from '../atoms/Biker';
import Dumbbell from '../atoms/Dumbbell';



const NavBar = () => { 
  return (
    <nav className="navbar_wrapper">
      <div className="navbar_icons_container">
        <div className="navbar_icon_container">
          <Yoga />
        </div>
        <div className="navbar_icon_container">
          <Swimmer/>
        </div>
        <div className="navbar_icon_container">
          <Biker />
        </div>
        <div className="navbar_icon_container">
          <Dumbbell />
        </div>
      </div>

      <div className="navbar_text_container">
        <p>Copyright, SportSee 2020</p>
      </div>
    </nav>
  )
}

export default NavBar