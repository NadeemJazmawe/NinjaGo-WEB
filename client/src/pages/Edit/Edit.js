import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Edit(props) {

    const location = useLocation();
    const data = location.state.data;
    const navigate = useNavigate();

    const [name, setName] = useState(data.name);
    const [rank, setrank] = useState(data.rank);
    const [available, setAvailable] = useState(data.available);
    const [lat, setLat] = useState(data.geomtry.coordinates[0]);
    const [long, setLong] = useState(data.geomtry.coordinates[1]);


    // console.log(data);
    // console.log({name: name});
    // console.log({rank: rank});
    // console.log({available: available});
    // console.log({lat: lat});
    // console.log({long: long});

    const handleEdit = async (e) => {
        e.preventDefault();
        fetch(`/api/edit/${data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, rank: rank, available: available, lat:lat, long:long})
        }).then(r => r.json())
            .then(data => {
                if (data.ok) {
                    console.log({ "User editted": true });
                    navigate("/")
                } else {
                    console.log({ "User editted": false });
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
        onSubmit={handleEdit}
        >
           

          <label htmlFor="name">Name</label>
          <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
          />

          <label htmlFor="rank">rank</label>
          <input
          type="text"
          id="rank"
          name="rank"
          onChange={(e) => {
            setrank(e.target.value)
          }}
          value={rank}
          />

          <label htmlFor="available">available</label>
          <input
          type="text"
          id="available"
          name="available"
          onChange={(e) => {
            setAvailable(e.target.value)
          }}
          value={available}
          />

          <label htmlFor="lat">lat</label>
          <input
          type="text"
          id="lat"
          name="lat"
          onChange={(e) =>{
            setLat(e.target.value)
          }}
          value={lat}
          />

          <label htmlFor="long">long</label>
          <input
          type="text"
          id="long"
          name="long"
          onChange={(e) => {
            setLong(e.target.value)
          }}
          value={long}
          />

          <input type="submit" value="Edit" />
        </form>
    </div>
  )
}
