import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const imageUrl = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl, isLargeRow,showAlert }) {

    const [trailer, settrailer] = useState()
    const [counter, setcounter] = useState()
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const getMovie = async (data) => {
        if (trailer && (data?.id === counter)) {
            settrailer()
        }
        else {
            movieTrailer(data?.original_name || data?.name || data?.title)
                .then((value) => {
                    console.log(value);
                    const url = new URLSearchParams(new URL(value).search)
                    settrailer(url.get('v'))
                })
                .catch((e) => showAlert(true))
            setcounter(data.id)
        }
    }

    const [Movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])


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
                            onClick={() => getMovie(data)}
                            alt={data.name}
                        />
                    )
                }
            </div>
            {
                trailer &&
                <YouTube
                    videoId={trailer}
                    opts={opts}
                />
            }
        </div>
    )
}

export default Row