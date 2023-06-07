import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';
import { Films } from './share/ListOfFilms';


export default function Film() {

    return (
        <div className="container-fluid">

            <div className="title">
                <h1>LIST OF FILMS</h1>
            </div>
            <Container>
                <Row className="film-row">
                    {Films.map((film) => (
                        <Col key={film.id}>
                            <div className="film-card-wrapper">
                                <Card
                                    className="film-card"
                                    header={
                                        <div className="card-image">
                                            <img className="pic" src={film.img} alt="" style={{ width: '300px', height: '250px' }} />
                                        </div>
                                    }
                                    title={film.title}
                                >
                                    <Link to={`detail/${film.id}`}>
                                        <button className="btn">Detail</button>
                                    </Link>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
