// import axios from 'axios';
const axios = require('axios');

const url = 'https://swapi.dev/api/';

/**
 * 
 * @date 2021-04-13
 * @param {any} fetchCallback
 * @returns {object}
 */
async function getDataFromSever(fetchCallback) {
    const result = await fetchCallback(url);
    if (result.statusCode) {
        throw new Error('API call was not successful')
    } else {
        return result.data
    }
}

/**
 * display list of all films
 * @date 2021-04-13
 * @returns {object}
 */
async function getAllFilms() {
    const data = await getDataFromSever(async () => {
        return axios.get(`${url}films/`);
    });
    return data;
}
//getAllFilms().then(console.log)


/**
 * Get id to display metadata
 * @date 2021-04-13
 * @param {int} id
 * @returns {object}
 */
async function getDataFromId(id) {
    const data = await getDataFromSever(async () => {
        return axios.get(`${url}films/${id}`);
    });
    return data;
}
//getDataFromId().then(console.log)

const getDetails = (url) => {
    return axios({
        method: 'GET',
        url: `${url}`
    });
};

const getVehicles = (url) => {
    return axios({
        method: 'GET',
        url: `${url}`
    })
}
export { getDataFromSever, getAllFilms, getDataFromId, getDetails, getVehicles };

//use promises.all