import React from 'react'
//https://api.themoviedb.org/3/movie/popular?api_key=007ed94da49465cabffdbcf4d46f5785&language=en-US&page=1
export default async function getPopularMovies() {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?limit=10')

    if(!response.ok) throw new Error('failed fetch')
    const d =  response.json()
    // console.log(d)
  return d
}


