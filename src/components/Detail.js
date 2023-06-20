import React from "react";
import {Films} from '../Share/ListOfFilms' ;
import { useParams } from "react-router-dom";
export default function Detail(){
    const filmName = useParams()
    const films = Films.find(obj => {
        

        return obj.id == filmName.id;
    });
    return(
        <div>
            <div>
                <img src={`../${films.Image}`}></img>
                <p>{films.Title}</p>
                <p>{films.Desciption}</p>
            </div>
        </div>
    )
}