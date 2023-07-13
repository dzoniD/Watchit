// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { FaGoogle,FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { Movies, MoviesApiRes } from '@/types';
import getPopularMovies from '../../lib/getPopularMovies';

// const inter = Inter({ subsets: ['latin'] })

export default async function LoginPage() {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>
      <div>
          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>Email or username</label>
            <input type="email" name="email" id={styles.email} />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>Password</label>
            <input type="password" name="email" id={styles.email} />
          </div>

          <button className={styles.button}>Log in</button>
          <div className={styles.line}>
            <div className={styles.box}>OR</div>
          </div>

          <div className={styles.socials}>
              <div className={styles.social}>
              <FaGoogle size={26} color={'white'} />
              </div>
              <div className={styles.social}>
              <FaFacebook size={26} color={'white'} />
              </div>
              <div className={styles.social}>
              <FaPhoneAlt size={22} color={'white'} />
              </div>
          </div>

          <div>
            <p className={styles.text}>Dont have an account? <button className={styles.loginButton}>Sign in</button></p>
          </div>
      </div>
    </div>
  )
}
