import React, { useEffect, useState } from 'react';
import "./Add.css";

import axios from 'axios';

const AddToDo = () => {
  const [toDo, setToDo] = useState("");
  const [status, setStatus] = useState("Not Completed");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData =async()=>{
      
          try {
        const response = await axios.get('http://localhost:8000/todos');
        setData(response.data.todos);
        console.log(data)
        data.map((item)=>console.log(item))
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    }
    fetchData()
  }, []); 
   const handleDelete = async (id) => {
   
    try {
      const response =await axios.delete(`http://localhost:8000/todos/delete/${id}`);
      setData(response.data.todos)

      
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };


  const handleChange = (event) => {
    setToDo(event.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:8000/todos/post", { todo: toDo, status });
      setData(response.data.todos);
      
    } catch (error) {
      console.error('Error adding todo:', error);
    }
    setToDo(""); 
  };

  return (
    <div>
  
      <input
        type='text'
        placeholder='Enter the Task you want to Add'
        value={toDo}
        onChange={handleChange}
      /><br />
      <select id='status' value={status} onChange={(event) => setStatus(event.target.value)}>
        <option>Completed</option>
        <option>Not Completed</option>
      </select>

      <button onClick={handleClick}>
        Add to List
      </button>
      {data.length === 0 ? (
        <p id='message'>Nothing To Show</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li id='item' key={item._id}>
              {item.todo} : {item.status}
              <button onClick={() => handleDelete(item._id)} >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
  
    </div>
  );
};

export default AddToDo;
