'use client'

import styles from './page.module.css'

import { SlArrowDown } from "react-icons/sl";
import { useState } from 'react';

export const Filters = () => {

const [openFilters,setOpenFilters] = useState(false)

console.log(openFilters)
    return (
<>
<div className={styles.browse__buttons}>
        <button className={styles.filter__button} onClick={() => setOpenFilters(!openFilters)}><p>Filter by</p> <span className={styles.browse__button__icon}><SlArrowDown size={14} fontWeight={800}/></span></button>
        <button className={styles.filter__button}><p>Sort by</p> <span className={styles.browse__button__icon}><SlArrowDown size={14} fontWeight={800}/></span></button>
      </div>
     
     {openFilters ? <div className={styles.filters__container}>
        <div>
          <label htmlFor="select">Genre</label>
          <select id={styles.select}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          </select>
        </div>
        <div className={styles.select__wrapper}>
          <label htmlFor="select">Rating</label>
          <select id={styles.select}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          </select>
        </div>
        <div className={styles.select__wrapper}>
          <label htmlFor="select">Year</label>
          <select id={styles.select}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          </select>
        </div>
        <div className={styles.select__wrapper}>
          <label htmlFor="select">Language</label>
          <select id={styles.select}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          </select>
        </div>

        <button className={styles.popup__button}>Search</button>
        
      </div> : ''
      }
</>
    )
}