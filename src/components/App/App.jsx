import { useState, useEffect } from "react";
import { fetchAllContacts } from "../../api-contacts.js";
import MoviesList from "../MoviesList/MoviesList";
import Title from "../Title/Title";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import css from "../App/App.module.css";
import Loader from "../Loader/Loader.jsx";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAllContacts();
        setContacts(data.data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={css.conteiner}>
      <Title text="My Best Contacts" />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <MoviesList contacts={contacts} />
    </div>
  );
}
