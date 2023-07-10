

import React from 'react'
export default async function getPopularMovies() {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?limit=4&sort_by=rating')

    if(!response.ok) throw new Error('failed fetch')
    const d =  response.json()
    // console.log(d)
  return d
}


