import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Friends from '../Friends/Friends';


const Home = () => {
    const [friends, setFriend]=useState([])

    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data=>setFriend(data))
   
    },[])
    return (
        <div>
            {
      friends.map((friend=> <Friends friend={friend}></Friends>))
    }
        </div>
    );
};

export default Home;