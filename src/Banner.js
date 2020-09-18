import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from './requests'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {

        async function movieBanner() {
            const response = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]);
            return movieBanner
        }

        movieBanner()

    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div
            className="featured_banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center center"


            }}
        >
            <div className="banner_txt">
                <h1> {movie?.title || movie?.name || movie?.original_name} </h1>

                <div className="btn_wrapper">
                    <button>Play</button>
                    <button>My List</button>
                </div>

                <p className="banner_descr">
                    {truncate(movie.overview, 150)}
                </p>
            </div>

            <div className="banner_gradient"></div>
        </div>
    )
}

export default Banner
