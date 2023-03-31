import Link from "next/link"
import styles from './Nav.module.css'

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
    <header className={styles.navcontainer}>
      <nav>
        <ul className={styles.nav}>
          {links.map(({ label, route }) => (
            <li key={route} className={styles.listitem}>
              <Link href={route} className={styles.linkitem}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 

