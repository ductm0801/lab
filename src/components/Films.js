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
            <p className="title">{film.Year}</p>
            </div>
            </div>

        )
        
        )
        }
        </div>
    )
}