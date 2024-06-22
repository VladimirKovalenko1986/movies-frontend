import { useState, useEffect } from "react";
import axios from "axios";

const { VITE_API_URL } = import.meta.env;

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${VITE_API_URL}/movies`);
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
