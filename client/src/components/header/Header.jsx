import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Gbemi's Project</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" alt="" className="headerImg" />
    </div>
  )
}
