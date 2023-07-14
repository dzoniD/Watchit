import React from 'react'
import { FiMenu, } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { FaUserLarge } from "react-icons/fa6";
import styles from './header-mobile.module.css'
import Link from 'next/link'

export default function MobileHeader() {
  return (
    <header className={styles.header}>
        <FiMenu color='white' size={35}/>
        <div className={styles.logo}>
          <p>🇼​​🇦​​🇹​​🇨​​🇭​​🇮​​🇹</p>
        </div>
        <div className={styles.icons__container}>
        <CgSearch size={25} color='white'className={styles.searchIcon}/>
        <FaUserLarge size={20}  color='white'/>
        </div>
    </header>
  )
}
