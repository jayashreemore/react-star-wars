import { useEffect, useState } from "react";
import { getAllStarships } from "./Swapi";

export const useStarships = () => {
    const [starships, setStarships] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    //useEffect to get starships data(name) and set to state

    useEffect(() => {
        async function showData() {
            setIsLoading(true);
            setError(null);

            try {
                let fetchedStarships = await getAllStarships();
                setStarships(fetchedStarships);
            } catch (error) {
                setError(error.message)
            }
        };

        showData();
    }, []);

    return { starships, isLoading, error }
}


// export default Starships();