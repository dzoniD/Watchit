"use client"
import { Movies } from '@/types'
import React from 'react'

import styles from './card.module.css'

type CardProps = {
    movie: Movies
  }

export default function Card({ movie }:CardProps) {

  // console.log(movie)
  return (
    <div className={styles.card}>
    <div className={styles.card_head}>
      {/* <img src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png" alt="logo" className={styles.card_logo}/>  "fa fa-star"*/}
      <img src={movie.medium_cover_image} alt="Shoe" className={styles.productimg}/>
      {/* <div className={styles.product_detail}> 

        <h2>Hartbeespoort</h2> Support and Nike Zoom Air come together for a more supportive feel with high_speed responsiveness
      </div> */}
      {/* <span className={styles.back_text}>
              FAS
      </span> */}
    </div>
    <div className={styles._body}>
      <div className={styles.product_desc}>
        <span className={styles.product_title}>
                {movie.title}
                {/* <span className={styles.badge}>
                  New
                </span> */}
        </span>
        <span className={styles.product_caption}>
                {movie.year}
        </span>
        <span className={styles.product_rating}>
                <i className={`${styles.fa} ${styles.fa_star}`}></i>
                <i className={`${styles.fa} ${styles.fa_star}`}></i>
                <i className={`${styles.fa} ${styles.fa_star}`}></i>
                <i className={`${styles.fa} ${styles.fa_star}`}></i>
                <i className="fa fa-star grey"></i>
              </span>
      </div>
      {/* <div className={styles.product_properties}> */}
        {/* <span className={styles.product_size}>
                <h4>Size</h4>
                <ul className={styles.ul_size}>
                  <li><a href="#">7</a></li>
                  <li><a href="#">8</a></li>
                  <li><a href="#">9</a></li>
                  <li><a href="#" className={styles.active}>10</a></li>
                  <li><a href="#">11</a></li>
                </ul>
        </span> */}
        {/* <span className={styles.product_color}>
                <h4>Colour</h4>
                <ul className={styles.ul_color}>
                  <li><a href="#" className={styles.orange }></a></li>
                  <li><a href="#" className={styles.green}></a></li>
                  <li><a href="#" className={styles.yellow}></a></li>
                </ul>
        </span> */}
        {/* <span className={styles.product_price}>
                USD<b>23,453</b>
        </span> */}
      {/* </div> */}
    </div>
  </div>
  )
}
