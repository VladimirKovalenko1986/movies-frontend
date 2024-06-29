import css from "./ContactItem.module.css";

export default function ContactItem({
  data: { name, phoneNumber, email, contactType },
}) {
  return (
    <div className={css.conteiner}>
      <div className={css.wrapper}>
        <b className={css.text}>Name:</b>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <b className={css.text}>Phone-Number:</b>
        <p>{phoneNumber}</p>
      </div>
      <div className={css.wrapper}>
        <b className={css.text}>Email:</b>
        <p>{email || "anonymous@gmail.com"}</p>
      </div>
      <div className={css.wrapper}>
        <b className={css.text}>Contact-Type:</b>
        <p>{contactType}</p>
      </div>
    </div>
  );
}
