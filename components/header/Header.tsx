import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
          <p>🇼​​🇦​​🇹​​🇨​​🇭​​🇮​​🇹</p>
            {/* <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="YIFY"/> */}
        </div>
        <div className={styles.nav_links}>
          <input placeholder='Quick search' className={styles.search} type="search" name="search" id="" />
          <ul className={styles.ul}>
              <li><Link href={'/'}>Home</Link></li>
              <li>Trending</li>
              <li>Browse</li>              
              <li><Link href={'/movies'}>movies</Link></li>    
          </ul>
          <div className={styles.logNsign}>
              <span className={styles.divider}>Login</span> <span>Register</span>
          </div>
        </div>
    </nav>
  )
}
