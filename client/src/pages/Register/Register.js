import React, {useState, useEffect} from 'react';
import { useHistory , useLocation, useNavigate} from "react-router-dom";
// import axios from 'axios';
import "./Register.css";


export default function Register() {
  const [name, setName] = useState("");
  const [rank, setrank] = useState("");
  const [available, setAvailable] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  // let history = useHistory();
  const location = useLocation();
  const navigate = useNavigate();
  
  function handleRegister(e) {
    e.preventDefault();
    fetch('/api/ninjas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, rank: rank, available: available, lat:lat, long:long})
    }).then(r => r.json())
        .then(data => {
            if (data.ok) {
                console.log({ "User added": true });
                navigate('/');
            } else {
                console.log({ "User added": false });
            }
        })
}

 
  return (
    <div style={{marginTop: "100px"}}>
        <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleRegister}
        >

          <label htmlFor="name">Name</label>
          <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Ninja Name"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
          required={true}
          />

          <label htmlFor="rank">rank</label>
          <input
          type="text"
          id="rank"
          name="rank"
          placeholder="Enter Ninja rank"
          onChange={(e) => {
            setrank(e.target.value)
          }}
          value={rank}
          required={true}

          />

          <label htmlFor="available">available</label>
          <input
          type="text"
          id="available"
          name="available"
          placeholder="Ninja available"
          onChange={(e) => {
            setAvailable(e.target.value)
          }}
          value={available}
          required={true}

          />

          <label htmlFor="lat">lat</label>
          <input
          type="text"
          id="lat"
          name="lat"
          placeholder="lat"
          onChange={(e) =>{
            setLat(e.target.value)
          }}
          value={lat}
          required={true}

          />

          <label htmlFor="long">long</label>
          <input
          type="text"
          id="long"
          name="long"
          placeholder="long"
          onChange={(e) => {
            setLong(e.target.value)
          }}
          value={long}
          required={true}

          />

          <input type="submit" value="Add" />
        </form>
    </div>
  )
}
