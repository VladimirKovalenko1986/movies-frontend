import css from "../MoviesList/MoviesList.module.css";
import ContactItem from "../ContactItem/ContactItem.jsx";

export default function MoviesList({ contacts }) {
  return (
    <ul className={css.conteiner}>
      {contacts.map((item) => (
        <li key={item._id}>
          <ContactItem data={item} />
        </li>
      ))}
    </ul>
  );
}
