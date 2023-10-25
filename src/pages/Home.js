import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/home.css";
import { Grid } from '@mui/material';


const URL = 'https://6538f1b3a543859d1bb23e2e.mockapi.io/test';

const Home = () => {

    const [films, setfilms] = useState([]);
    const [detailPopup, setDetailPopup] = useState(null);


    const getListStaff = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setfilms(res.data);
        }
    }

    useEffect(() => {
        getListStaff();
    }, []);

    // popup
    const handleViewPopup = (films) => {
        setDetailPopup(films);
    }

    const handleClosePopup = () => {
        setDetailPopup(null);
    }


    return (
        <div className="container">
            {films && films.map((film) => (
                <div className="card" key={film.id}>
                    <img src={film.Image} alt={film.id} />
                    <h5>{film.Title}</h5>
                    <button onClick={() => handleViewPopup(film)}>View Details</button>
                </div>
            ))}

            {detailPopup && (
                <div className="popup">
                    <div className="popup-content">


                        <div style={{ width: '30%' }}>
                            <span className='close' onClick={handleClosePopup}>
                                &times;
                            </span>
                            <img src={detailPopup.Image} alt={detailPopup.id} />
                            <p>Title: {detailPopup.Title}</p>
                            <p>Year: {detailPopup.Year}</p>
                            <p>Nation: {detailPopup.Nation}</p>
                            <p>Description: {detailPopup.Description}</p>
                        </div>
                        <div style={{ width: '70%' }}>
                            <p><iframe width='100%' height='400px' src={detailPopup.Trailer} title={detailPopup.Title} frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>
                        </div>

                    </div>
                </div>



            )
            }
        </div >
    );
};

export default Home;