import MovieItem from "./movieitem";

// This component returns a mapped array of MovieItem components
const Movies = (props) => {
    
    // Each item in props.myMovies array is passed as the myMovie prop to MovieItem
    return props.myMovies.map(
        // Create a MovieItem component for each movie in the array
        (movie) => {
            // Use the movie's imdbID as a unique key
            return <MovieItem myMovie={movie} key={movie.imdbID}></MovieItem>
        }
    );
}
// Export the Movies component so it can be used in other parts of the app
export default Movies; 
