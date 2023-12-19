import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './banner.css'

function Banner({ fetchUrl }) {

    const base_url = 'https://image.tmdb.org/t/p/original'
    const [moviesDetails, setMovieDetails] = useState([])
    const fetchData = async () => {
        const response = await instance.get(fetchUrl)
        const { data } = response
        setMovieDetails(data.results[Math.floor(Math.random() * data.results.length)])
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div>
            <div style={{
                height: '600px',
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundImage: `url(${base_url}${moviesDetails.backdrop_path})`
            }}>

                <div className='banner_content'>
                    <h2 style={{ color: "white" }}>{moviesDetails?.name}</h2>
                    <button className='btn btn-danger'>play <i className='fa-solid fa-play bg-transparent ms-1'></i></button>
                    <button className='more btn border-white ms-3'>More Info <i className='fa-solid fa-caret-down bg-transparent'></i></button>
                    <h5 style={{ color: "white" }}>{moviesDetails?.overview?.slice(0, 200)}</h5>
                </div>

            </div>


        </div>

    )
}

export default Banner