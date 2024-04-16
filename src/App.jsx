import { useState, useEffect } from 'react'
import './App.css'
//Import different pages
import StarShipCard from './components/StarShipCard';
import NavBar from './components/NavBar'
import { getAllStarships } from './services/Swapi.jsx'
import { useStarships } from './services/Starships.jsx';

function App() {
    const { starships, isLoading, error } = useStarships();


    return (
        <>
            <NavBar />
            <div>
                {/* {isLoading && <p>Loading...</p>} */}
                {error && <p>Error: {error}</p>}
                {starships.length > 0 && (
                    <div className='starships'>
                        {starships.map((starship) => (
                            <StarShipCard starship={starship} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default App



//
// Endpoints

// /starships/ -- get all the starship resources
// /starships/:id/ -- get a specific starship resource
// https://swapi.tech/documentation#starships