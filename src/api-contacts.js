import axios from "axios";
const { VITE_API_URL } = import.meta.env;

const fetchAllContacts = async () => {
  const url = `${VITE_API_URL}/contacts`;
  const response = await axios.get(url);
  return response.data;
};

export { fetchAllContacts };
