import { useContext } from "react"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
  const {user, dispatch} = useContext(Context)
  const PF = 'http://localhost:5000/images/'
  
  const handleLogout = () => {
    dispatch({type:'LOGOUT'})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/Write">WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ?
           (
            <Link to='/settings'>
            <img className ="topImg" src={PF + user.profilePic} alt="" />
            </Link>
           
           )
            :
           (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/Login">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/Register">REGISTER</Link>
              </li>
            </ul>
           )
        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      </div>
  )
}
