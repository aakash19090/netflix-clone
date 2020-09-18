import React, { useState, useEffect } from 'react'
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const img_base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
            setMovies(response.data.results)
        }

        fetchMovies()
    }, [fetchUrl])

    const [ trailerURL, setTrailerURL ] = useState('')

    const getTrailer = movie => {
        if(trailerURL){
            setTrailerURL('')
        }
        else{
            movieTrailer(movie?.name || '')
            .then(url => {
                debugger;
                console.log(url)
                const urlParam = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParam.get('v'));
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    // console.table(movies)
    return (
        <div className="row_parent">
            <h3 className="row_title">{title}</h3>

            <div className="img_wrap">

                {
                    movies.map(movie => {
                        return (
                            <div key={movie.id} 
                            className={`${isLargeRow ? 'poster poster_wrap_large' : 'poster poster_wrap'}`}
                            onClick={ () => getTrailer(movie) }
                            >
                                <img
                                    src={`${img_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                    alt="movie poster"
                                />
                            </div>
                        )
                    })
                }
            </div>
            { trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row;
