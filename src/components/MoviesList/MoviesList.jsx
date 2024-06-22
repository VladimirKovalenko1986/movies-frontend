import { useState, useEffect } from "react";
import axios from "axios";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const elements = movies.map(({ id, title, year }) => (
    <li key={id}>
      <h2>{title}</h2>
      <p>{year}</p>
    </li>
  ));

  return <ul>{elements}</ul>;
}
