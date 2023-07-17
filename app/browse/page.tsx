
import styles from './page.module.css'
import { SlArrowDown } from "react-icons/sl";

import { RiArrowDropRightLine } from "react-icons/ri";
import { Movies, MoviesApiRes } from '@/types';
import getPopularMovies from '../../lib/getPopularMovies';
import Link from 'next/link';
import Card from '@/components/movieCard';
import { Filters } from './Filters';

export default async function BrowsePage() {

  

  const moviesData: Promise<MoviesApiRes> =  getPopularMovies()
  const data =  await moviesData;

  const movies: Movies[] | undefined = data?.data?.movies;

  console.log(movies)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Browse movies</h1>
      <Filters/>

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
