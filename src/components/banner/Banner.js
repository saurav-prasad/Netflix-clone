import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../axios'
import requests from '../../requests'
const imageUrl = 'https://image.tmdb.org/t/p/original'


function Banner() {
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
console.log(Movies);
    return (
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
                    <p className='bannerDesc'>{trim(Movies.overview, 200)}</p>
                    {/* button */}
                    <button className='bannerButton flexCenter cursorPointer'>
                        ► Watch
                    </button>
                </div>
            </div>
            <div className='bannerFooterGradient'></div>
        </header>
    )
}

export default Banner