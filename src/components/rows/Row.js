import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../axios'
const imageUrl = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl, isLargeRow }) {
    const [Movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    console.log(Movies);

    return (
        <div className='row'>
            <h1 className='rowTitle'>{title}</h1>
            <div className='rowPosterConatainer'>
                {Movies &&
                    Movies.map(data =>
                        <img
                            key={data.id}
                            className={`rowImage cursorPointer ${isLargeRow && "rowLargeImage"}`}
                            src={`${imageUrl}${isLargeRow ? data.poster_path : data.backdrop_path}`}
                            alt={data.name}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Row