import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([])
    useEffect(() => {
        const getCats = async () => 
        {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    }, [])

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://i.guim.co.uk/img/media/791c139fcb94e1094512b045e939a8ca9dceec75/0_635_4712_4706/master/4712.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=850d0cffdfb9434bcea77373896f7d40" alt="Gbemi" width="200px"/>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem a ducimus nostrum dignissimos praesentium fugit nesciunt obcaecati, asperiores maxime consectetur magni amet ut voluptatibus expedita animi soluta laborum. Vero!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c =>(
                    <Link to = {`?cat=${c.name}`} className='link'>
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <div className="sidebarTitle">
                FOLLOW US
            </div>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
