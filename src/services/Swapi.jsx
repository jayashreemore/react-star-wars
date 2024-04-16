import axios from 'axios'
// import { useState, useEffect } from 'react';

const url = 'https://www.swapi.tech/api/starships/';

export const getAllStarships = async function () {

    try {
        let resp = await axios.get(url);
        return resp.data.results;
    } catch (err) {
        console.error("Error fetching starships.", err);
        return [];
    }
};