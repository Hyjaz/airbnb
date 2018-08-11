import * as React from 'react'
import './styles.scss'

export default class Navbar extends React.Component<any, any>{
  public render() {
    return (
      <div>
        <nav className="navbar">
          <div className="logo">
            <img className="logo" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c513.png" />
          </div>
          <div className="nav-items">
            <a href="#">Become a host</a>
            <a href="#">Help</a>
            <a href="#">Sign up</a>
            <a href="#">Log in</a>
          </div>
        </nav>
      </div>
    )
  }
}
