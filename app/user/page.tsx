// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { FaBookmark,FaKey,FaPen } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Movies, MoviesApiRes } from '@/types';
import getPopularMovies from '../../lib/getPopularMovies';
import Link from 'next/link';
import Image from 'next/image';
import img from './download.jpeg'
import { FaHeart } from 'react-icons/fa6';
import { IconType } from 'react-icons';

// const inter = Inter({ subsets: ['latin'] })

export default async function User() {

  const links:{text:string, icon: JSX.Element}[] = [
    {text:'Edit profile', icon:<FaPen color='white' size={22}/>  }, 
    {text:'Password', icon: <FaKey color='white' size={22}/>  }, 
    {text:'Bookmark', icon: <FaBookmark color='white' size={22}/>},
    {text:'Favorite', icon: <FaHeart color='white' size={22}/>  },  
    {text:'Log out', icon: <BiLogOut color='white' size={26}/>  }
  ]

  return (
    <div className={styles.container}>
     <h2 className={styles.username}>User name</h2>
     <div className={styles.profile__icon}>
      <Image alt='profile-icon' src={img} className={styles.img}>
        </Image> 
      </div>

      {links.map((link,i) => {
        if(i){
          return (<div className={styles.profile__link}>
            <div className={styles.profile__link__icon}>
            {link.icon}  
            </div><p>{link.text}</p>
          </div>)
        }

        return (
          <div className={styles.first__profile__link}>
            <div className={styles.profile__link__icon}>
            {link.icon}  
            </div><p>{link.text}</p>
          </div>
        )
      })}
         
      

    </div>
  )
}
