import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId}=useParams();
   const [friend,setfriends]= useState({});
  useEffect(()=>{
      const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>setfriends(data));
  },[])

    return (
        <div>
            <h2>This is friend  {friendId} </h2>
             <h1>Name:{friend.name}</h1>
            <h3>Email:{friend.email}</h3>
          <p>Phone:{friend.phone}</p>
          <p>Website:{friend.website}</p>
    
        </div>
    );
};

export default FriendDetail;