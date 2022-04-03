import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import "./Home.css";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    
    const response = await axios.get("/api/ninjas");
    if(response.status === 200){
      setData(response.data);
    }
  };
 
  const deleteUser = async (_id) => {
    console.log(_id);
    if(window.confirm("Are you sure that you wanted to delete this Ninja?")){
      const response = await axios.delete(`/api/delete/${_id}`);
      if(response.status === 200){
        getUsers();
      }
    }
  }


  return (
    <div style={{marginTop: "150px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>No.</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Rank</th>
            <th style={{textAlign:"center"}}>Available</th>
            <th style={{textAlign:"center"}}>GeoLocation</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) =>{
            return (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.rank}</td>
                <td>{item.available}</td>
                <td>{item.geomtry.coordinates[0]},{item.geomtry.coordinates[1]}</td>
                <td>
                  <Link 
                    to={`/edit/${item._id}`}
                    state={{
                      data: item
                    }}
                   >
                    <button className='btn btn-edit' data={item} >Edit</button>
                  </Link>
                  <button className='btn btn-delete' onClick={ () => deleteUser(item._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home