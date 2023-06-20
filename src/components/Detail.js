import React from "react";
import { Films } from '../Share/ListOfFilms';
import { useParams } from "react-router-dom";
import { Card, CardPanel, Col, Container, Row } from "react-materialize";
export default function Detail() {
    const filmName = useParams()
    const films = Films.find(obj => {


        return obj.id == filmName.id;
    });
    return (
        <Container>
            <Row>
                <Col s={6} m={4}>
                    <Card>
                        <img src={`../${films.Image}`}></img>
                        <p className="center">{films.Title}</p>
                    </Card>

                </Col>
                <Col s={6}>
                    <CardPanel>

                        <p className="justify">{films.Desciption}</p>
                        <p><iframe width='100%' height='400px' src={films.Trailer} title={films.Title} frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></p>
                    </CardPanel>
                </Col>
            </Row>
        </Container>
    )
}