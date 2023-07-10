import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Form  from "./components/form";
import Card  from "../components/movieCard";
import Login from '../components/Login';
import getPopularMovies from '../lib/getPopularMovies';
import getTopRatedMovies from '../lib/getTopRatedMovies';

import { Movies } from '@/types';
import { MoviesApiRes } from '@/types';
import EmblaCarousel from '@/components/emblaCarousel';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const moviesData: Promise<MoviesApiRes> =  getPopularMovies()
  const data =  await moviesData;

  const moviesDataT: Promise<MoviesApiRes> =  getTopRatedMovies()
  const dataTopRated =  await moviesDataT;

  const movies: Movies[] | undefined = data?.data?.movies;

  const topRated: Movies[] | undefined = dataTopRated?.data?.movies;

  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  // console.log(topRated)
  return (
    <main className={styles.main}>
      {/* <Form movies={movies}/> */}
      <h1 className={styles.segment_title}>Top Rated</h1>
      <EmblaCarousel slides={topRated} />
      <div className={styles.cards_segment}>
        {topRated && topRated.map((top,i) => <Card key={i} movie={top}/>)}
      </div>
      <Login/>
    </main>
  )
}
