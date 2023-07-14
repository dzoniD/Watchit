
import styles from './page.module.css'
import { SlArrowDown } from "react-icons/sl";

import { RiArrowDropRightLine } from "react-icons/ri";
import { Movies, MoviesApiRes } from '@/types';
import getPopularMovies from '../../lib/getPopularMovies';
import Link from 'next/link';
import Card from '@/components/movieCard';

export default async function LoginPage() {
  const moviesData: Promise<MoviesApiRes> =  getPopularMovies()
  const data =  await moviesData;

  const movies: Movies[] | undefined = data?.data?.movies;

  console.log(movies)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Browse movies</h1>
      <div className={styles.browse__buttons}>
        <button className={styles.filter__button}><p>Filter by</p> <span className={styles.browse__button__icon}><SlArrowDown size={14} fontWeight={800}/></span></button>
        <button className={styles.filter__button}><p>Sort by</p> <span className={styles.browse__button__icon}><SlArrowDown size={14} fontWeight={800}/></span></button>
      </div>

      <div className={styles.movie__list__container}>
          {movies && movies.map((top,i) => <Card key={i} movie={top}/>)}
      </div>

      <div className={styles.pagination__buttons}>
        <div className={styles.current__page}>Page 1</div>
        <button className={styles.next__page}>Next page <RiArrowDropRightLine/></button>
      </div>

    </div>
  )
}
