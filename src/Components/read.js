import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";

const Read = () => {

    // State to store the array of movies
    const [movies, setMovies] = useState([]);

    // useEffect hook to make API request
    useEffect(
      () => {
        // Axios get request to fetch movies from an external API
        axios.get('http://localhost:4000/api/movies')
        .then((response) => {
          // Logging the received movie data to the console
          console.log(response.data.movies); 
          // Setting the received movie data in the state
          setMovies(response.data.movies);   
        })
        .catch((error) => {
          // Logging any errors encountered during the request
          console.log(error); 
        });
      }, [] // Empty dependency array ensures this effect runs only once when the component is mounted
    );

    return (
        <div>
            {/* Title of the Read component */}
            <h1>List of movies from Read Component</h1>
            
            {/* Render the Movies component, passing the movie array as the myMovies prop */}
            <Movies myMovies={movies} />
        </div>
    )
}

// Export the Read component 
export default Read;
