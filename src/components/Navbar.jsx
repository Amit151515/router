import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  {title: 'Home', url: '/'},
  {title: 'Users', url: '/users'},
  {title: 'Posts', url: '/posts'},
  {title: 'Todos', url: '/todos'}
]

const Navbar = () => {


  return (
    <>
       <nav className="nav">
        <Link to='/' className="logo">Logo</Link>
        <ul className="nav__list">
          {links.map((link,i) => (
            <li key={i}>
              <NavLink to={link.url} className="nav__link">{link.title}</NavLink>
            </li>
          ))}
        </ul>
       </nav>
    </>
  )
}

export default Navbar