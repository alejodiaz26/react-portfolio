import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({name}) => {
  return (
    <header className="header">
        <div className="header__container">
            <h1 className="header__logo">{name}</h1>
            <MenuIcon sx={{color:"#fff",fontSize:"35px"}} className="header__menu"/>
            <nav className="header__nav">
                <li className="nav__list">
                    <a href="" className="nav_link">Home</a>
                </li>
            </nav>
        </div>
    </header>
  )
}
export default Header