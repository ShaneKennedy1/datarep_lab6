import { useEffect } from "react"; 
import Card from 'react-bootstrap/Card'; 

function MovieItem(props) {
  // useEffect hook to log the movie details whenever the myMovie prop changes
  useEffect(() => {
    // Log the movie object to the console
    console.log("Movie Item:", props.myMovie); 
  }, [props.myMovie]); 

  return (
    <div>
      {/* Use Bootstrap Card to display movie information */}
      <Card>
        {/* Put movie's title in the header */}
        <Card.Header>{props.myMovie.Title}</Card.Header>
        
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Display the movie's poster image */}
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            
            {/* Put movie's release year in the footer */}
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieItem component for use in other parts of the app
export default MovieItem; 
