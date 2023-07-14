import React from 'react'
import { FiMenu, } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { FaUserLarge,FaYoutube,FaInstagram, FaTwitter } from "react-icons/fa6";
import styles from './footer-mobile.module.css'
import Link from 'next/link'

export default function MobileFooter() {
  return (
    <footer className={styles.footer}>
       <div className={styles.footer__top}>
            <div className={styles.first__row__links}>
                <span className={styles.footer__text}>About us</span>
                <span className={styles.footer__text}>Contact</span>
                <span className={styles.footer__text}>Login</span> 
            </div>
            <div className={styles.second__row__links}>
                <span className={styles.footer__text}>Browse movies</span>
                <span className={styles.footer__text}>Conditions of use </span>
                <span className={styles.footer__text}>Trending</span>
            </div>
       </div>
       <div className={styles.footer__bottom}>
        <div className={styles.footer__socials}>
            <FaYoutube  size={30} color='white'/>
            <FaInstagram size={30} color='white'/>
            <FaTwitter size={30} color='white'/>
        </div>
        <p className={styles.copyright}>Copyright Watchit 2023</p>
       </div>
    </footer>
  )
}
