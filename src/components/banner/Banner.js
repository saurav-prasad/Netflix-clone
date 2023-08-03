import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../axios'
import requests from '../../requests'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';

const imageUrl = 'https://image.tmdb.org/t/p/original'

function Banner({ showAlert }) {

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
            const request = await axios.get(requests.fetchNetflixOriginals)
            const data = request.data.results
            setMovies(data[Math.floor(Math.random() * data.length)])
        }
        fetchData()
    }, [])
    const trim = (str, n) => {
        return str?.length > n ? str.slice(0, str.charAt(n) === " " ? n - 1 : n) + "..." : str
    }

    return (
        <>
            <header style={{ backgroundImage: `url(${imageUrl}${Movies?.backdrop_path})` }} className='banner flexCenter'>
                <div className='bannerContainer flexCenter'>
                    <div>
                        <h1 className='bannerTitle'>
                            {Movies?.original_name || Movies?.name || Movies?.title}
                        </h1>
                        <div className='bannerDetail'>
                            <span className='bannerVote'>{Movies.vote_average} points</span>
                            <span className='bannerYear'>{Movies?.first_air_date?.slice(0, 4)}</span>
                        </div>
                        <p className='bannerDesc'>{trim(Movies.overview, 180)}</p>
                        {/* button */}
                        <button onClick={() => getMovie(Movies)} className='bannerButton flexCenter cursorPointer'>
                            {trailer ? "❌ Close" : "► Watch"}
                        </button>
                    </div>
                </div>
                <div className='bannerFooterGradient'></div>
            </header>
            {
                trailer &&
                <YouTube
                    videoId={trailer}
                    opts={opts}
                />
            }
        </>
    )
}

export default Banner