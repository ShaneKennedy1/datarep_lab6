import { useState } from "react";
import axios from "axios"; 

function Create() {
  // Defining state variables to store movie title, year, and poster URL
  const [title, setTitle] = useState('');  
  const [year, setYear] = useState('');    
  const [poster, setPoster] = useState(''); 

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    
    const movie = {
      title: title,
      year: year,
      poster: poster
    };
    
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      {/* Heading for the component */}
      <h2>Hello from Create Component.</h2> 
      
      {/* Form with an onSubmit event handler */}
      <form onSubmit={handleSubmit}>

        {/* Form group for movie title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input 
            // Input field for title
            type="text"  
            className="form-control"
            // Binding input value to title state
            value={title}  
            onChange={(e) => { 
                // Update title state when input changes
                setTitle(e.target.value)  
            }}
          />
         
          {/* Form group for movie year */}
          <div>
            <label> Movie Year: </label>
            <input
            // Input field for year
              type="text"  
              className="form-control"
            // Binding input value to year state
              value={year}  
              onChange={(e) => { 
                // Update year state when input changes
                setYear(e.target.value)  
              }}
            />
          </div>

          {/* Form group for movie poster URL */}
          <div>
            <label> Movie Poster URL: </label>
            <input
            // Input field for poster URL
              type="text"  
              className="form-control"
            // Binding input value to poster state
              value={poster}  
              onChange={(e) => { 
              // Update poster state when input changes
                setPoster(e.target.value)  
              }}
            />
          </div>
        </div>

        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;  // Exporting the Create component
