import MovieItem from "./movieitem";

//component to create a list of movies
const Movies = (props)=>{
    
        return props.myMovies.map(
           //create a movie item for each movie in the array
            (movie)=>{
                return <MovieItem myMovie ={movie} key={movie.imdbID}></MovieItem>
            }
        );
    
}
export default Movies;