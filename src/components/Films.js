import React from "react";
import {Films} from '../Share/ListOfFilms'
import { useState } from "react";
export default function Film(){
    const [film, setFilm] = useState([])
    return(
        <div className='container'>
        {Films.map((film)=>(
            <div className='column' key={film.id}>
            <div className="card">
            <img src={film.Image}/>
            <h3>{film.Title}</h3>
            <p><button className="btn" onClick={()=>{setFilm(film)}}><a className="button" href="#popup1" id="openPopUp">Detail</a></button></p>
            </div>
            </div>

        )
        
        )
        }
        <div id="popup1" className="overlay">
        <div className="popup">
            <img src={film.Image}/>
            <h2>{film.Title}</h2>
            <a className="close" href="#">&times;</a>
            <div className="content">
                {film.Year}<br></br>
                {film.Nation}
            </div>
        </div>

        </div>
        </div>
    )
}