// import  { useState,useRef } from 'react'
import { client } from "../assets/Js/Client"
// import { useDebounce } from "./Hook";

export default function SearchTodo(props) {
    // const typingTimeoutRef = useRef(null);
    // eslint-disable-next-line react/prop-types
    const { taskName,searchValue } = props;

    console.log(taskName);
    // const [searchTerm, setSearchTerm] = useState('');
    async function handleSearch(e) {
        // console.log(e);
      e.preventDefault();
      const apiKey = localStorage.getItem("apiKey");
      const { data } = await client.get(`/todos?q=${taskName}`,apiKey);
      // console.log(data);
      // return han
      searchValue(data.data.listTodo);
    }
  return (
    <div>
        <form onSubmit={(e) => { handleSearch(e) }}>
        <button className="add-button">Search</button>
      </form>
    </div>
  );
}
