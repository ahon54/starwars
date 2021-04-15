import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as getter from '../data/getFilms';

export default function Films() {

    const [films, setFilms] = React.useState([]);

    useEffect(() => {
        async function fetchAll() {
            try {
                const filmsOutput = await getter.getAllFilms();
                // console.log(filmsOutput);
                setFilms([...filmsOutput.results])
                return filmsOutput;
            } catch (err) {
                console.log(err)
            }
        }
        fetchAll();
    }, []);

    return (
        <div>
            <h1> Star Wars Films</h1>
            <ul>
                {films.map((item, i) => <li key={i}> <Link to={`details/${item.episode_id}`}> { item.title } </Link></li>)}
            </ul>
        </div>
    )
}
