import React from 'react';
import { useState, useEffect } from 'react';
import * as getter from '../data/getFilms';
import { useParams } from 'react-router-dom';

export default function Details() {
    
    const [details, setDetails] = React.useState([]);
    let { id } = useParams();

    useEffect(() => {
    async function fetchAll() {
        try {
            const detailsOutput = await getter.getDataFromId(id);
            //console.log(detailsOutput);
            setDetails(detailsOutput)
            return detailsOutput;
        } catch (err) {
            console.log(err)
        }
        }
        fetchAll();
        }, []);
    //console.log(id)
    // console.log(details.characters);

    return (
        <div>
            <p>Title: {details.title}</p>
            <div>
                Characters:
            <ul>
            {/* Had to take this approach because I am not using redux or context (list was loading before data) */}
            {(details.characters || []).map(item => (<li>{item}</li>))} 
            </ul>
            </div>
            <div>
                Vehicles:
            <ul>
            {(details.vehicles|| []).map(item => (<li>{item}</li>))} 
            </ul>
            </div>
            <div>
                Planets:
            <ul>
            {(details.planets || []).map(item => (<li>{item}</li>))} 
            </ul>
            </div>
        </div>
    );
}