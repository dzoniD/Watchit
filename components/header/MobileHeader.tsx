import React from 'react'
import { FiMenu, } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { FaUserLarge } from "react-icons/fa6";
import styles from './header-mobile.module.css'
import Link from 'next/link'

export default function MobileHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.burger__menu}>
        <FiMenu color='white' size={35}/>
      </div>
        <Link href={'/'}><div className={styles.logo}>
          <p>🇼​​🇦​​🇹​​🇨​​🇭​​🇮​​🇹</p>
        </div></Link>
        <div className={styles.icons__container}>
          <Link href={'/user'}><CgSearch size={25} color='white'className={styles.searchIcon}/></Link>
          <Link href={'/signin'}><FaUserLarge size={20}  color='white'/></Link>
        </div>
    </header>
  )
}
