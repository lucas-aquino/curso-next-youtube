import Link from "next/link"
//import styles from './Nav.module.css'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Post',
  route: '/post'
}]


export default function Nav() {
  return (
    <header className='navbar navbar-expand-lg bg-dark py-0'>
      <nav className='mx-4 h-100'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          {links.map(({ label, route }) => (
            <li key={route} className='nav-item btn btn-dark rounded-0'>
              <Link href={route} className='nav-link text-white'>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 

