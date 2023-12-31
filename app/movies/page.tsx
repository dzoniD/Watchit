// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import { Movies, MoviesApiRes } from '@/types';
import getPopularMovies from '../../lib/getPopularMovies';

// const inter = Inter({ subsets: ['latin'] })

export default async function Test() {
  const moviesData =  getPopularMovies()
  const movies: MoviesApiRes =  await moviesData;
  // console.log('==================||==================',movies)
  return (
    <div >
      <h1>Test!!</h1>
      <div>{movies && movies.data.movies.map((movie,i) => <p key={i}>{movie.title}</p>)}</div>
    </div>
  )
}
