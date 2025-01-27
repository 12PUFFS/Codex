import "./Header.css"
import logo from '../../assets/image/logo.svg'; 



function Header () {
  return (
   <div className="wrapper">
    <div className="header-container">
    <header className="header">
    <a className="logo" href="#">
      <img src={logo} alt="My Logo" /> 
    </a>

      <nav className="header-nav">
        <ul className="nav-list">
            <li className="nav-item">
                <a className="nav-link" href="#">Rent</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Buy</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Sell</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Manage Property</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
            </li>
        </ul>
      </nav>
      <div className="header-btns-list">
              <button class="header-btns--desable">Login</button>
              <button class="header-btns--active">Sign up</button>
            </div>
    </header>
   </div>
   </div>
  
   
  )
}

export default Header
