import React from 'react';
import { useState, useEffect } from 'react';
import * as getter from '../data/getFilms';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function Details() {
    
    const [details, setDetails] = React.useState([]);
    let { id } = useParams();

    useEffect(() => {
    async function fetchAll() {
        try {
            const detailsOutput = await getter.getDataFromId(id);
            //console.log(detailsOutput);
            
            let promises = [];
            detailsOutput.characters.forEach(ch => {
                let promise1 = getter.getDetails(ch);
                promises.push(promise1);
            })

            // detailsOutput.vehicles.forEach(vh => {
            //     let promise2 = getter.getVehicles(vh);
            //     promises.push(promise2);
            // })

            debugger
            Promise.all(promises)
                .then(values => {
                    console.log(values);
                    let characters = [];
                    // let vehicles = [];
                    values.forEach(value => {
                        characters.push(value.data);
                    });
                    // values.forEach(value => {
                    //     vehicles.push(value.data);
                    // })
                    detailsOutput.characters = characters;
                    // detailsOutput.vehicles = vehicles;
                    setDetails(detailsOutput);
                })
                .catch(err => console.log(err))
            
            
            return detailsOutput;
        } catch (err) {
            console.log(err)
        }
        }
        fetchAll();
        }, []);
    //console.log(id)
    console.log(details);

    return (
        <div>
            <p>Title: {details.title}</p>
            <div>
                Character names:
            <ul>
            {/* Had to take this approach because I am not using redux or context (list was loading before data) */}
                    {(details.characters || []).map(item => (<li> {item.name}</li>))}
            </ul>
            </div>

            <div>
                Character eye-color:
            <ul>
                    {(details.characters || []).map(item => (<li> {item.eye_color}</li>))}
            </ul>
            </div>

            <div>
                Vehicle model:
            <ul>
            {(details.vehicles|| []).map(item => (<li> {item}</li>))} 
            </ul>
            </div>
            <div>
                Planets:
            <ul>
            {(details.planets || []).map(item => (<li><Link to={`planets/${id}`} >{item}</Link></li>))} 
            </ul>
            </div>
        </div>
    );
}