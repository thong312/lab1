import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';
import { Films } from './share/ListOfFilms';
import { ThemeContext } from './ThemeContext';

export default function Film() {
    const { theme, toggle, dark } = useContext(ThemeContext);

    return (
        <div className="container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="title">
                <h1>LIST OF FILMS</h1>
                <div className="switch">
                    <a
                        className="switch-mode"
                        href="#"
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none',
                        }}
                        data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </div>
            <Container>
                <Row className="film-row">
                    {Films.map((film) => (
                        <Col key={film.id} xl={3} l={4} m={6} s={12}>
                            <div className="film-card-wrapper">
                                <Card
                                    className="film-card"
                                    header={
                                        <div className="card-image">
                                            <img className="pic" src={film.img} alt="" style={{ width: '100%', height: 'auto' }} />
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
