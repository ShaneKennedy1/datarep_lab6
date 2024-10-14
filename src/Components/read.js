import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";


const Read = () => {

    // Movie data array containing information about movies
    
    const[movies, setMovies] = useState([]);


    useEffect(
      ()=>{
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
        .then((response)=>{
          console.log(response.data.movies)
          setMovies(response.data.movies);
        })
        .catch((error) =>{
          console.log(error);
        });
      },[]
    );

    return(
        <div>
            {/* Title of the Read component */}
            <h1>List of movies from Read Component</h1>
            
            {/* Render the Movies component, passing the data array as the myMovies prop */}
            <Movies myMovies={movies} />
        </div>
    )
}
// Export the Read component so it can be used in other parts of the application
export default Read; 
