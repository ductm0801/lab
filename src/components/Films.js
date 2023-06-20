import React from "react";
import {Films} from '../Share/ListOfFilms'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col,Card, Button, Container} from "react-materialize";
export default function Film(){
    const [film, setFilm] = useState([])
    return(
        <Container>
        <Row>
        {Films.map((film)=>(
            
            <Col key={film.id} s={3}>
            <Card>
            <img src={film.Image}/>
            <p>{film.Title}</p>
            <Link to={`detail/${film.id}`}>
            <Button>Detail</Button>
            </Link>
            </Card>
            </Col>
            
        )
        
        )
        }
        </Row>
        </Container>
        // <div id="popup1" className="overlay">
        // <div className="popup">
        //     <img src={film.Image}/>
        //     <h2>{film.Title}</h2>
        //     <a className="close" href="#">&times;</a>
        //     <div className="content">
        //         {film.Year}<br></br>
        //         {film.Nation}
        //     </div>
        // </div>

        // </div>
         
    )
}